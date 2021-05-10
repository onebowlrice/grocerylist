using System.Collections.Generic;
using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public interface IUserRepository
    {
        User FindByName(string name);
        User Insert(User user);
        List<Basket> GetBasketsByUserId(int id);
        void AddBasket(int userId, int basketId);
    }
}