import React from "react";
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Modal from './modal'

const App = () => (
    <>
        <Modal />
        <div>
            {/* <h1>Foxeo App</h1> */}
            <GreetingContainer/>
        </div>
        
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={Modal} />
    
    </>
);

export default App;