import React from "react";
import ReactDOM from "react-dom";
import { siggnup, loggin, loggout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    //testing
    window.siggnup = siggnup;
    window.loggin = loggin;
    window.loggout = loggout;
    //testing

    ReactDOM.render(<h1>Welcome to Foxeo</h1>, root);
});