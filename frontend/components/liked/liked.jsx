import React from 'react';
import { Link } from 'react-router-dom'

class Liked extends React.Component {

    constructor(props) {
        super(props);
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
        const userVideos = this.props.videos.filter(video => video.owner_id == this.props.currentUser.id)
        const userLikes = this.props.likes.filter(like => Object.values(like)[0].liker_id == this.props.currentUser.id);
        const userLikedVideos = Object.values(userLikes);
        const videoListArray = [];
        const videoList = [];
        const likedVideoList = [];

        for (let i = 0; i < userLikedVideos.length; i++) {
            videoListArray.push(Object.values(userLikedVideos[i])[0].video_id)
        }

        const likesNumber = function () {
            if (likedVideoList.length === 1) {
                return "1 Like"
            } else {
                return `${likedVideoList.length} Likes:`
            }
        }

        const videosNumber = function () {
            if (userVideos.length === 1) {
                return "1 Video"
            } else {
                return `${userVideos.length} Videos:`
            }
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

            if (videoList[i] === undefined) { return null};
            likedVideoList.push( 
                <ul key={videoList[i].id} >
                    <div className="liked-list-item">
                    
                        <Link to={`/play/${videoList[i].id}`}>
                            <video
                                className="liked-video"
                                src={videoList[i].video_url}
                                poster=""
                                width="320"
                                height="240"
                            >
                            </video>
                        </Link>
                        <h2 className="liked-video-title">{videoList[i].video_title}</h2>
                        <h2 className="liked-upload-date">uploaded {this.dateCreated(videoList[i].created_at)}</h2>
                    </div>
                </ul>
            )
        }

        return (
            <div id="liked-container">
                <div className="liked-page-title">
                    <Link className="liked-username" to={`/user/${this.props.currentUser.id}`}>
                        <h1 >{this.props.currentUser.username}</h1> 
                    </Link>
                    <h1 className="liked-subtitle"> / Likes</h1>
                </div>
                <div className="liked-page-container">
                    <div className="liked-content">
                        <ul id="liked-ul">
                            <div id="liked-page-list">{likedVideoList}</div> 
                        </ul>
                        <div className="liked-right-side">
                            <div className="browse-liked">
                                Browse Likes
                            </div>
                            <div className="browse-content">
                                <p className="browse-text" >Likes are an easy way to keep track of the videos you enjoy. 
                                    Use likes to bookmark videos you want to watch again and 
                                    again and again and again.
                                </p>
                                {/* <div><i class="fa fa-heart" aria-hidden="true"></i></div> */}
                                {/* <svg className="liked-heart" xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" /></svg> */}
                                <Link className="liked-username" to={`/user/${this.props.currentUser.id}`}>
                                    <h2 className="liked-author-initial">{this.props.currentUser.username[0]}</h2>
                                </Link>
                            </div>
                            <div className="staff-liked">
                                Your staff
                            </div>
                            <div className="staff-content">
                                <Link className="liked-videos" to={`/videos`}>
                                    {videosNumber()}
                                </Link>
                                <div className="arrow-after"></div>
                                <div className="solid-line"/>
                                <Link className="liked-likes" to={`/liked`}>
                                    {likesNumber()}
                                </Link>
                            </div>
                        </div>
                    </div>
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