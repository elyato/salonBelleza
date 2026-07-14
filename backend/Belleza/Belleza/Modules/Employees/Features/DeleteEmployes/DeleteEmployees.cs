using Belleza.Domain.Entities;
using Belleza.Domain.Interfaces;

namespace Belleza.Modules.Employees.Features.DeleteEmployes
{
    public class DeleteEmployees : IDeleteEmployee
    {
        private readonly IEmployeeRepository _repository;

        public DeleteEmployees(IEmployeeRepository repository)
        {
            _repository = repository;
        }

        public async Task HandleDeleteEmployee(int employeeId)
        {
            var deleted = await _repository.DeleteEmployee(employeeId, System.Threading.CancellationToken.None);
            if (!deleted)
            {
                throw new System.Exception("No se encontró el empleado para eliminar.");
            }
        }
    }
}
