import React from "react";
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <>
        <div>
            <h1>Foxeo App</h1>
            <GreetingContainer/>
        </div>
        {/* <Switch>  */}
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        {/* <Switch/> */}
    </>
);

export default App;