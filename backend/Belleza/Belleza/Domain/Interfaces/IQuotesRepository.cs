using Belleza.Controllers.Quotes;
using Belleza.Domain.Entities;

namespace Belleza.Domain.Interfaces
{
    public interface IQuotesRepository
    {
        Task AddQuote(Quotes quotes);
    }
}
