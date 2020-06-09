import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';



export default (props) => {
    const welcomePage = props.currentUser ? ( //create nav and side bar for currnt user 
        <div className="loggedin-page">

            <div className="gradient"></div>

            <div className="loggedin-nav">
                <div className="left-nav">
                    <a href="#/home" className="loggedin-header-logo"><img src={window.logoURL} alt="" /></a>
                    <button className="loggedin-manage">Manage Videos</button>
                    <button className="loggedin-watch">Watch</button>
                </div>
                <div className="right-nav">
                    <div  className="dropdown">
                        <button className="dropbtn">{props.currentUser.username[0]}
                            <ul className="dropdown-content">
                                <div className="user-name">{props.currentUser.username}</div>
                                <div className="a-items">
                                    <a href="#/videos" className="sidebar-videos">Videos</a>
                                    <a>Comments</a>
                                    <a>Likes</a>
                                </div>
                                <Link to="" className="loggedin-logout" onClick={props.logout}>Log Out</Link>
                            </ul>
                        </button> 
                    </div>
                    <a className="nav-new-video" href="#/upload">+ New Video</a>
                </div>
            </div>

            <div className="loggedin-sidebar">
                <a className="sidebar-new-video" href="#/upload">+ New Video</a>
                <div className="line"></div>
                <ul className="sidebar-list">
                    <a href="#/home" className="sidebar-home"> Home</a>
                    <a href="#/videos" className="sidebar-videos">Videos</a>
                    {/* <a href="#/video" className="sidebar-videos">Videos</a> */}
                    <a>Profile</a>
                   
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
            
                        <div className="splash-left-nav">
                            <a className="splash-header-logo" href="#/"><img src={window.logoURL} alt=""/></a>
                            <Link className="signup-btn" to="" onClick={() => props.openModal('signup')}>Join</Link>
                            <Link className="login-btn" to=""onClick={() => props.openModal('login')}>Log In</Link>
                        </div>

                        <div className="splash-right-nav">
                            <Link className="new-video-btn" to="" onClick={() => props.openModal('signup')}>+ New Video</Link>   
                        </div>
                             
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