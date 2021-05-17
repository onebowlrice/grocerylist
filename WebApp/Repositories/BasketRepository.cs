using System.Collections.Generic;
using System.Linq;
using WebApp.Data;
using WebApp.Models;
using WebApp.Models.Components;
using WebApp.Models.Links;

namespace WebApp.Repositories
{
    public class BasketRepository : IBasketRepository
    {
        private readonly ApplicationDbContext _context;
        
        public BasketRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        
        public Basket Insert(Basket basket, string userId)
        {
            if (_context.Baskets.FirstOrDefault(b => b.Name.Equals(basket.Name)) is not null)
                return null;
            _context.Baskets.Add(basket);
            _context.SaveChanges();
            basket = _context.Baskets.FirstOrDefault(b => b.Name.Equals(basket.Name));
            _context.BasketsAndUsers.Add(new BasketAndUser() {BasketId = basket.Id, UserId = userId});
            return basket;
        }

        public Basket GetBasketById(int id)
        {
            return _context.Baskets.FirstOrDefault(b => b.Id.Equals(id));
        }

        public List<ProductInBasket> GetProductsByBasketId(int id)
        {
            return _context.BasketsAndProducts.Where(l => l.BasketId.Equals(id))
                .Select(l => new ProductInBasket() {ProductId = l.ProductId, MeasureId = l.MeasureId, Count = l.Count})
                .ToList();
        }

        public void AddProduct(int productId, int measureId, int count, int id)
        {
            var basket = _context.BasketsAndProducts.Where(l => l.BasketId.Equals(id)).ToList();
            if (basket.Any(l => l.ProductId.Equals(productId)))
                return;
            _context.BasketsAndProducts.Add(new BasketAndProduct()
                {BasketId = id, MeasureId = measureId, Count = count, ProductId = productId});
            _context.SaveChanges();
        }

        public List<Basket> GetBasketsOfUser(string idUser)
        {
            var basketIds = _context.BasketsAndUsers
                .Where(bau => bau.UserId.Equals(idUser))
                .Select(b => b.BasketId)
                .ToList();
            return _context.Baskets
                .Where(b => basketIds.Contains(b.Id))
                .ToList();
        }
    }
}