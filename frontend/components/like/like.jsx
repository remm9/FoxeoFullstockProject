import React from 'react';

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liker_id: this.props.currentUserId,
            video_id: this.props.video.id,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchLikes();
    }

    handleSubmit(e) {
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
        }).then(
            (response) => {
                this.setState(
                    { comment_errors: response.responseJSON },
                )
            })//.then(window.location.reload())
    };//.then(() => this.props.history.location.push(`/play/${this.state.video_id}`))};


    render() {
        console.log(this.props)
        return ( 
            <div>
                <button className="like-video-button" onClick={this.handleSubmit}> Like</button>
            </div>
        )
    }
}

export default Like;