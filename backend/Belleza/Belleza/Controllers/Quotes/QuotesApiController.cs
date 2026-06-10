using Belleza.Domain.Entities;
using Belleza.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Belleza.Controllers.Quotes
{
        [ApiController]
        [Route("api/[controller]")]
    public class QuotesApiController : ControllerBase
    {
        private readonly IQuotesRepository _repo;

        public QuotesApiController (IQuotesRepository repo) => _repo = repo;
        [HttpPost]
        public async Task<IActionResult> AddQuote([FromBody] CreateQuoteDto dto)
        {
            if (dto == null)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var q = new Belleza.Domain.Entities.Quotes
            {
                IdEmployee = dto.IdEmployee,
                Phone = dto.Phone,
                Name = dto.Name,
                IdService = dto.IdService,
                AppointmentDate = dto.AppointmentDate
            };

            await _repo.AddQuote(q);

            return Ok(q);
        }


    }


    public class CreateQuoteDto
    {
   public     int IdEmployee { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int IdService { get; set; }
        [Required]
        public DateTime AppointmentDate { get; set; }


    }
}
