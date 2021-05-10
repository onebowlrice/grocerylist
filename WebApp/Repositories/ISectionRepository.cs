using System.Collections.Generic;
using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public interface ISectionRepository
    {
        Section GetSectionById(int id);
        Section InsertSection(Section section);
        List<Subsection> GetSubsections(int id);
        void AddSubsection(int sectionId, int subSectionId);
        List<Section> GetSections();
    }
}