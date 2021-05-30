import React, { Component, useState } from 'react';
import { LoginMenu } from './api-authorization/LoginMenu';
import "./AddProduct.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import {
    Collapse, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, FormGroup, Label, Input
} from 'reactstrap';

const AddProduct = () => {
    const [name,setName] = useState("Название");
    const [shops,setShops] = useState([]);

        return (
            <div>
                <p>Добавление продукта</p>
                <FormGroup>
                    <Label for="name">Название</Label>
                    <Input type="text" name="name" id="name" placeholder="Название продукта" />
                    <Label for="img">Ссылка на картинку</Label>
                    <Input type="text" name="img" id="img" placeholder="Ссылка на картинку" />
                    <Label for="section">Секция</Label>
                    <Input type="text" name="section" id="section" placeholder="id секции" />
                    <Label for="sub">Субсекция</Label>
                    <Input type="sub" name="sub" id="sub" placeholder="id субсекции" />
                </FormGroup>
                <Button type="button" class="btn btn-primary">Добавить</Button>
            </div>
        )
    }
export default AddProduct;