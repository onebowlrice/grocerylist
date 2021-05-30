using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApp.Data;
using WebApp.Models.Components;
using WebApp.Repositories;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MeasuresController : Controller
    {
        private readonly IMeasureRepository _repository;

        private List<Measure> _measures = new()
        {
            new Measure {Id = 1, Name = "штука"},
            new Measure {Id = 2, Name = "грамм"}
        };

        public MeasuresController(ApplicationDbContext context)
        {
            _repository = new MeasureRepository(context);
        }

        [HttpGet]
        public Measure GetMeasureById([FromQuery] int measureId)
        {
            var measure = _measures.FirstOrDefault(m => m.Id == measureId);
            return measure ?? _measures.First();
            //return _repository.GetMeasureById(measureId);
        }

        [HttpPost]
        public Measure InsertMeasure([FromQuery] string measureName)
        {
            return _repository.InsertMeasure(new Measure() {Name = measureName});
        }
        
        [HttpGet]
        [Route("All")]
        public List<Measure> GetMeasures()
        {
            return _measures;
            return _repository.GetMeasures();
        }
    }
}