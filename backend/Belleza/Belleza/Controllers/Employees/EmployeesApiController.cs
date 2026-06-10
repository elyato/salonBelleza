using Belleza.Domain.Entities;
using Belleza.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Belleza.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeRepository _repo;
        public EmployeesController(IEmployeeRepository repo) => _repo = repo;

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateEmployeeDto dto)
        {
            var employee = new Employee
            {
                Name = dto.Name,
                LastName = dto.LastName,
                Skills = dto.Skills ?? string.Empty
            };

            await _repo.AddAsync(employee, default);
            return CreatedAtAction(nameof(Get), new { id = employee.Id }, employee);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var e = await _repo.GetByIdAsync(id, default);
            return e is null ? NotFound() : Ok(e);
        }
        [HttpGet]
        public Task<List<Employee>> GetEmployees()
        {
            var employees = _repo.GetEmployees();

            return employees;
            
        }
    }

    public class CreateEmployeeDto
    {
        public string Name { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string? Skills { get; set; }
    }
}
