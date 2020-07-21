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
        // console.log(this.props)
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
                    // <button id="like" onClick={() => this.handleDislike(Object.keys(like)[0])}>
                    //     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" /></svg>
                    // </button>
                :
                <button className="like-video-button" onClick={this.handleLike}> Like</button>
                    // <button id="like" onClick={() => this.handleDislike(Object.keys(like)[0])}>
                    //     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" /></svg>
                    // </button>
                }
            
            </div>
        )
    }
}

export default Like;