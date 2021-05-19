import React, { Component, useState } from 'react';
import "./Home.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import user from '../Data/user.svg';
import cart from '../Data/cart.svg';
import ListElement from './ListElement';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();
  const [list,setList] = useState([]);

  if (true)
    return (
      <div className="main">
        <div className='listContainer'>
          <span className='listName'>Список корзин</span>
          {list.map(e => (<ListElement name={e.eName} mediumCost={e.mediumCost} />))}
          <div className='element' onClick={() => history.push({pathname: '/cartdesc', state: {list: list}, push:{setList: setList}})}>Создать новую корзину</div>
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
