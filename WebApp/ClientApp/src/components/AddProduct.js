import React, {Component, useEffect, useState} from 'react';
import {LoginMenu} from './api-authorization/LoginMenu';
import "./AddProduct.css";
import {ApplicationPaths} from './api-authorization/ApiAuthorizationConstants';
import {
    Collapse, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, FormGroup, Label, Input, Form
} from 'reactstrap';

const AddProduct = () => {
    const [sectionsState, setSectionsState] = useState([]);
    const [valueSection, setValueSection] = useState({});
    const [subsectionsState, setSubsectionsState] = useState([]);
    const submit = {
        productName: "",
        imgSource: "",
        price: 0,
        sectionId: 0,
        subSectionId: 0
    };

    useEffect(() => {
        fetch(`/Sections/All`).then(res => res.json()).then(res => {
            setSectionsState(res);
        })
        let arr = [];
        sectionsState.map(x => fetch(`/Sections/Subsections?sectionId=${x.id}`).then(res => res.json())
            .then(res => {
                arr.push(res);
            })
            .then(g => setSubsectionsState(arr)))
    }, []);

    let sections = (
        <Input type="select" name="section" id="section" placeholder="Секция" value={valueSection}
               onChange={e => {
                   setValueSection(e.target.value);
                   submit.sectionId = e.target.value;
               }}>
            {sectionsState.map(x => <option value={x.id}>{x.name}</option>)}
        </Input>);

    let subsections = (
        <Input type="select" name="sub" id="sub" placeholder="Субсекция"
               onChange={e => {
                   submit.subSectionId = e.target.value;
               }}>
            {subsectionsState.map(x => <option value={x.id}>{x.name}</option>)}
        </Input>);


    const response = () => fetch('/Products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(submit)
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        response();
    }

    return (
        <div>
            <h3>Добавление продукта</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup >
                    <Label for="name">Название</Label>
                    <Input type="text" name="name" id="name" placeholder="Название продукта"
                           onChange={e => submit.productName = e.target.value}/>
                    <Label for="img">Ссылка на картинку</Label>
                    <Input type="text" name="img" id="img" placeholder="Ссылка на картинку"
                           onChange={e => submit.imgSource = e.target.value}/>
                    <Label for="price">Цена за шт.</Label>
                    <Input type="text" name="price" id="price" placeholder="Цена за шт."
                           onChange={e => submit.price = e.target.value}/>
                    <Label for="section">Секция</Label>
                    {sections}
                    <Label for="sub">Субсекция</Label>
                    {subsections}
                </FormGroup>
                <Button class="btn btn-primary" type="submit">Добавить</Button>
            </Form>
        </div>
    )
}
export default AddProduct;