import React, { Component, useState } from 'react';
import { LoginMenu } from './api-authorization/LoginMenu';
import "./CartDescription.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import {
    Collapse, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import image from "../Data/318x180.svg"

const Product = ({cart,setCart}) => {

    const [name,setName] = useState("Название продукта");
    const [mediumCost,setMediumCost] = useState(0);
    const [isOpen,setIsOpen] = useState(false);
    const [shops,setShops] = useState([]);

    const toggle = () => setIsOpen(!isOpen);
    const removeProduct = (e) => {
        setCart(cart.filter(prod => prod.id !== e.id))
    }
        return (
            <div className="product">
                <Card>
                    <CardImg top width="10%" src={image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Средняя цена {mediumCost}</CardSubtitle>
                        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Подробнее</Button>
                        <Button color="danger" onClick={removeProduct}>x</Button>
                        <Collapse isOpen={isOpen}>
                            <Card>
                                <p>Список магазинов:</p>
                                {shops.map(x => <p>{x}</p>)}
                            </Card>
                        </Collapse>
                    </CardBody>
                </Card>
            </div>
        )
    }
export default Product;