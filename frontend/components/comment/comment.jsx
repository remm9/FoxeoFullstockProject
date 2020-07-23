import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props)    
        this.state = {
            body: "",
            video_id: this.props.id,
            comment_errors: null,
        }
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    update() {
        return e => this.setState({ body: e.target.value })
    }

    authorInitial() {   
        const users = Object.values(this.props.state.entities.users);
        const user = users.filter(user => user.id === this.props.state.session.id);
        return user[0].username.split("")[0]
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
        }).then(() => {
            this.setState(
                { body: "", video_id: "", comment_errors: null }
            )}
        ).then(window.location.reload())};
        // ).then(() => this.props.history.push(`/play/${this.props.id}`))};
                    
                
                
    render() {
        return ( 
            <div id="comment-form">
                <div className="comment-form-author-initial">{this.authorInitial()}</div>
                <form  onSubmit={this.handleSubmit}>
                    <h2 className="comment-form-header">Add a new comment</h2>
                    <label>
                        <textarea 
                            type="body" 
                            placeholder="Add a comment"
                            value={this.state.body}
                            onChange={this.update()}
                            className="create-comment-body"/>
                    </label>
                    <div className="comment-submit-button">
                        <button type="submit">Add comment</button> 
                        <p className="submit-button-text">Remember to be cool and play nice</p>                    
                    </div>
                </form>
            </div>
        )
    }
}

export default Comment;
