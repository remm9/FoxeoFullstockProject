import React from 'react';
import CommentIndex from '../comment/comment_index_container';
import Comment from '../comment/comment_container';
import Like from '../like/like_container'

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
        this.props.fetchComments();
        this.props.fetchVideo(this.props.match.params.id).then(() => {
            const video = document.querySelector('.video-player');
            video.muted = !video.muted;
            video.play();
        });
    }
    
    render() {
        if (!this.props.video) { return null }
        const users = this.props.users;
        const owner = users.filter(user => user.id === this.props.video.owner_id)[0];
        if (!owner) { return null };
        return (
            <div id="video-container">
                <video
                    className="video-player"
                    controls="controls"
                    src={this.props.video.video_url}
                    autoPlay="autoplay"
                    muted >
                </video>
                {/* <div className="like"><Like id="like"/></div> */}
                <div id="play-info">
                    <div className="header-like">
                        <h1 className="play-title">{this.props.video.video_title}</h1>
                        <Like />
                    </div>
                    <h2 className="play-date">{this.dateCreated(this.props.video.created_at)}</h2>
                    <div className="owner-name-initial">
                        <h2 className="owner-initial">{owner.username.split("")[0]}</h2> 
                        <h2 className="owner-name">{owner.username}</h2> 
                    </div>
                    <div className="video-info">
                        <div className="play-count">
                            <img src="https://img.icons8.com/windows/48/000000/play.png" />
                            <h2 >{this.props.history.length / 2}</h2>
                        </div>
                        <div className="likes-count">
                            <img src="https://img.icons8.com/windows/32/000000/like.png" />
                            <h2>0</h2>
                        </div>
                        <div className="comments-count">
                            <img src="https://img.icons8.com/material-outlined/50/000000/topic.png" />
                            <h2>1</h2>
                        </div>
                    </div>
                    <h2 className="play-description">{this.props.video.video_description}</h2>
                    {/* <h2 className="comment-count"></h2> */}
                </div>
                <CommentIndex video={this.props.video}/>
                <Comment video={this.props.video} history={this.props.history}/>
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