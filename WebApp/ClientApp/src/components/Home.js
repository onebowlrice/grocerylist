import React, { Component } from 'react';
import "./Home.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import user from '../Data/user.svg'
import cart from '../Data/cart.svg'

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: props.isAuthenticated
    };
  }

  render() {
    const { isAuthenticated } = this.state;
    if (isAuthenticated)
      return this.authenticatedView();
    else return this.notAuthenticatedView();
  }

  authenticatedView() {
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
  }

  notAuthenticatedView() {
    return (
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
}
