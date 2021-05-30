import React, {Component, useEffect, useState} from 'react';
import {LoginMenu} from './api-authorization/LoginMenu';
import "./CartDescription.css";
import {ApplicationPaths} from './api-authorization/ApiAuthorizationConstants';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, ButtonGroup} from 'reactstrap'
import cart from '../Data/cart.svg'
import Product from './Product';
import {useHistory} from 'react-router';

const CartDescription = () => {
    const history = useHistory();
    const [cartName, setCartName] = useState("Название корзины");
    const [basketState, setBasketState] = useState([]);

    useEffect(() => {
        fetch(`/Baskets/Products?basketId=1`).then(res => res.json()).then(res => {
            setBasketState(res);
        })

    }, []);

    return (
        <div className='cartMain'>
            <div className="info">
                <Card>
                    <CardTitle tag="h5">{cartName}</CardTitle>
                    <CardImg top width="100%" src={cart} alt="Card image cap"/>
                    <CardBody>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Общая стоимость </CardSubtitle>
                        <ButtonGroup>
                            <Button type="button" class="btn btn-primary">Сохранить</Button>
                            <Button type="button" class="btn btn-primary">Расчитать</Button>
                            <Button type="button" class="btn btn-primary">Поделиться</Button>
                        </ButtonGroup>
                    </CardBody>
                </Card>
            </div>
            <div className='cardsField'>
                {basketState.map(x => <Product id={x.productId} measureId={x.measureId} count={x.count}/>)}
                <div className='product' onClick={() => history.push('/chooseProduct')}>
                    <span>Плюс</span><br/>
                    <span>Добавить товар</span>
                </div>
            </div>
        </div>
    );
}
export default CartDescription;