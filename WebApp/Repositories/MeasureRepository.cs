using System.Collections.Generic;
using System.Linq;
using WebApp.Data;
using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public class MeasureRepository : IMeasureRepository
    {
        private readonly ApplicationDbContext _context;

        public MeasureRepository(ApplicationDbContext context)
        {
            _context = context;
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