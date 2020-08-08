import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Like extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            liker_id: this.props.currentUserId,
            video_id: this.props.video.id,
            liked: false
        }
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.updateLikes = this.updateLikes.bind(this)
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

    updateLikes(newLikes) {
        this.setState({
            likes: newLikes,
        })
    }

    handleDislike(id) {
        this.props.deleteLike(id)
        // .then(this.props.updateLikes(this.props.likes))
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







// { isLiked
// ? 
//     // <button className="like-video-button" onClick={() => this.handleDislike(Object.keys(like)[0])}> <i class="fa fa-heart" aria-hidden="true"></i></button>
// <button className="like-video-button" onClick={() => this.handleDislike(Object.keys(like)[0])}> Unlike</button>
// //     <button id="like" onClick={() => this.handleDislike(Object.keys(like)[0])}>
// //         <i class="fa fa-heart" aria-hidden="true"></i>
// //         {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" /></svg> */}
// //     </button>
// :
//     // <button className="like-video-button" onClick={this.handleLike}> <i class="fa fa-heart" aria-hidden="true"></i></button>
// <button className="like-video-button" onClick={this.handleLike}> Like</button>
//     // <button id="like" onClick={() => this.handleDislike(Object.keys(like)[0])}>
//     //     <i class="fa fa-heart" aria-hidden="true"></i>
//     //     {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" /></svg> */}
//     // </button>
// }