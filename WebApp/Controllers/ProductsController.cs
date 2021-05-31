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
        private List<Product> _products = new() {
            new Product{ Id = 1, Name = "Крушовице", ImgSource = "https://images.av.ru/av.ru/product/hf7/h5e/9114660896798.jpg", SectionId = 1, SubsectionId = 1, Price = 50},
            new Product{ Id = 1, Name = "Крушовице темное", ImgSource = "https://lenta.gcdn.co/globalassets/1/-/25/25/64/15428.png", SectionId = 1, SubsectionId = 2, Price = 100}
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
            return _repository.GetProducts();
        }
            
        [HttpGet]
        public Product GetProductById([FromQuery] int productId)
        {
            return _products.FirstOrDefault(p => p.Id == productId);
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