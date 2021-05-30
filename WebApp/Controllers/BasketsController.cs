using System.Collections.Generic;
using IdentityServer4.Extensions;
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
        private Basket _basket = new() {Id = 1, Name = "Молочка"};

        private List<ProductInBasket> _products = new()
        {
            new ProductInBasket {ProductId = 1, MeasureId = 1, Count = 2},
            new ProductInBasket {ProductId = 2, MeasureId = 1, Count = 1},
            new ProductInBasket {ProductId = 3, MeasureId = 2, Count = 500},
            new ProductInBasket {ProductId = 3, MeasureId = 2, Count = 300}
        };
        
        public BasketsController(ApplicationDbContext context)
        {
            _repository = new BasketRepository(context);
        }
        
        [HttpGet]
        public Basket GetById([FromQuery] int basketId)
        {
            return _basket;
            //return _repository.GetBasketById(basketId);
        }

        [HttpPost]
        public Basket Insert([FromQuery] string basketName)
        {
            return !User.Identity.IsAuthenticated ? null : 
                _repository.Insert(new Basket() {Name = basketName}, User.Identity.GetSubjectId());
        }
        
        [HttpGet]
        [Route("Products")]
        public List<ProductInBasket> GetProducts([FromQuery] int basketId)
        {
            return _products;
            //return _repository.GetProductsByBasketId(basketId);
        }

        [HttpPost]
        [Route("Products")]
        public void AddProduct([FromQuery] ProductInBasket productInBasket, [FromQuery] int basketId)
        {
            _repository.AddProduct(productInBasket.ProductId, productInBasket.MeasureId, productInBasket.Count,
                basketId);
        }
        
        [HttpGet]
        [Route("CurrentUser")]
        public List<Basket> GetBaskets()
        {
            return new()
            {
                _basket
            };
            //return _repository.GetBasketsOfUser(User.Identity.GetSubjectId());
        }
    }
}