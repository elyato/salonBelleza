using Belleza.Domain.Entities;

namespace Belleza.Domain.Interfaces
{
    public interface IServiceRepository
    {
        Task<IEnumerable<Services>> GetServices();
        
        
    }
}
