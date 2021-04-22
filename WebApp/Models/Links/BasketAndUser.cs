using System;

namespace WebApp.Models.Links
{
    public class BasketAndUser
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid BasketId { get; set; }
    }
}