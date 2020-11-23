import React from "react";
import {Route} from "react-router-dom";
import App from "./components/App";
import SignupPage from "./components/signup/SignupPage";
import login from "./components/login/LoginPage";
import Shop from "./components/shop/Shop";
import RouteAuth from "./utils/routeAuth"
export default (
    <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/login" component={login}/>
        {/* 利用高阶组件来完成权限方面的验证 RouteAuth(Shop)*/}
        <Route exact path="/shop" component={RouteAuth(Shop)}/> 
    </div>
)