import React from 'react';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../util/user_api_util';
import Play from '../play/play_container'
import { Link } from 'react-router-dom'

class Liked extends React.Component {

    constructor(props) {
        super(props);
        
        // console.log(props)
        this.userName = this.userName.bind(this)
    }

    componentDidMount() {
        this.props.fetchVideos();
        this.props.fetchLikes();
    };

    dateCreated(date) {
        const dateCreated = new Date(date)
        return dateCreated.toLocaleDateString();
    }

    userName(id) {
        return this.props.currentUser.userName
    }

    render() {
        const userLikes = this.props.likes.filter(like => Object.values(like)[0].liker_id == this.props.currentUser.id);
        const userLikedVideos = Object.values(userLikes);
        const videoListArray = [];
        const videoList = [];
        const likedVideoList = [];
        for (let i = 0; i < userLikedVideos.length; i++) {
            videoListArray.push(Object.values(userLikedVideos[i])[0].video_id)
        }
        for (let i = 0; i < videoListArray.length; i++) {
            let video = this.props.videos.filter(video => video.id === videoListArray[i]);
            if (video === undefined) { 
                return null 
            } else {
                videoList.push(video[0])
            };
        }
        for (let i = 0; i < videoList.length; i++) {

        // }
        // const likedVideoList = videoList.map(video => {
            if (videoList[i] === undefined) { return null};
            likedVideoList.push( 
            // return (
                <ul key={videoList[i].id} >
                    <div className="home-list-item">
                        <div className="home-video-header">
                            <h2 className="home-video-header-1">Added to</h2>
                            <h2 className="home-video-header-2">Foxeo Staff Picks</h2>
                        </div>
                        <Link to={`/play/${videoList[i].id}`}>
                            <video
                                className="home-video"
                                src={videoList[i].video_url}
                                poster=""
                                width="320"
                                height="240"
                            >
                            </video>
                        </Link>
                        <h2 className="video-title">{videoList[i].video_title}</h2>
                        <h2 className="video-upload-date">uploaded {this.dateCreated(videoList[i].created_at)}</h2>
                        <h2 className="video-user-name">{this.props.currentUser.username}</h2>
                    </div>
                </ul>
            )
        }

        return (
            <div>
                <h1 className="video-page-title">Your Liked Videos</h1>
                <div className="liked-page-container">
                    <ul id="home-ul">
                        <div id="video-page-list">{likedVideoList}</div> 
                    </ul>
                    <div id="liked-footer">
                        <h2 className="home-footer-1">@2020</h2>
                        <h2 className="home-footer-2">
                            Made with
                            <svg viewBox="0 0 20 20" className="_3Weix"><path d="M10 18a1.23 1.23 0 01-.8-.4 14.25 14.25 0 00-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 011.6-3.9A5.73 5.73 0 016 2a5.25 5.25 0 014 1.9A5.85 5.85 0 0114 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 00-4.4 3.7 1.23 1.23 0 01-.8.4z" fill="rgb(255,0,0)"></path></svg>
                            NYC
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Liked;