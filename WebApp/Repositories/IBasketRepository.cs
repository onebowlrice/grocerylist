﻿using System.Collections.Generic;
using WebApp.Models;
using WebApp.Models.Components;

namespace WebApp.Repositories
{
    public interface IBasketRepository
    {
        Basket Insert(Basket basket);
        Basket GetBasketById(int id);
        List<ProductInBasket> GetProductsByBasketId(int id);
        void AddProduct(int productId, int measureId, int count, int id);
    }
}