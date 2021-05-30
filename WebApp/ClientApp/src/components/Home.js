import React, {Component} from 'react';
import "./Home.css";
import {ApplicationPaths} from './api-authorization/ApiAuthorizationConstants';
import {Card, CardImg, CardBody, CardTitle, ListGroup, ListGroupItem, Button} from 'reactstrap';
import user from '../Data/user.svg';
import cart from '../Data/cart.svg';
import ListElement from './ListElement';
import {useHistory} from 'react-router';
import authService from './api-authorization/AuthorizeService';

const Home = () => {
    const history = useHistory();
    const {isAuthenticated} = authService;

    return (
        <div className="main">
            <h3>Список корзин</h3>
            <ListGroup flush>
                <ListGroupItem tag='a' href='/cartdesc' action>
                    Пример корзины 1 Цена 1
                </ListGroupItem>
                <ListGroupItem tag='a' href='/cartdesc' action>
                    Пример корзины 2 Цена 2
                </ListGroupItem>
            </ListGroup>
            <Button className='element' onClick={() => history.push('/cartdesc')}>Создать новую корзину</Button>
        </div>
    )
}
export default Home;
