import React from 'react';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../util/user_api_util';
import { fetchUsers } from '../../util/user_api_util';
import Play from '../play/play_container'
import {Link} from 'react-router-dom'

class Home extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
        this.props.fetchUsers();
    };

    dateCreated(date) {
        const dateCreated = new Date(date)
        return dateCreated.toLocaleDateString();
    }

    randomVideoGrid() {
        // debugger
        const result = []
        const videoIds = Object.keys(this.props.videos);
        videoIds.forEach(video => {
            result.push(videoIds[Math.floor(Math.random() * videoIds.length)]);
        })
        // console.log(result)
        return result.slice(6);
    }

    randomHomeList() {
        const videos = this.props.videos;
        const keyArray = Object.keys(videos);
        const randomVideoList = [];
        const homeVideoList = [];
        
        for(let i = 0; i < videos.length; i++) {
            const random = keyArray[Math.floor(Math.random() * keyArray.length)];
            if (!homeVideoList.includes(random)) homeVideoList.push(random)
        }
        homeVideoList.forEach(key => {
            if (!randomVideoList.includes(videos[key])) randomVideoList.push(videos[key]);
        })
        return randomVideoList;
    }

    
    render() {
        const videos = this.randomHomeList();
        const users = this.props.users;
        const videoList = videos.map(video => {
            // const ownerVideo = users.filter(user => user.id === el.owner_id)
    
        // const videos = this.props.videos;
        // const videoList = videos.map(video => {
        //     const owner = users.filter(user => user.id === video.owner_id)
            if (video) {
                const owner = users.filter(user => user.id === video.owner_id)
                if (owner) { 
                    // console.log(owner.find(user => user.username).username)
                    const videoOwner = owner.find(user => user.username)
                    return (
                        <ul key={video.id} >
                            <div className="home-list-item">
                                <div className="home-video-header">
                                    <h2 className="home-video-header-1">Added to</h2>
                                    <h2 className="home-video-header-2">Foxeo Staff Picks</h2>
                                </div>
                                <Link to={`/play/${video.id}`}>
                                    <video 
                                        className="home-video"
                                        src={video.video_url}
                                        poster=""
                                        width="320" 
                                        height="240"
                                        >    
                                    </video>
                                </Link>
                                <h2 className="video-title">{video.video_title}</h2>
                                <h2 className="video-upload-date">uploaded {this.dateCreated(video.created_at)}</h2>
                                <h2 className="video-owner-name">{videoOwner.username}</h2>
                            </div> 
                        </ul>
                    )
                } else {
                    return false;
                }
            }
        })

        return (
            <div>
                <h1 className="home-title">Home</h1>
                <div className="home-container">
                    <ul id="home-ul"> 
                        <div id="video-list">{videoList}</div>                            
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
            </div>
        )
    }
}
    
export default Home;