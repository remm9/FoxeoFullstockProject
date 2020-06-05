import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';


class Splash extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash-container">
                <div>
                    <h1 className="new-user-header">Uniting people through video. </h1>
                </div>
                <div>
                    <h3 className="new-user-subheader">Create a video, bring it live, work with other artists and make it available to the world.</h3>
                </div>
                <div className="splash-section-1">
                    <img src="https://i.vimeocdn.com/custom_asset/1204" alt=""/>
                    <div className="secton-content">
                        <h3 className="section-header">Simply Add.</h3>
                        <p className="text-section">
                            Any moment can be saved and relives with a simple and robust streeming
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
                            Create ground breaking videos with professional tops at your disposal
                        </p>
                        <p className="text-section">
                            Get help from a specialist to boost your video's look
                        </p>
                        <button className="btn" onClick={() => this.props.openModal('signup')}>Start uploading ></button>

                    </div>    
                    <div className="img-2">
                        <img src={window.vertovURL} alt="" />
                    </div>
                </div>
                <div className="splash-section-3">
                    <div>
                        <img src="https://i.vimeocdn.com/custom_asset/959.png" alt="" />
                    </div>
                    <div className="secton-content-3">
                        <h3 className="section-header">Upload localy, be viewed universaly.</h3>
                        <p className="text-section">
                            Employ powerful marketing tools in order to viewers attention. Get detailed stats on how your video is performing.
                        </p>
                        <button className="btn" onClick={() => this.props.openModal('signup')}>Increase your audience ></button>

                    </div>    
                </div>
                <div className="splash-section-4">
                    <div className="secton-content-4">
                        <h3 className="section-header">It's all about joint effort.</h3>
                        <p className="text-section">
                            Manage your teem on your own turms and improove your workflow with time-stamped feedback. 
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
                <h1 className="footer-statement">Be one with our commutity of artists and brands</h1>
                <div className="footer">
                    <a className="tag" href="https://github.com/remm9/FoxeoFullstockProject"><img src={window.gitURL} alt=""/></a>
                    <a className="tag-2" href="https://linkedin.com/in/roman-gontcharov-7705856a/"><img src={window.linkURL} alt=""/></a>
                    <div className="footer-1"> @2020 Be safe and stay healthy. Made in NYC</div>
            
                </div>
            </div>
        );
    }

}

export default Splash;


