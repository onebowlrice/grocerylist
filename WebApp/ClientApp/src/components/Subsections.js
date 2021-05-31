import React, {Component, useEffect, useState} from 'react';
import { LoginMenu } from './api-authorization/LoginMenu';
import "./AddProduct.css";
import { ApplicationPaths } from './api-authorization/ApiAuthorizationConstants';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col
} from 'reactstrap';
import Product from "./Product";

const Subsections = (props) =>{

    const [activeTab, setActiveTab] = useState('0');
    const [subsectionState, setSubsectionState] = useState([]);

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        fetch(`/Sections/Subsections?sectionId=${props.id}`).then(res => res.json()).then(res => {
            setSubsectionState(res);
        })
    },[]);

    return(
        <div>
            <Nav tabs>
                {subsectionState.map( x =>
                    <NavItem>
                        <NavLink
                            className={activeTab === x.id ? 'active' : ''}
                            onClick={() => { toggle(x.id); }}
                        >
                            {x.name}
                        </NavLink>
                    </NavItem>
                )}
            </Nav>
            <TabContent activeTab={activeTab}>
                {subsectionState.map(x =>
                    <TabPane tabId={x.id}>
                        <Row>
                            {props.products
                                .filter(p => p.sectionId === props.id && p.subsectionId === x.id)
                                .map(g =>
                                <Product id={g.id} withButton={true}/>
                            )}
                        </Row>
                    </TabPane>
                )}
            </TabContent>
        </div>
    );
}

export default Subsections