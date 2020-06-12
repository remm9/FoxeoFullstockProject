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
        this.props.fetchVideo(this.props.match.params.id).then(() => {
            const video = document.querySelector('.video-player');
            video.muted = !video.muted;
            video.play()
        })
    }

    toggleMute(e) {
        const video = e.target
        video.pause();
        video.volume = 0.25;
    }

    render() {
        
        if (!this.props.video) { return null }
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
                <h1 className="video-title">{this.props.video.video_title}</h1>
                <h1 className="video-title">{this.props.video.video_description}</h1>
                <h1 className="video-title">{this.dateCreated(this.props.video.created_at)}</h1>
            </div>
        );
    }

}

export default Play;