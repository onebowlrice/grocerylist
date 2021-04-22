using System;

namespace WebApp.Models.Links
{
    public class ShopAndProduct
    {
        public Guid Id { get; set; }
        public Guid ShopId { get; set; }
        public Guid ProductId { get; set; }
    }
}