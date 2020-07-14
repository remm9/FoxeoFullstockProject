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
import Edit from './edit/edit_container';
import Upload from './upload/upload_container';
import Play from './play/play_container';
import User from './user/user_container';
import Search from './search/search_container';
import Comment from './comment/comment_container'


const App = () => (
    <>
        {/* <h1>Foxeo App</h1> */}
        
        <Modal />
        <GreetingContainer/>
        <ProtectedRoute path="/home" component={Home} />
        <Route path="/videos" component={Video} />
        <Route path="/play/:id" component={Play} />
        <ProtectedRoute path="/user" component={User}/> 
        <ProtectedRoute path="/upload" component={Upload} />
        <ProtectedRoute path="/edit/:id" component={Edit} />
        <ProtectedRoute path="/search" component={Search} />
        <Route path="/comment" component={Comment}/>
        <AuthRoute exact path='/' component={Splash} />

        
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    
    </>
);

export default App;