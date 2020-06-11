import React from 'react';
import { fetchVideo } from '../../actions/video_actions';
import { Link } from 'react-router-dom';


class Play extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props)
    }

    componentDidMount() {
        // debugger
        // console.log(this.props)
        // this.props.fetchVideo(3);
        this.props.fetchVideo(this.props.match.params.id)
    }

    toggleMute(e) {
        // debugger
        const video = e.target
        setTimeout(() => {
        video.muted = !video.muted;
        video.play();
        }, 500) 
    }

    render() {
        console.log(this.props.video)
        // debugger
        if (!this.props.video) { return null }
        return (
            <div id="video-container">
                <video
                    className="video-player"
                    controls="controls"
                    src={this.props.video.video_url}
                    autoPlay="autoplay"
                    muted //={this.toggleMute()}
                    // onPlay={this.toggleMute.bind(this)}
                >
                </video>
                <h1 className="video-title">{this.props.video.video_title}</h1>
                <h1 className="video-title">{this.props.video.video_description}</h1>
                <h1 className="video-title">{this.props.video.created_at}</h1>
            </div>
        );
    }

}

export default Play;