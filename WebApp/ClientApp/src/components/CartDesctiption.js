import React, { Component } from 'react';
import { LoginMenu } from './api-authorization/LoginMenu';
import "./CartDescription.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import cart from '../Data/cart.svg'

export class CartDescription extends Component {

    constructor(props) {
        super(props);

        this.state = {
            CartName: "Название корзины",

        };
    }

    render() {
        return (
            <div className="info">
                <Card>
                    <CardTitle tag="h5">{this.state.CartName}</CardTitle>
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
}