import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';



export default (props) => {
    const welcomePage = props.currentUser ? ( //create nav and side bar for currnt user 
        <div className="loggedin-page">
            <div className="loggedin-nav">
                <a className="loggedin-header-logo"><img src="assets/foxeo_logo.png" alt="" /></a>
                <button className="loggedin-manage">Manage Videos</button>
                <button className="loggedin-watch">Watch</button>
                <button className="loggedin-user">{props.currentUser.username[0]}
                    <ul className="user-info">
                        <div className="user-name">{props.currentUser.username}</div>
                        <li>User Videos</li>
                        <li>User Comments</li>
                        <li>User Likes</li>
                        <li><Link to="" className="loggedin-logout" onClick={props.logout}>Log Out</Link></li> 
                    </ul>
                </button> 
                <button className="loggedin-upload">+ New Video</button>

            </div>
            <div className="loggedin-sidebar">

                <button className="loggedin-upload">+ New Video</button>

                <Link to="" className="sidebar-home">Home</Link>
                <Link to="" className="sidebar-videos">Videos</Link>
                <Link to="" className="sidebar-upload">Upload</Link>

                <a className="git-logo" href="https://github.com/remm9/FoxeoFullstockProject"><img src="assets/GitHub-Mark-32px.png" alt="" /></a>
                <a className="link-logo" href="https://linkedin.com/in/roman-gontcharov-7705856a/"><img src="assets/Linkedin-01.png" alt="" /></a>
                <button className="loggedin-logout" onClick={props.logout}>Log Out</button>
            </div>
        </div>
    ) : (
                <div className="splash-nav">
                    {/* <div className="modal-background"></div> */}
                    <ul>
                        {/* <a className="splash-header-logo" href="#/"><img src="/foxeo_logo.png" alt=""/></a> */}
                        <a className="splash-header-logo" href="#/"><img src="assets/foxeo_logo.png" alt=""/></a>
                        <Link className="signup-btn" to="" onClick={() => props.openModal('signup')}>Join</Link>
                        <Link className="login-btn" to=""onClick={() => props.openModal('login')}>Log In</Link>
                        <Link className="new-video-btn" to="" onClick={() => props.openModal('signup')}>+ New Video</Link>
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