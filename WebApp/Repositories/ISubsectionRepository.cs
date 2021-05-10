using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public interface ISubsectionRepository
    {
        Subsection GetSubsectionById(int subsectionId);
        Subsection InsertSubsection(Subsection name);
    }
}