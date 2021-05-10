import React, { Component } from "react";
import { Route } from "react-router";
import Layout  from "./components/Layout";
import  Home  from "./components/Home";
import { FetchData } from "./components/FetchData";
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";
import ApiAuthorizationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import { ApplicationPaths } from "./components/api-authorization/ApiAuthorizationConstants";

import "./custom.css";
import  Product  from "./components/Product";
import  AddProduct  from "./components/AddProduct";
import  CartDescription  from "./components/CartDesctiption";

const App = () =>{

    return (
      <Layout>
        <Route exact path="/">
          <Home isAuth={true}/>
        </Route>
        <AuthorizeRoute path="/fetch-data" component={FetchData} />
        <Route
          path={ApplicationPaths.ApiAuthorizationPrefix}
          component={ApiAuthorizationRoutes}
        />
        <Route path="/test" component={CartDescription}/>
      </Layout>
    );
  }
export default App;
