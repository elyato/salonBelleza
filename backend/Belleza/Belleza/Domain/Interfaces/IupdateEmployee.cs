using Belleza.Domain.Entities;

namespace Belleza.Domain.Interfaces
{
    public interface IupdateEmployee
    {
        Task<bool> HandleUpdateEmployee(Employee? employee);

    }
}
