using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApp.Data;
using WebApp.Models.Components;
using WebApp.Repositories;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductRepository _repository;
        
        public ProductsController(IProductRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("All")]
        public List<Product> GetProducts()
        {
            return _repository.GetProducts();
        }
            
        [HttpGet]
        public Product GetProductById([FromQuery] int productId)
        {
            return _repository.GetProductById(productId);
        }

        [HttpPost]
        public Product InsertProduct(
            [FromQuery] string productName,
            [FromQuery] string imgSource,
            [FromQuery] int price,
            [FromQuery] int sectionId = -1,
            [FromQuery] int subSectionId = -1)
        {
            return _repository.InsertProduct(new Product()
            {
                Name = productName, ImgSource = imgSource, Price = price, SectionId = sectionId,
                SubsectionId = subSectionId
            });
        }
    }
}