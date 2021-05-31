using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using WebApp.Data;
using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _context;
        
        public ProductRepository(IServiceScopeFactory scopeFactory)
        {
            _context = scopeFactory.CreateScope().ServiceProvider.GetRequiredService<ApplicationDbContext>();
        }
        
        public Product GetProductById(int id)
        {
            return _context.Products.FirstOrDefault(p => p.Id.Equals(id));
        }

        public Product InsertProduct(Product product)
        {
            if (_context.Products.FirstOrDefault(m => m.Name.Equals(product.Name)) is not null)
                return null;
            _context.Products.Add(product);
            _context.SaveChanges();
            return _context.Products.FirstOrDefault(m => m.Name.Equals(product.Name));
        }

        public List<Product> GetProducts()
        {
            return _context.Products.ToList();
        }
    }
}