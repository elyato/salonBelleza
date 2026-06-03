using Belleza.Domain.Interfaces;

namespace Belleza.Modules.Employees.Features.CreateEmployes
{

    public class CreateEmployees : ICreateEmployees
    {
        private readonly IEmployeeRepository _repository;

        public CreateEmployees(IEmployeeRepository repository)
        {
            _repository = repository;
        }

        public async System.Threading.Tasks.Task<Belleza.Domain.Entities.Employee> HandleEmployee(int employeeId, string name)
        {
            var employee = new Belleza.Domain.Entities.Employee
            {
                Id = employeeId,
                Name = name
            };

            await _repository.AddAsync(employee, System.Threading.CancellationToken.None);
            return employee;
        }
    }
}
