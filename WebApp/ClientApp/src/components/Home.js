import React, {Component, useEffect, useState} from 'react';
import "./Home.css";
import {ApplicationPaths} from './api-authorization/ApiAuthorizationConstants';
import {Card, CardImg, CardBody, CardTitle, ListGroup, ListGroupItem, Button} from 'reactstrap';
import user from '../Data/user.svg';
import cart from '../Data/cart.svg';
import ListElement from './ListElement';
import {useHistory} from 'react-router';

const Home = () => {
    const history = useHistory();
    const [userBaskets, setUserBaskets] = useState([]);

    useEffect(() => {
        fetch(`/Baskets/CurrentUser`).then(res => res.json()).then(res => {
            setUserBaskets(res);
        })

    }, []);

    return (
        <div className="main">
            <h3>Список корзин</h3>
            <ListGroup flush>
                {userBaskets.map(x =>
                    <ListGroupItem tag='a' href='/cartdesc' action>
                        <h5>{x.name}</h5> Общая цена 1 рублей
                    </ListGroupItem>
                )}
            </ListGroup>
            <Button className='element' onClick={() => history.push('/cartdesc')}>Создать новую корзину</Button>
        </div>
    )
}
export default Home;
