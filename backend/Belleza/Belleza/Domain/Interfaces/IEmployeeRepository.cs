using Belleza.Domain.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace Belleza.Domain.Interfaces
{
    public interface IEmployeeRepository
    {
        Task AddAsync(Employee employee, CancellationToken ct = default);
        Task<Employee?> GetByIdAsync(int id, CancellationToken ct = default);
    }
}
