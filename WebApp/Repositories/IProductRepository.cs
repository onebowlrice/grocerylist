using System.Collections.Generic;
using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public interface IProductRepository
    {
        Product GetProductById(int id);
        Product InsertProduct(Product product);
        List<Product> GetProducts();
    }
}