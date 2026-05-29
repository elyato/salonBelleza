using Belleza.Domain.Entities;

namespace Belleza.Domain.Interfaces
{
    public interface ICreateEmployees
    {
        Task<Employee> HandleEmployee(int employeeId, string name);
    }
}