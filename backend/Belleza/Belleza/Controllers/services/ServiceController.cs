using Belleza.Domain.Entities;
using Belleza.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Belleza.Controllers.services
{
    [ApiController]
    [Route("api/[controller]")]
    public class ServiceController : Controller
    {
private readonly IServiceRepository _repo;
        
        public ServiceController(IServiceRepository repo) => _repo = repo;

        [HttpGet]
        public async Task<List<Services>> GetServices()
        {
            if (_repo == null) {
                throw new Exception("No hay servicios disponibles.");
            }

            var service = await _repo.GetServices();
            return  service.ToList();
        }

    }
}
