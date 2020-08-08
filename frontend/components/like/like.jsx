import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liker_id: this.props.currentUserId,
            video_id: this.props.video.id,
        }
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }

    componentDidMount() {
        this.props.fetchLikes()
    }

    componentDidUpdate(prev) {
        if (Object.keys(prev.likes).length !== Object.keys(this.props.likes).length) {
            this.props.fetchLikes();
        }
    }
    
    handleLike(e) {
        e.preventDefault();
        this.props.createLike({liker_id: this.props.currentUserId, video_id: this.props.video.id})
    };

    handleDislike(id) {
        this.props.deleteLike(id)
    };

    render() {
        const likes = this.props.likes;
        const liked = Object.values(likes).filter(like => 
            like.liker_id === this.props.currentUserId && like.video_id === this.props.video.id)  
            
        return ( 
            <div>{liked.length !== 0 ?
                <button
                    className="like-video-button"
                    onClick={() => this.handleDislike(liked[0].id)}>
                    Unlike
                </button> :
                    <button className="like-video-button" onClick={this.handleLike}> Like</button>
            }</div>
        )
    }
}

export default Like;