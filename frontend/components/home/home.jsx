import React from 'react';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../util/user_api_util';

class Home extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
    };

    dateCreated(date) {
        const dateCreated = new Date(date)
        return dateCreated.toLocaleDateString();
    }

    userName(owner_id) {
        // debugger
        // console.log(this.props.fetchUser(owner_id))
        return this.props.fetchUser(owner_id).username;
    }

    render() {
        const videos = this.props.videos;
        const videoList = videos.map(video => {
            return (
                <ul key={video.id} >
                    <div className="home-list-item">
                        <video 
                            className="home-video"
                            src={video.video_url}
                            poster=""
                            width="320" 
                            height="240"
                            >    
                        </video>
                        <h2 className="video-title">{video.video_title}</h2>
                        <h2 className="video-upload-date">uploaded {this.dateCreated(video.created_at)}</h2>
                        {/* <h2>{this.userName(video.owner_id)}</h2> */}
                    </div> 
                </ul>
            )
        })

        return (
            <div className="home-container">
                <h1 className="home-title">Home</h1>
                <ul className="home-ul">
                    {videoList}
                </ul>
                <div className="home-footer">
                    <h2 className="home-footer-1">@2020</h2>
                    <h2 className="home-footer-2">
                        Made with 
                        <svg viewBox="0 0 20 20" className="_3Weix"><path d="M10 18a1.23 1.23 0 01-.8-.4 14.25 14.25 0 00-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 011.6-3.9A5.73 5.73 0 016 2a5.25 5.25 0 014 1.9A5.85 5.85 0 0114 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 00-4.4 3.7 1.23 1.23 0 01-.8.4z" fill="rgb(255,0,0)"></path></svg>
                        NYC
                    </h2>
                </div>
            </div>
        )
    }
}
    
export default Home;