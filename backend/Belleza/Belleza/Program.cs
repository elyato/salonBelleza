using Belleza.Domain.Interfaces;
using Belleza.Infrastructure;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register EF DbContext and repository
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepositoryEf>();
builder.Services.AddScoped<IQuotesRepository, QuoteRepositoryEf>();

var app = builder.Build();

// Ensure database schema exists (creates tables if needed)
try
{
    using var scope = app.Services.CreateScope();
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}
catch (Exception ex)
{
    // Log and continue - Swagger UI may still load
    Console.WriteLine("Warning: could not ensure DB created: " + ex.Message);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Map attribute-routed controllers so Swagger discovers them
app.MapControllers();

app.UseHttpsRedirection();

app.Run();
