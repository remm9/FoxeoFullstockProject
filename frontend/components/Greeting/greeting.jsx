import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const welcomePage = currentUser ? (
        <div className="logged-in-page">
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
            <span className="splash-page">
                <span className="splash-nav">
                    {/* <div className="modal-background"></div> */}
                    <ul>
                        <a className="splash-header-logo" href="#/">Foxeo</a>
                        <Link className="btn" to="/signup">Sign Up</Link>
                        <Link className="btn" to="/login">Log In</Link>
                        <Link className="btn" to="/signup">+ New Video</Link>
                    </ul>
                </span>
                    
            </span>
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