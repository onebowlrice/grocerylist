using System;

namespace WebApp.Models.Links
{
    public class BasketAndProduct
    {
        public int Id { get; set; }
        public int BasketId { get; set; }
        public int ProductId { get; set; }
        public int MeasureId { get; set; }
        public int Count { get; set; }
    }
}