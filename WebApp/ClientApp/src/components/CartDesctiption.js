import React, { Component, useState } from 'react';
import { LoginMenu } from './api-authorization/LoginMenu';
import "./CartDescription.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import cart from '../Data/cart.svg'

const CartDescription = () =>{

const [cartName,setCartName] = useState("Название корзины"); 

        return (
            <div className="info">
                <Card>
                    <CardTitle tag="h5">{CartName}</CardTitle>
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
        );
    }
export default CartDescription;