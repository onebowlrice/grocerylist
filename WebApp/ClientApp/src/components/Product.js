import React, {Component, useEffect, useState, PropTypes} from 'react';
import { LoginMenu } from './api-authorization/LoginMenu';
import "./CartDescription.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import {
    Collapse, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import image from "../Data/318x180.svg"

const Product = (props) => {
    const [productState, setProductState] = useState([]);
    const [measureState, setMeasureState] = useState("");

    useEffect(() => {
        fetch(`/Products?productID=${props.id}`).then(res => res.json()).then(res => {
            setProductState(res);
        });
        fetch (`/Measures?measureId=${props.measureId}`).then(res => res.json()).then(res => {
            setMeasureState(res);
        });
    },[]);

    // const handleClick = () => {
    //     props.changeBasketState(s => [...s, {productId: props.id, measureId: props.measureId, count: props.count}])
    // }

        return (
            <div className="product">
                <Card>
                    <CardImg top width="10%" src={productState.imgSource} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{productState.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Стоимость {productState.price}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Количество {props.count} {measureState.name}</CardSubtitle>
                    </CardBody>
                    {props.withButton && <Button >Добавить</Button>}
                </Card>
            </div>
        )
    }
export default Product;