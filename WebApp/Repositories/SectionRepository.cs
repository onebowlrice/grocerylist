using System.Collections.Generic;
using System.Linq;
using WebApp.Data;
using WebApp.Models.Components;
using WebApp.Models.Links;

namespace WebApp.Repositories
{
    public class SectionRepository : ISectionRepository
    {
        private readonly ApplicationDbContext _context;

        public SectionRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public Section GetSectionById(int id)
        {
            return _context.Sections.FirstOrDefault(s => s.Id.Equals(id));
        }

        public Section InsertSection(Section section)
        {
            if (_context.Sections.FirstOrDefault(m => m.Name.Equals(section.Name)) is not null)
                return null;
            _context.Sections.Add(section);
            return _context.Sections.FirstOrDefault(m => m.Name.Equals(section.Name));
        }

        public List<Subsection> GetSubsections(int id)
        {
            return _context.SectionsAndSubsections.Where(s => s.SectionId.Equals(id)).Select(s =>
                _context.Subsections.FirstOrDefault(sub => sub.Id.Equals(s.SubsectionId))).ToList();
        }

        public void AddSubsection(int sectionId, int subSectionId)
        {
            _context.SectionsAndSubsections.Add(new SectionAndSubsection()
                {SectionId = sectionId, SubsectionId = subSectionId});
        }

        public List<Section> GetSections()
        {
            return _context.Sections.ToList();
        }
    }
}