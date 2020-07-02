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
                    <a href="#/videos" className="loggedin-manage">Your Videos</a>
                    <a href="#/home" className="loggedin-watch">Watch</a>
                </div>
                <div className="right-nav">
                    <div  className="dropdown">
                        <button className="dropbtn">{props.currentUser.username[0]}
                            <ul className="dropdown-content">
                                <div className="user-name">{props.currentUser.username}</div>
                                <a id="user-profile-link" href="#/user">View Profile</a>
            
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
                    <a href="#/home" className="sidebar-home"> 
                        <svg className="svg" viewBox="0 0 20 20"><path d="M17 20h-4c-.6 0-1-.4-1-1v-5H8v5c0 .6-.4 1-1 1H3c-1.1 0-2-.9-2-2V8c0-.3.1-.6.3-.8l8-7c.4-.3.9-.3 1.3 0l8 7c.3.2.4.5.4.8v10c0 1.1-.9 2-2 2zm-3-2h3V8.5l-7-6.1-7 6.1V18h3v-5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v5z"></path></svg>
                        Home
                    </a>
                    <a href="#/videos" className="sidebar-videos">
                        <svg className="svg" viewBox="0 0 20 20"><path d="M14 2v12H2V2h12m0-2H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z" fill="#1a2e3b"></path><path d="M5.6 5.51c0-.55.39-.77.86-.5l4.28 2.5a.54.54 0 010 1l-4.28 2.57c-.47.28-.86.07-.86-.49zM16 20a4 4 0 004-4V5a2 2 0 00-2-2v13a2 2 0 01-2 2H3a2 2 0 002 2z" fill="#192e3b" fillRule="evenodd"></path></svg>
                        Videos
                    </a>
                    {/* <a href="#/video" className="sidebar-videos">Videos</a> */}
                    <a href="#/user" className="user-profile">
                        <div>
                            <svg className="smiley-svg" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" /></svg>
                        </div>
                        <div className="user-profile-text">
                            Profile
                        </div>
                    </a>
                   
                </ul>
                <div className="line"></div>
                <div className="git-link">
                    <a className="git-logo" href="https://github.com/remm9/FoxeoFullstockProject"><img src={window.gitLogoURL} alt="" /></a>
                    <a className="link-logo" href="https://linkedin.com/in/roman-gontcharov-7705856a/"><img src={window.linkSmallURL} alt="" /></a>
                </div>

                <div className="ouline-2"></div>
                {/* <button className="loggedin-logout" onClick={props.logout}>Log Out</button> */}
            </div>

        </div>
    ) : (
                <div className="splash-nav">
            
                        <div className="splash-left">
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
            <div>
                {welcomePage}
            </div>
        </header>
    );
};