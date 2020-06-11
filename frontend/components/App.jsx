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
import Play from './play/play_container'


const App = () => (
    <>
        {/* <h1>Foxeo App</h1> */}
        
        <Modal />
        <GreetingContainer/>
        <Route path="/home" component={Home} />
        <Route path="/videos" component={Video} />
        <Route path="/play/:id" component={Play} />
        {/* <Route path="/demo" component={Demo}/> */}
        {/* <ProtectedRoute path="/index" component={Index}/> */}
        <ProtectedRoute path="/upload" component={Upload} />
        <AuthRoute exact path='/' component={Splash} />

        
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    
    </>
);

export default App;