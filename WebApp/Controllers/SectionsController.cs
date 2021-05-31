using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApp.Data;
using WebApp.Models.Components;
using WebApp.Repositories;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SectionsController : Controller
    {
        private readonly ISectionRepository _repository;
        private Section _section = new() {Id = 1, Name = "Молочные продукты"};

        private List<Subsection> _subsections = new()
        {
            new Subsection {Id = 1, Name = "Молоко и жопа"},
            new Subsection {Id = 2, Name = "Сыры"},
            new Subsection {Id = 3, Name = "Сладкое"}
        };
        
        public SectionsController(ISectionRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("All")]
        public List<Section> GetSections()
        {
            return new()
            {
                _section
            };
            return _repository.GetSections();
        }
            
        [HttpGet]
        public Section GetProductById([FromQuery] int sectionId)
        {
            return _section;
            return _repository.GetSectionById(sectionId);
        }

        [HttpPost]
        public Section InsertSection([FromQuery] string sectionName)
        {
            return _repository.InsertSection(new Section() {Name = sectionName});
        }

        [HttpGet]
        [Route("Subsections")]
        public List<Subsection> GetSubsections([FromQuery] int sectionId)
        {
            return _subsections;
            return _repository.GetSubsections(sectionId);
        }

        [HttpPost]
        [Route("Subsections")]
        public void AddSubsection([FromQuery] int sectionId, [FromQuery] int subsectionId)
        {
            _repository.AddSubsection(sectionId, subsectionId);
        }
    }
}