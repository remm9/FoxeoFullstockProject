import React from 'react';
class CommentIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    dateCreated(date) {
        const dateCreated = new Date(date)
        return dateCreated.toLocaleDateString();
    }

    render() {
        const comments = Object.values(this.props.state.entities.comments)
        const commentList = comments.map(comment => {
            console.log(comment.body)
            console.log(this.dateCreated(comment.created_at))
            return (
                <ul key={comment.id} >
                    <div className="comment-list-item">
                        <h2 className="comment-title">{comment.body}</h2>
                        <h2 className="comment-upload-date">uploaded {this.dateCreated(comment.created_at)}</h2>
                    </div>
                </ul>
            )
        })

        return (
            <div>
                <h1 className="comment-page-title">Comments</h1>
                <div className="comment-page-container">
                    <ul id="comment-ul">
                        <div id="comment-page-list">{commentList}</div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CommentIndex;