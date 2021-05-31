using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using WebApp.Data;
using WebApp.Models.Components;
using WebApp.Models.Links;

namespace WebApp.Repositories
{
    public class SectionRepository : ISectionRepository
    {
        private readonly ApplicationDbContext _context;

        public SectionRepository(IServiceScopeFactory scopeFactory)
        {
            _context = scopeFactory.CreateScope().ServiceProvider.GetRequiredService<ApplicationDbContext>();
        }


        public Section GetSectionById(int id)
        {
            return _context.Sections.FirstOrDefault(s => s.Id.Equals(id));
        }

        public Section InsertSection(Section section)
        {
            if (_context.Sections.FirstOrDefault(m => m.Name.Equals(section.Name)) is not null)
                return null;
            _context.SaveChanges();
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
            _context.SaveChanges();
        }

        public List<Section> GetSections()
        {
            return _context.Sections.ToList();
        }
    }
}