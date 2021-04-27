using WebApp.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using WebApp.Models.Components;
using WebApp.Models.Links;

namespace WebApp.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<Basket> Baskets { get; set; }
        public DbSet<Measure> Measures { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<Shop> Shops { get; set; }
        public DbSet<Subsection> Subsections { get; set; }
        public DbSet<BasketAndProduct> BasketsAndProducts { get; set; }
        public DbSet<BasketAndUser> BasketsAndUsers { get; set; }
        public DbSet<SectionAndSubsection> SectionsAndSubsections { get; set; }
        public DbSet<ShopAndProduct> ShopsAndProducts { get; set; }
        
        
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
    }
}
