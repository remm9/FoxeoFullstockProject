import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props)    
        this.state = {
            body: "",
            video_id: this.props.id,
            clicked_in: false,
        }
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
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
        this.props.createComment({body: this.state.body, video_id: this.state.video_id})
            .then(() => {
                this.setState(
                    {body: ""}
                )
            })
    } 
    
    handleClick() {
        document.getElementById('create-comment-body').onclick = this.setState({ clicked_in: true})
    }       
                
    render() {
        return ( 
            <div id="comment-form">
                <div className="comment-form-author-initial">{this.authorInitial()}</div>
                <form  onSubmit={this.handleSubmit}>
                    <h2 className="comment-form-header">Add a new comment</h2>
                    <label>
                        <textarea 
                            id="create-comment-body"
                            onClick={this.handleClick}
                            type="body" 
                            placeholder="Add a comment"
                            value={this.state.body}
                            onChange={this.update()}/>
                    </label>
                    { this.state.clicked_in ? ( 
                        <div className="comment-submit-button">
                            <button type="submit">Add comment</button> 
                            <p className="submit-button-text">Remember to be cool and play nice</p>                    
                        </div>
                        ): (null) }
                </form>
            </div>
        )
    }
}

export default Comment;
