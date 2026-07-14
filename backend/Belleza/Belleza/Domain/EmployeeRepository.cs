using Belleza.Domain.Entities;
using Belleza.Domain.Interfaces;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

namespace Belleza.Domain
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private static readonly ConcurrentDictionary<int, Employee> _store = new();

        public Task AddAsync(Employee employee, CancellationToken ct = default)
        {
            _store[employee.Id] = employee;
            return Task.CompletedTask;
        }

        public Task<bool> DeleteEmployee(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Employee?> GetByIdAsync(int id, CancellationToken ct = default)
        {
            _store.TryGetValue(id, out var employee);
            return Task.FromResult(employee);
        }
        public Task<List<Employee>> GetEmployees()
        {
            return Task.FromResult(_store.Values.ToList());
        }

        public Task<bool> DeleteEmployee(int id, CancellationToken ct = default)
        {
            var removed = _store.TryRemove(id, out _);
            return Task.FromResult(removed);
        }
    }
}
