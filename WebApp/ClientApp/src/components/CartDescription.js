import React, {Component, useEffect, useState} from 'react';
import { LoginMenu } from './api-authorization/LoginMenu';
import "./CartDescription.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import cart from '../Data/cart.svg'
import Product from './Product';
import { useHistory } from 'react-router';

const CartDescription = () =>{
    const history = useHistory();
    const [cartName,setCartName] = useState("Название корзины");
    const [basketState, setBasketState] = useState([]);



        return (
            <div className='cartMain'>
            <div className="info">
                <Card>
                    <CardTitle tag="h5">{cartName}</CardTitle>
                    <CardImg top width="100%" src={cart} alt="Card image cap" />
                    <CardBody>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Общая средняя стоимость </CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Максимальное кол-во товаров в одном магаине</CardSubtitle>
                        <Button type="button" class="btn btn-primary">Сохранить</Button>
                        <Button type="button" class="btn btn-primary">Расчитать</Button>
                        <Button type="button" class="btn btn-primary">Поделиться</Button>
                    </CardBody>
                </Card>
            </div>
            <div className='cardsField'>
                <Product />
                // {basketState.map(x => <Product id={x.productId} measure={x.measureId} count={x.count}/>)}
                <div className='product' onClick={() => history.push('/addproduct')}>
                    <span>Плюс</span><br/>
                    <span>Добавить товар</span>
                </div>
            </div>
            </div>
        );
    }
export default CartDescription;