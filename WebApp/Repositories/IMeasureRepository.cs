using System.Collections.Generic;
using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public interface IMeasureRepository
    {
        Measure GetMeasureById(int id);
        Measure InsertMeasure(Measure measure);
        List<Measure> GetMeasures();
    }
}