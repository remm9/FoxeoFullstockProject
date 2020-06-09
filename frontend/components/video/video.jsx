import React from 'react';
import { fetchVideo } from '../../actions/video_actions';
import { Link } from 'react-router-dom';


class Video extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideo(3);
    }



    render() {
        console.log(this.state)
        if (!this.props.video) { return null }
        return (
            <div className="video-container">
                <h1 className="video-container">Videos</h1>
                <video 
                    className="video-player"
                    controls="controls"
                    src={this.props.video.video_url} 
                    autoPlay="autoplay"
                    muted
                >
                </video>
            </div>
        );
    }

}

export default Video;