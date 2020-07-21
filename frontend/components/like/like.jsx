import React from 'react';

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
        console.log(this.props)
        this.props.fetchLikes();
    }

    handleLike(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('like[liker_id]', this.state.liker_id);
        formData.append('like[video_id]', this.state.video_id);
        $.ajax({
            url: '/api/likes',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        // }).then(() => this.props.history.push(`/play/${this.state.video_id}`))
        }).then(window.location.reload())
    };

    handleDislike(id) {
        this.props.deleteLike(id)
            // .then(() => this.props.history.push(`/play/${this.state.video_id}`))
            .then(window.location.reload())
    };

    render() {
        const likes = this.props.likes;
        let like = {};
        let isLiked = false;
        for (let i = 0; i < likes.length; i++) {
            let likeObject = Object.values(likes[i])
            if (likeObject[0].liker_id === this.props.currentUserId && likeObject[0].video_id === this.props.video.id) {
                like = likes[i]
                isLiked = true
            }
        }

        return ( 
            <div>
                { isLiked
                ? 
                <button className="like-video-button" onClick={() => this.handleDislike(Object.keys(like)[0])}> Unlike</button>
                :
                <button className="like-video-button" onClick={this.handleLike}> Like</button>
            }
            </div>
        )
    }
}

export default Like;