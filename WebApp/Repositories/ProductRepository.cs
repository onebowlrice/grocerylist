using System.Collections.Generic;
using System.Linq;
using WebApp.Data;
using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _context;
        
        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
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
            return _context.Products.FirstOrDefault(m => m.Name.Equals(product.Name));
        }

        public List<Product> GetProducts()
        {
            return _context.Products.ToList();
        }
    }
}