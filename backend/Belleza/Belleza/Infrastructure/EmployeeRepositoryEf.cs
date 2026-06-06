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
            if (employee == null)
            {
                throw new ArgumentNullException(nameof(employee));
            }
            _db.Employees.Add(employee);
            await _db.SaveChangesAsync(ct);
        }

        public Task<Employee?> GetByIdAsync(int id, CancellationToken ct = default)
        {
            if (id == 0) { 
            
                throw new ArgumentNullException(nameof(id));
            }

            var employee = _db.Employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
            {
                throw new Exception("No existe este empleado ");
            }


            return _db.Employees.FirstOrDefaultAsync(e => e.Id == id, ct);
        }

        public  Task<List<Employee>> GetEmployees()
        {
            if(_db.Employees == null )
            {
                throw new Exception("No existen empleados");
            }  

            return _db.Employees.ToListAsync();
        }
    }
}
