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
    public class ProductsController : Controller
    {
        private readonly IProductRepository _repository;

        private List<Product> _products = new()
        {
            new Product { Id = 1, Name = "Молоко Ирбитское", ImgSource = "https://bit.ly/2SB5Tsu", SectionId = 1, SubsectionId = 1 },
            new Product { Id = 2, Name = "Сырок Б.Ю.Александров", ImgSource = "https://bit.ly/3cmx1mf", SectionId = 1, SubsectionId = 3 },
            new Product { Id = 3, Name = "Сыр Российский Ирбитский", ImgSource = "https://bit.ly/3fS5hH2", SectionId = 1, SubsectionId = 2 },
            new Product { Id = 4, Name = "Творог Талицкий", ImgSource = "https://bit.ly/2RZflpv", SectionId = 1, SubsectionId = 1 }
        };
        
        public ProductsController(IProductRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("All")]
        public List<Product> GetProducts()
        {
            return _products;
            //return _repository.GetProducts();
        }
            
        [HttpGet]
        public Product GetProductById([FromQuery] int productId)
        {
            var product = _products.FirstOrDefault(p => p.Id == productId);
            return product ?? _products.First();
            //return _repository.GetProductById(productId);
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