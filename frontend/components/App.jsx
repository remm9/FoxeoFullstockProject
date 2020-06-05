import React from "react";
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal'
import Splash from './splash/splash_container'
import Home from './home/home_container'

const App = () => (
    <>
        <Modal />

            {/* <h1>Foxeo App</h1> */}
        <GreetingContainer/>
        <Switch>
            <Route path="/home" component={Home} />
            <Route exact path='/' component={Splash} />
        </Switch>
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    
    </>
);

export default App;