import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';



class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.viewDemoClick = this.viewDemoClick.bind(this);
    }

    viewDemoClick(event) {
        // debugger
        event.preventDefault();
        const demoUser = {
            username: 'Demo User',
            password: 'hunter2'
        };
        this.props.processForm(demoUser);
    }

    render() {
        return (
            <div className="splash-container">

                <div className="new-user-header">
                    <h1>Uniting people through video. </h1>
                </div>
                <div>
                    <h3 className="new-user-subheader">Create a video, bring it live, work with other artists and make it available to the world.</h3>
                </div>

                <div>
                    {/* <button id="demo-login" onClick={'/home'}>View Demo</button> */}
                    <button id="demo-login" onClick={this.viewDemoClick}>View Demo</button>
                </div>
                <div className="splash-section-1">
                    <img src="https://i.vimeocdn.com/custom_asset/1204" alt=""/>
                    <div className="secton-content">
                        <h3 className="section-header">Simply Add.</h3>
                        <p className="text-section">
                            Any moment can be saved and relived with a simple and robust streaming.
                        </p>
                        <p className="text-section">
                            Get together with your entire team using single safe, enterprise-level video solution.
                        </p>
                        <button className="btn" onClick={() => this.props.openModal('signup')}>Go live ></button>
                    </div>
                </div>
                <div className="splash-section-2">
                    <div className="secton-content-2">
                        <h3 className="section-header">Become a new classic.</h3>
                        <p className="text-section">
                            Create ground breaking videos with professional tools at your disposal.
                        </p>
                        <p className="text-section">
                            Get help from a specialist to boost your video's look.
                        </p>
                        <button className="btn" onClick={() => this.props.openModal('signup')}>Start uploading ></button>

                    </div>    
                    <div className="img-2">
                        <img src={window.vertovURL} alt="" />
                    </div>
                </div>
                <div className="splash-section-3">
                    
                    <img src="https://i.vimeocdn.com/custom_asset/959.png" alt="" />
            
                    <div className="secton-content-3">
                        <h3 className="section-header">Upload locally, be viewed universally.</h3>
                        <p className="text-section">
                            Employ powerful marketing tools in order to get viewers attention. Get detailed stats on how your video is performing.
                        </p>
                        <button className="btn" onClick={() => this.props.openModal('signup')}>Increase your audience ></button>

                    </div>    
                </div>
                <div className="splash-section-4">
                    <div className="secton-content-4">
                        <h3 className="section-header">It's all about joint effort.</h3>
                        <p className="text-section">
                            Manage your team on your own terms and improve your workflow with time-stamped feedback. 
                        </p>
                        <p className="text-section">
                            Your video has a right to remain private. Stay secure a multitude of privacy options.
                        </p>
                        <button className="btn" onClick={() => this.props.openModal('signup')}>Start working together ></button>

                    </div>
                    <div className="img-4">
                        <img src="https://i.vimeocdn.com/custom_asset/953" alt="" />
                    </div>
                </div>
                <h1 className="footer-statement">Be one with our community of artists and brands</h1>
                <div className="footer">
                    <div className="bottom">
                       <a href="#/" className="footer-header-logo"><img src="https://fontmeme.com/permalink/200609/8c7313b0d8cd1284ac5a4372b4862e73.png" alt="" /></a>
                        <div className="links">
                            <a className="tag" href="https://github.com/remm9/FoxeoFullstockProject"><img src="https://www.seekpng.com/png/full/192-1923313_2-februari-github-logo-png-white.png" alt=""/></a>
                            <a className="tag-2" href="https://linkedin.com/in/roman-gontcharov-7705856a/"><img src={window.linkSplashURL} alt=""/></a>
                        </div>

                    </div>
                   
                    <div className="footer-1"> @2020 Be safe and stay healthy. Made in NYC</div>
            
                </div>
            </div>
        );
    }

}

export default Splash;


