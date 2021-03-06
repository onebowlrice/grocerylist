import React, {Component, useEffect, useState} from 'react';
import {LoginMenu} from './api-authorization/LoginMenu';
import "./AddProduct.css";
import {ApplicationPaths} from './api-authorization/ApiAuthorizationConstants';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col
} from 'reactstrap';
import Subsections from "./Subsections";
import {useHistory} from "react-router";

const ChooseProduct = () => {
    const history = useHistory();
    const [activeTab, setActiveTab] = useState('0');
    const [sectionsState, setSectionsState] = useState([]);
    const [productsState, setProductsState] = useState([]);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        fetch(`/Sections/All`).then(res => res.json()).then(res => {
            setSectionsState(res);
        })
        fetch(`/Products/All`).then(res => res.json()).then(res => {
            setProductsState(res);
        })

    }, []);

    return (
        <div>
            <Nav tabs>
                {sectionsState.map(x =>
                    <NavItem>
                        <NavLink
                            className={activeTab === x.id ? 'active' : ''}
                            onClick={() => {
                                toggle(x.id);
                            }}
                        >
                            {x.name}
                        </NavLink>
                    </NavItem>
                )}
            </Nav>
            <TabContent activeTab={activeTab}>
                {sectionsState.map(x =>
                    <Subsections id={x.id} products={productsState}/>
                )}
            </TabContent>
            <h5>Не нашли нужный товар?</h5>
            <Button className='product' onClick={() => history.push('/addProduct')}>Добавьте свой!</Button>
        </div>
    );
}

export default ChooseProduct;