using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApp.Data;
using WebApp.Models.Components;
using WebApp.Repositories;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        private readonly IUserRepository _userRepository;
        
        public UsersController(ApplicationDbContext context)
        {
            _userRepository = new UserRepository(context);
        }
        
        [HttpGet]
        [Route("CurrentUser")]
        public User GetUser()
        {
            return User.Identity != null ? _userRepository.FindByName(User.Identity.Name) : null;
        }

        [HttpPost]
        public User AddUser([FromQuery] string name, [FromQuery] string imgSource)
        {
            return _userRepository.Insert(new User() {Name = name, ImgSource = imgSource});
        }

        [HttpGet]
        [Microsoft.AspNetCore.Mvc.Route("Baskets")]
        public List<Basket> GetBasketsByUserId([FromQuery] int userId)
        {
            return _userRepository.GetBasketsByUserId(userId);
        }
        
        [HttpPost]
        [Microsoft.AspNetCore.Mvc.Route("Baskets")]
        public void AddBasketsByUserId([FromQuery] int userId, [FromQuery] int basketId)
        {
            _userRepository.AddBasket(userId, basketId);
        }
    }
}