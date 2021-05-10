import React, { Component } from 'react';
import "./Home.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import user from '../Data/user.svg'
import cart from '../Data/cart.svg'

const Home = (props) => {

  const [isAuthenticated,setIsAuthenticated] = (props.isAuth)

  if (isAuthenticated)
    return (
      <div className="main">
        <a href={ApplicationPaths.Cart}>
          <Card>
            <CardImg top width="100%" src={cart} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Создать корзину</CardTitle>
            </CardBody>
          </Card>
        </a>
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
