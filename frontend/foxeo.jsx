import React from "react";
import ReactDOM from "react-dom";
// import { siggnup, loggin, loggout } from './util/session_api_util';
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // const store = configureStore();
    //testing
    // window.siggnup = siggnup;
    // window.loggin = loggin;
    // window.loggout = loggout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //testing

    ReactDOM.render(<Root store={store} />, root);
});