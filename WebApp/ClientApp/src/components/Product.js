import React, { Component } from 'react';
import { LoginMenu } from './api-authorization/LoginMenu';
import "./Product.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import {
    Collapse, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import image from "../Data/318x180.svg"

export class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Название продукта",
            mediumCost: "0",
            isOpen: false,
            shops: ["shop1", "shop2"],
        };
    }

    


    render() {
        const toggle = () => this.setState({
            isOpen: !this.state.isOpen
        })

        return (
            <div className="product">
                <Card>
                    <CardImg top width="10%" src={image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{this.state.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Средняя цена {this.state.mediumCost}</CardSubtitle>
                        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Подробнее</Button>
                        <Collapse isOpen={this.state.isOpen}>
                            <Card>
                                <p>Список магазинов:</p>
                                {this.state.shops.map(x => <p>{x}</p>)}
                            </Card>
                        </Collapse>
                    </CardBody>
                </Card>
            </div>
        )
    }
}