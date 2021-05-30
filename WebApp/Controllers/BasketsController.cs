using System.Collections.Generic;
using IdentityServer4.Extensions;
using Microsoft.AspNetCore.Mvc;
using WebApp.Data;
using WebApp.Models;
using WebApp.Models.Components;
using WebApp.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace WebApp.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class BasketsController : Controller
    {
        private readonly IBasketRepository _repository;
        
        public BasketsController(IBasketRepository repository)
        {
            _repository = repository;
        }
        
        [HttpGet]
        public Basket GetById([FromQuery] int basketId)
        {
            return _repository.GetBasketById(basketId);
        }

        [HttpPost]
        public Basket Insert([FromQuery] string basketName)
        {
            return User.Identity != null && !User.Identity.IsAuthenticated ? null : 
                _repository.Insert(new Basket() {Name = basketName}, User.Identity.GetSubjectId());
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
        
        [HttpGet]
        [Route("CurrentUser")]
        public List<Basket> GetBaskets()
        {
            return _repository.GetBasketsOfUser(User.Identity.GetSubjectId());
        }
    }
}