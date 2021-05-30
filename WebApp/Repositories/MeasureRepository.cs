using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using WebApp.Data;
using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public class MeasureRepository : IMeasureRepository
    {
        private readonly ApplicationDbContext _context;

        public MeasureRepository(IServiceScopeFactory scopeFactory)
        {
            _context = scopeFactory.CreateScope().ServiceProvider.GetRequiredService<ApplicationDbContext>();
        }
        
        public Measure GetMeasureById(int id)
        {
            return _context.Measures.FirstOrDefault(m => m.Id.Equals(id));
        }

        public Measure InsertMeasure(Measure measure)
        {
            if (_context.Measures.FirstOrDefault(m => m.Name.Equals(measure.Name)) is not null)
                return null;
            _context.Measures.Add(measure);
            _context.SaveChanges();
            return _context.Measures.FirstOrDefault(m => m.Name.Equals(measure.Name));
        }

        public List<Measure> GetMeasures()
        {
            return _context.Measures.ToList();
        }
    }
}