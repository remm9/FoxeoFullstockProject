import React from 'react';

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liker_id: this.props.currentUserId,
            video_id: this.props.video.id,
            isLiked: false
        }
        // this.updateLike = this.updateLike.bind(this)
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }

    // updateLike(e) {
    //     // const { currentUserId } = this.props.currentUserId;
    //     // if (this.props.likes.includes(currentUserId)) {
    //     //     this.props.removeLike(this.props.video.id);
    //     // } else if (currentUserId) {
    //     //     this.props.addLike({ user_id: currentUserId, video_id: this.props.video.id });
    //     // }
    //     const likes = this.props.likes;
    //     for (let i = 0; i < likes.length; i++) {
    //         let likeObject = Object.values(likes[i])
    //         if (likeObject[0].liker_id === this.props.currentUserId && likeObject[0].video_id === this.props.video.id) {
    //             this.props.deleteLike(Object.keys(like)[0]);
    //             this.state.isLiked = false;
    //         } else {
    //             this.props.handleLike();
    //             this.state.isLiked = true;
    //         }
    //     }
    // }

    // render() {

        

    //     const LikeButtonClass = (this.props.isLiked) ? 
    //         <button className="like-video-button" onClick={this.handleLike}> Like</button> : 
    //         <button className="like-video-button" onClick={() => this.handleDislike(Object.keys(like)[0])}> Unlike</button>;

    //     return (
    //         <div 
    //         //className={likeButtonClass}
    //             onClick={this.updateLike} >
    //                 < LikeButtonClass />
    //             {/* <FontAwesomeIcon icon="heart" /> {this.props.likes.length} */}
    //             {/* <span className={isLoggedIn}>  Must be logged in to like video</span> */}
    //         </div>
    //     );
    // }

    // componentDidMount() {
    //     this.props.fetchLikes();
    // }

    handleLike(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('like[liker_id]', this.state.liker_id);
        formData.append('like[video_id]', this.state.video_id);
        this.state.isLiked = true;
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
            .then(this.state.isLiked = false)
            // .then(() => this.props.history.push(`/play/${this.state.video_id}`))
            .then(window.location.reload())
    };


    render() {
        const likes = this.props.likes;
        let like = {};
        for (let i = 0; i < likes.length; i++) {
            let likeObject = Object.values(likes[i])
            if (likeObject[0].liker_id === this.props.currentUserId && likeObject[0].video_id === this.props.video.id) {
                like = likes[i]
            }
        }
    
        return ( 
            <div>
                { this.state.isLiked 
                ? 
                <button className="like-video-button" onClick={this.handleLike}> Like</button>
                :
                <button className="like-video-button" onClick={() => this.handleDislike(Object.keys(like)[0])}> Unlike</button>
                 }
            </div>
        )
    }
}

export default Like;