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
        // GET
        private readonly ISectionRepository _repository;
        
        public SectionsController(ApplicationDbContext context)
        {
            _repository = new SectionRepository(context);
        }

        [HttpGet]
        [Route("All")]
        public List<Section> GetSections()
        {
            return _repository.GetSections();
        }
            
        [HttpGet]
        public Section GetProductById([FromQuery] int sectionId)
        {
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