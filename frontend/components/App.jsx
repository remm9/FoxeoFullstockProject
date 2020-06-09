import React from "react";
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Splash from './splash/splash_container';
import Home from './home/home_container';
import Video from './video/video_container';
import Upload from './upload/upload_container' 
import Index from './upload/upload_container'


const App = () => (
    <>
        {/* <h1>Foxeo App</h1> */}
        
        <Modal />
        <GreetingContainer/>
        <ProtectedRoute path="/home" component={Home} />
        <ProtectedRoute path="/videos" component={Video} />
        {/* <Route path="/videos/:id" component={Video}> */}
        <ProtectedRoute path="/index" component={Index}/>
        <ProtectedRoute path="/upload" component={Upload} />
        <AuthRoute exact path='/' component={Splash} />

        
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    
    </>
);

export default App;