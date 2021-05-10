using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApp.Data;
using WebApp.Models;
using WebApp.Models.Components;
using WebApp.Repositories;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BasketsController : Controller
    {
        private readonly IBasketRepository _repository;
        
        public BasketsController(ApplicationDbContext context)
        {
            _repository = new BasketRepository(context);
        }
        
        [HttpGet]
        public Basket GetById([FromQuery] int basketId)
        {
            return _repository.GetBasketById(basketId);
        }

        [HttpPost]
        public Basket Insert([FromQuery] string basketName)
        {
            return _repository.Insert(new Basket() {Name = basketName});
        }
        
        [HttpGet]
        [Route("Products")]
        public List<ProductInBasket> GetProducts([FromQuery] int basketId)
        {
            return _repository.GetProductsByBasketId(basketId);
        }

        [HttpPost]
        [Route("Products")]
        public void AddProduct([FromQuery] ProductInBasket productInBasket, [FromQuery] int basketId)
        {
            _repository.AddProduct(productInBasket.ProductId, productInBasket.MeasureId, productInBasket.Count,
                basketId);
        }
    }
}