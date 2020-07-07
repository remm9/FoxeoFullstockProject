import React from 'react';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../util/user_api_util';
import { Link } from 'react-router-dom'

class User extends React.Component {

    constructor(props) {
        super(props);
        this.userName = this.userName.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
        // this.props.deleteVideo(videoId);
    };

    dateCreated(date) {
        const dateCreated = new Date(date)
        return dateCreated.toLocaleDateString();
    }

    userName(id) {
        return this.props.currentUser.username;
    }

    handleDelete(videoId) {
        this.props.deleteVideo(videoId)
            .then(window.location.reload())
    }

    render() {
        const userVideos = this.props.videos.filter(video => video.owner_id == this.props.currentUser.id)
        const videoList = userVideos.map(video => {
            return (
                <ul key={video.id} className="user-ul">
                    <div className="user-list-item">
                        <h2 className="user-title">{video.video_title}</h2>
                        <h2 className="user-description">{video.video_description}</h2>
                        <h2 className="user-upload-date">uploaded {this.dateCreated(video.created_at)}</h2>
                    </div>
                    <div className="buttons">
                        <Link className="edit-video" to={`/edit/${video.id}`}>Edit</Link>
                        <button type="button" className="delete-video" onClick={() => this.handleDelete(video.id)}>Delete Video</button>
                    </div>
                </ul>
            )
        })

        return (
            <div className="user-container">
                <div>
                    <h1 id="user-initial">{this.props.currentUser.username[0]}</h1>
                </div>
                <h2 className="user-full-name">{this.props.currentUser.username}</h2>
                <h2 className="user-email">{this.props.currentUser.email}</h2>
                <div className="user-stats">
                    <h2 className="first">Videos: {userVideos.length}</h2>
                    <h2 className="second">Comments:</h2>
                    <h2 className="last">Likes:</h2>
                </div>
                <h1 className="video-list-header">Your Videos</h1>
                <ul className="user-ul-list">
                    {videoList}
                </ul>
                <div id="user-footer">
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

export default User;