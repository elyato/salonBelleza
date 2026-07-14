using Belleza.Domain.Entities;
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

        public async Task<Employee> HandleEmployee(int employeeId, string name)
        {
            var employee = new Employee
            {
                Id = employeeId,
                Name = name
            };

            await _repository.AddAsync(employee, CancellationToken.None);
            return employee;
        }
    }
}
