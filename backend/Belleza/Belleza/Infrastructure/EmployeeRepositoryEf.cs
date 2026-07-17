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

        public async Task<Employee?> GetByIdAsync(int id, CancellationToken ct = default)
        {
            if (id == 0)
            {
                throw new ArgumentException("Id inválido", nameof(id));
            }

            // Await the async EF operation directly to avoid using the DbContext after disposal
            return await _db.Employees.FirstOrDefaultAsync(e => e.Id == id, ct);
        }

        public  Task<List<Employee>> GetEmployees()
        {
            if(_db.Employees == null )
            {
                throw new Exception("No existen empleados");
            }  

            return _db.Employees.ToListAsync();
        }

        public async Task<bool> DeleteEmployee(int id, CancellationToken ct = default)
        {
            if (id == 0)
            {
                throw new ArgumentException("Id inválido", nameof(id));
            }

            var empleado = await _db.Employees.FirstOrDefaultAsync(e => e.Id == id, ct);
            if (empleado == null)
            {
                return false;
            }

            _db.Employees.Remove(empleado);
            await _db.SaveChangesAsync(ct);
            return true;
        }

        public async Task<bool> handleUpdateEmployee(Employee employee, CancellationToken ct = default)
        {
            if (employee == null)
                throw new ArgumentNullException(nameof(employee));

            var empleado = await _db.Employees
                .FirstOrDefaultAsync(e => e.Id == employee.Id, ct);

            if (empleado == null)
                throw new ArgumentException("Este empleado no existe.");

            empleado.Name = employee.Name;
            empleado.LastName = employee.LastName;
            empleado.Skills = employee.Skills;

            await _db.SaveChangesAsync(ct);

            return true;
        }
    }
}
