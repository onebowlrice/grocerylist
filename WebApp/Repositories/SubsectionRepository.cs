using System.Linq;
using WebApp.Data;
using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public class SubsectionRepository : ISubsectionRepository
    {
        private readonly ApplicationDbContext _context;

        public SubsectionRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Subsection GetSubsectionById(int subsectionId)
        {
            return _context.Subsections.FirstOrDefault(s => s.Id.Equals(subsectionId));
        }

        public Subsection InsertSubsection(Subsection name)
        {
            if (_context.Subsections.FirstOrDefault(m => m.Name.Equals(name.Name)) is not null)
                return null;
            _context.Subsections.Add(name);
            _context.SaveChanges();
            return _context.Subsections.FirstOrDefault(m => m.Name.Equals(name.Name));
        }
    }
}