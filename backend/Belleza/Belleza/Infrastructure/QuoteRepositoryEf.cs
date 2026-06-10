using Belleza.Controllers.Quotes;
using Belleza.Domain.Entities;
using Belleza.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Belleza.Infrastructure
{
    public class QuoteRepositoryEf : IQuotesRepository
    {
        private readonly AppDbContext _db;

        public QuoteRepositoryEf(AppDbContext db) => _db = db;

        public async Task AddQuote(Quotes quotes)
        {
            if (quotes == null)
            {
                throw new Exception("error 1");
            }
            var existeEmpleado = await _db.Employees
                .AnyAsync(e => e.Id == quotes.IdEmployee);

            if (!existeEmpleado)
            {
                throw new Exception("El empleado no existe.");
            }
            _db.Quotes.Add(quotes);
            await _db.SaveChangesAsync();
        }


    }
}
