import React from 'react';

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.updateLike = this.updateLike.bind(this);
    }

    updateLike(e) {
        const { currentUserId } = this.props;
        if (this.props.likes.includes(currentUserId)) {
            this.props.removeLike(this.props.video.id);
        } else if (currentUserId) {
            this.props.addLike({ user_id: currentUserId, video_id: this.props.video.id });
        }
    }

    render() {
        return ( 
            <div>
                <button className="like-video-button"> Like</button>
            </div>
        )
    }
}

export default Like;