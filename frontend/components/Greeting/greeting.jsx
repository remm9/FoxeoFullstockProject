import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';



export default (props) => {
    const welcomePage = props.currentUser ? ( //create nav and side bar for currnt user 
        <div className="loggedin-page">
            <div className="rainbow"></div>
            <div className="loggedin-nav">
                <a href="#/home" className="loggedin-header-logo"><img src={window.logoURL} alt="" /></a>
                <button className="loggedin-manage">Manage Videos</button>
                <button className="loggedin-watch">Watch</button>
                <div  className="dropdown">
                    <button className="dropbtn">{props.currentUser.username[0]}
                        <ul className="dropdown-content">
                            <div className="user-name">{props.currentUser.username}</div>
                            <div className="a-items">
                                <a>Videos</a>
                                <a>Comments</a>
                                <a>Likes</a>
                            </div>
                            <Link to="" className="loggedin-logout" onClick={props.logout}>Log Out</Link>
                        </ul>
                    </button> 
                </div>

                <button className="loggedin-upload">+ New Video</button>
            </div>

            <div className="loggedin-sidebar">

                <button className="sidebar-new-video">+ New Video</button>
                <div className="line"></div>
                <ul className="sidebar-list">
                    <a href="#/home" className="sidebar-home"> Home</a>
                    <a href="#/video" className="sidebar-videos">Videos</a>
                    <a to="" className="sidebar-upload">Upload</a>
                </ul>
                <div className="line"></div>
                <div className="git-link">
                    <a className="git-logo" href="https://github.com/remm9/FoxeoFullstockProject"><img src={window.gitLogoURL} alt="" /></a>
                    <a className="link-logo" href="https://linkedin.com/in/roman-gontcharov-7705856a/"><img src={window.linkSmallURL} alt="" /></a>
                </div>

                <div className="line-2"></div>
                {/* <button className="loggedin-logout" onClick={props.logout}>Log Out</button> */}
            </div>

        </div>
    ) : (
                <div className="splash-nav">
                    {/* <div className="modal-background"></div> */}
                    <ul>
                
                        <a className="splash-header-logo" href="#/"><img src={window.logoURL} alt=""/></a>
                        <Link className="signup-btn" to="" onClick={() => props.openModal('signup')}>Join</Link>
                        <Link className="login-btn" to=""onClick={() => props.openModal('login')}>Log In</Link>
                        <Link className="new-video-btn" to="" onClick={() => props.openModal('signup')}>+ New Video</Link>
                        
                        {/* <Link className="signup-btn" to="/signup">Join</Link> */}
                        {/* <a className="splash-header-logo" href="#/"><img src="/foxeo_logo.png" alt=""/></a> */}
                        {/* <a className="splash-header-logo" href="#/"><img src="assets/foxeo_logo.png" alt=""/></a> */}
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