using Microsoft.AspNetCore.Mvc;
using WebApp.Data;
using WebApp.Models.Components;
using WebApp.Repositories;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubsectionsController : Controller
    {
        private readonly ISubsectionRepository _repository;

        public SubsectionsController(ISubsectionRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public Subsection GetSubsectionById([FromQuery] int subsectionId)
        {
            return _repository.GetSubsectionById(subsectionId);
        }

        [HttpPost]
        public Subsection InsertSubsection([FromQuery] string name)
        {
            return _repository.InsertSubsection(new Subsection() {Name = name});
        }
    }
}