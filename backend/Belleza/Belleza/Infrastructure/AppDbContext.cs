using Belleza.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Belleza.Infrastructure
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; } = null!;
        public DbSet<Quotes> Quotes { get; set; } = null!;
    }
}
