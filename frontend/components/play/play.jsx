import React from 'react';
import { fetchVideo } from '../../actions/video_actions';
import { Link } from 'react-router-dom';


class Play extends React.Component {

    constructor(props) {
        super(props);
    }
    
    dateCreated(date) {
        const dateCreated = new Date(date)
        return dateCreated.toLocaleDateString();
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchVideo(this.props.match.params.id).then(() => {
            const video = document.querySelector('.video-player');
            video.muted = !video.muted;
            video.play()
        });
    }
    
    render() {
        if (!this.props.video) { return null }
        const users = this.props.users;
        const owner = users.filter(user => user.id === this.props.video.owner_id)[0]
        return (
            <div id="video-container">
                <video
                    className="video-player"
                    controls="controls"
                    src={this.props.video.video_url}
                    autoPlay="autoplay"
                    muted 
                >
                </video>
                <div id="play-info">
                    <h1 className="play-title">{this.props.video.video_title}</h1>
                    <h2 className="play-date">{this.dateCreated(this.props.video.created_at)}</h2>
                    <h2 className="owner-name">{owner.username}</h2> 
                    <h2 className="play-description">{this.props.video.video_description}</h2>
                </div>
                <div className="home-footer">
                    <h2 className="home-footer-1">@2020</h2>
                    <h2 className="home-footer-2">
                        Made with
                            <svg viewBox="0 0 20 20" className="_3Weix"><path d="M10 18a1.23 1.23 0 01-.8-.4 14.25 14.25 0 00-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 011.6-3.9A5.73 5.73 0 016 2a5.25 5.25 0 014 1.9A5.85 5.85 0 0114 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 00-4.4 3.7 1.23 1.23 0 01-.8.4z" fill="rgb(255,0,0)"></path></svg>
                            NYC
                        </h2>
                </div>
            </div>
        );
    }

}

export default Play;