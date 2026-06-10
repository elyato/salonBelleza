using Microsoft.EntityFrameworkCore;
using Belleza.Domain.Entities;
using Belleza.Domain.Interfaces;

namespace Belleza.Infrastructure
{
    public class ServiceRepositoryEf : IServiceRepository
    {
        private readonly AppDbContext _context;

        public ServiceRepositoryEf(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Services>> GetServices()
        {
            return await _context.Services.ToListAsync();
        }
    }
}