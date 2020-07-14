import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        
        super(props)
        this.state = {
            body: "",
            video_id: this.props.video.id,
            comment_errors: null,
        }
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update() {
        return e => this.setState({ body: e.target.value })
    }

    componentDidMount() {
        // this.props.fetchVideo(this.props.match.params.id)
        // this.props.fetchComments();
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('comment[body]', this.state.body);
        formData.append('comment[video_id]', this.state.video_id);
        $.ajax({
            url: '/api/comments',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(
            (response) => {
                this.setState(
                    { comment_errors: response.responseJSON },
                )
            }
        ).then(() => {
            this.setState(
                { body: "", video_id: "", comment_errors: null }
            )
        });
    }


    render() {
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <textarea 
                            type="body" 
                            placeholder="Add a comment"
                            value={this.state.body}
                            onChange={this.update()}
                            className="comment-body"/>
                    </label>
                    <button type="submit">Add comment</button>                    
                </form>
            </div>
        )
    }
}

export default Comment;
