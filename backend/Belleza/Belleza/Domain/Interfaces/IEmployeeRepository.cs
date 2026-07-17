using Belleza.Domain.Entities;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Belleza.Domain.Interfaces
{
    public interface IEmployeeRepository
    {
        Task AddAsync(Employee employee, CancellationToken ct = default);
        Task<Employee?> GetByIdAsync(int id, CancellationToken ct = default);
        Task<List<Employee>> GetEmployees();
        Task<bool> DeleteEmployee(int id, CancellationToken ct = default);

        Task<bool> handleUpdateEmployee(Employee employee, CancellationToken ct = default);
    }
}
