using Belleza.Controllers.Quotes;
using Belleza.Domain.Entities;
using Belleza.Domain.Interfaces;

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
            _db.Quotes.Add(quotes);
            await _db.SaveChangesAsync();
        }


    }
}
