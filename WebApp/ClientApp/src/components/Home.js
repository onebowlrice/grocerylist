import React, { Component } from 'react';
import "./Home.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import user from '../Data/user.svg';
import cart from '../Data/cart.svg';
import ListElement from './ListElement';
import { useHistory } from 'react-router';
import authService from "./api-authorization/AuthorizeService";


const Home = () => {
  const history = useHistory();

  if (authService.isAuthenticated())
    return (
      <div className="main">
        <div className='listContainer'>
          <span className='listName'>Список корзин</span>
          <ListElement name={'Название корзины'} mediumCost={'Средняя цена'}/>
          <ListElement name={'Пример корзины 1'} mediumCost={'Цена 1'}/>
          <ListElement name={'Пример корзины 2'} mediumCost={'Цена 2'}/>
          <div className='element' onClick={() => history.push('/cartdesc')}>Создать новую корзину</div>
        </div>
        {/* <a href={ApplicationPaths.Cart}>
          <Card>
            <CardImg top width="100%" src={cart} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Создать корзину</CardTitle>
            </CardBody>
          </Card>
        </a> */}
      </div>
    );
    else return (
      <div className="main">
        <a href={ApplicationPaths.Register}>
          <Card>
            <CardImg top width="100%" src={user} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Зарегистрироваться или войти</CardTitle>
            </CardBody>
          </Card>
        </a>
      </div>
    )
  }
export default Home;
