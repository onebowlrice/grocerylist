import React, {Component} from "react";
import {Route} from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import {FetchData} from "./components/FetchData";
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";
import ApiAuthorizationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import {ApplicationPaths} from "./components/api-authorization/ApiAuthorizationConstants";

import "./custom.css";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import CartDescription from "./components/CartDescription";
import LogIn from './components/Login';
import {Container} from "reactstrap";
import SignUp from "./components/SignIn";
import ChooseProduct from "./components/ChooseProduct";

const App = () => {

    return (
        <Container>
            <Route path='/login' component={LogIn}/>
            <Route path='/signup' component={SignUp}/>
            <Layout>
                <AuthorizeRoute exact path='/' component={Home}/>
                <AuthorizeRoute path='/cartdesc' component={CartDescription}/>
                <AuthorizeRoute path='/addproduct' component={AddProduct}/>
                <AuthorizeRoute path='/chooseProduct' component={ChooseProduct}/>
            </Layout>
            <AuthorizeRoute path="/fetch-data" component={FetchData}/>
            <Route
                path={ApplicationPaths.ApiAuthorizationPrefix}
                component={ApiAuthorizationRoutes}
            />
        </Container>
    );
}
export default App;
