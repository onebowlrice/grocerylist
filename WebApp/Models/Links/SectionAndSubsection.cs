using System;

namespace WebApp.Models.Links
{
    public class SectionAndSubsection
    {
        public Guid Id { get; set; }
        public Guid SectionId { get; set; }
        public Guid SubsectionId { get; set; }
    }
}