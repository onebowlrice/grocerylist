using System;

namespace WebApp.Models.Components
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImgSource { get; set; }
        public int SectionId { get; set; }
        public int SubsectionId { get; set; }
    }
}