using System;

namespace WebApp.Models.Links
{
    public class BasketAndProduct
    {
        public Guid Id { get; set; }
        public Guid BasketId { get; set; }
        public Guid ProductId { get; set; }
    }
}