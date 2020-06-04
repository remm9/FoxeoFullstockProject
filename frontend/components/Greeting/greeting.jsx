import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';



export default (props) => {
    const welcomePage = props.currentUser ? ( //create nav and side bar for currnt user 
        <div className="logged-in-page">
            <p>Hello, {props.currentUser.username}</p> 
            <button onClick={props.logout}>Log Out</button>
        </div>
    ) : (
                <div className="splash-nav">
                    {/* <div className="modal-background"></div> */}
                    <ul>
                        {/* <a className="splash-header-logo" href="#/"><img src="/foxeo_logo.png" alt=""/></a> */}
                        <a className="splash-header-logo" href="#/"><img src="assets/foxeo_logo.png" alt=""/></a>
                        <Link className="signup-btn" onClick={() => props.openModal('signup')}>Join</Link>
                        <Link className="login-btn" onClick={() => props.openModal('login')}>Log In</Link>
                        <Link className="new-video-btn" onClick={() => props.openModal('signup')}>+ New Video</Link>
                        {/* <Link className="signup-btn" to="/signup">Join</Link> */}
                        {/* <Link className="login-btn" to="/login">Log In</Link>
                        <Link className="new-video-btn" to="/signup">+  New Video</Link> */}
                    </ul>
                </div>
        );

    return (
        <header className="greeting">
            {/* <h1 className="logo">Bench BNB</h1> */}
            <div>
                {welcomePage}
            </div>
        </header>
    );
};