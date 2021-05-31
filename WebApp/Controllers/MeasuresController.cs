using System.Collections.Generic;
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

        public MeasuresController(IMeasureRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public Measure GetMeasureById([FromQuery] int measureId)
        {
            return _repository.GetMeasureById(measureId);
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
            return _repository.GetMeasures();
        }
    }
}