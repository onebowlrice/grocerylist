using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using WebApp.Data;
using WebApp.Models.Components;
using WebApp.Models.Links;

namespace WebApp.Repositories
{
    public class UserRepository : IUserRepository
    {
        private ApplicationDbContext _context;
        
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public User FindByName(string name) => _context.Users.FirstOrDefault(user => user.UserIdentity.Equals(name));

        public User Insert(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return _context.Users.FirstOrDefault(user => user.Name.Equals(user.Name));
        }

        public List<Basket> GetBasketsByUserId(int id)
        {
            return _context.BasketsAndUsers.Where(l => l.UserId.Equals(id))
                .Select(c => _context.Baskets.FirstOrDefault(b => b.Id.Equals(c.BasketId))).ToList();
        }

        public void AddBasket(int userId, int basketId)
        {
            _context.BasketsAndUsers.Add(new BasketAndUser() {BasketId = basketId, Id = userId});
            _context.SaveChanges();
        }
    }
}