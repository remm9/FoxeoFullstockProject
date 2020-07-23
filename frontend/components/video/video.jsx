import React from 'react';
import { Link } from 'react-router-dom';

class Video extends React.Component {

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
        const userVideos = this.props.videos.filter(video => video.owner_id == this.props.currentUser.id);
        const userLikes = this.props.likes.filter(like => Object.values(like)[0].liker_id == this.props.currentUser.id);
        const videoList = userVideos.map(video => {
            return (
                <ul key={video.id} >
                    <div className="liked-list-item">
                        <Link to={`/play/${video.id}`}> 
                            <video
                                className="liked-video"
                                src={video.video_url}
                                poster=""
                                width="320"
                                height="240"
                            >
                            </video>
                        </Link>
                        <h2 className="liked-video-title">{video.video_title}</h2>
                        <h2 className="liked-upload-date">uploaded {this.dateCreated(video.created_at)}</h2>
                    </div>
                </ul>
            )
        })

        const likesNumber = function () {
            if (userLikes.length === 1) {
                return "1 Like"
            } else {
                return `${userLikes.length} Likes`
            }
        }

        const videosNumber = function () {
            if (videoList.length === 1) {
                return "1 Video"
            } else {
                return `${videoList.length} Videos`
            }
        }

        return (
            <div>
                <div className="video-page-title">
                    <Link className="liked-username" to={`/user/${this.props.currentUser.id}`}>
                        <h1 >{this.props.currentUser.username}</h1>
                    </Link>
                    <h1 className="liked-subtitle"> / Videos</h1>
                </div>
                <div className="video-page-container">
                    <div className="liked-content">
                        <ul id="liked-ul">
                            <div id="liked-page-list">{videoList}</div>
                        </ul>
                        <div className="video-right-side">
                            <div className="browse-liked">
                                Browse Videos
                            </div>
                            <div className="browse-content">
                                <p className="browse-text" >Video are an easy way to keep track of your uploads.
                                Use the list of your videos as an easy guide to what is up there.
                                </p>
                                {/* <div><i class="fa fa-heart" aria-hidden="true"></i></div> */}
                                {/* <svg className="liked-heart" xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" /></svg> */}
                                <Link className="liked-username" to={`/user/${this.props.currentUser.id}`}>
                                    <h2 className="liked-author-initial">{this.props.currentUser.username[0]}</h2>
                                </Link>
                            </div>
                            <div className="staff-liked">
                                Your stuff
                            </div>
                            <div className="staff-content">
                                <Link className="your-videos" to={`/videos`}>
                                    {videosNumber()}
                                </Link>
                                <div className="arrow-after"></div>
                                <div className="solid-line" />
                                <Link className="video-likes" to={`/liked`}>
                                    {likesNumber()}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="video-footer">
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

export default Video;