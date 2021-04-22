using System;

namespace WebApp.Models.Components
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ImgSource { get; set; }
        public Guid SectionId { get; set; }
        public Guid SubsectionId { get; set; }
    }
}