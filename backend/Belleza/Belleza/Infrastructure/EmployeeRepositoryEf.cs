using Belleza.Domain.Entities;
using Belleza.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Belleza.Infrastructure
{
    public class EmployeeRepositoryEf : IEmployeeRepository
    {
        private readonly AppDbContext _db;

        public EmployeeRepositoryEf(AppDbContext db) => _db = db;

        public async Task AddAsync(Employee employee, CancellationToken ct = default)
        {
            _db.Employees.Add(employee);
            await _db.SaveChangesAsync(ct);
        }

        public Task<Employee?> GetByIdAsync(int id, CancellationToken ct = default)
        {
            return _db.Employees.FirstOrDefaultAsync(e => e.Id == id, ct);
        }
    }
}
