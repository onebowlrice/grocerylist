import React, { Component } from 'react';
import { LoginMenu } from './api-authorization/LoginMenu';
import "./Home.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: LoginMenu.isAuthenticated
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
      <a href={ApplicationPaths.Cart}>
        <div className="mainDiv">
          <svg className="userPic" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <p>Создать корзину</p>
        </div>
      </a>
    );
  }

  notAuthenticatedView() {
    return (
      <a href={ApplicationPaths.Register}>
        <div className="mainDiv">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="black" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <p>Зарегистрироваться или войти</p>
        </div>
      </a>
    )
  }


}
