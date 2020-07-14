import React from 'react';
class CommentIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    dateCreated(date) {
        const dateCreated = new Date(date)
        return dateCreated.toLocaleDateString();
    }

    authorInitial(id) {
        const users = Object.values(this.props.state.entities.users);
        const user = users.filter(user => user.id === id);
        return user[0].username.split("")[0]
    }

    authorName(id) {
        const users = Object.values(this.props.state.entities.users);
        const user = users.filter(user => user.id === id);
        return user[0].username
    }

    render() {
        const comments = Object.values(this.props.state.entities.comments);
        const videoComments = comments.filter(comment => comment.video_id === this.props.id)
        const commentList = videoComments.map(comment => {
            return (
                <ul key={comment.id} >
                    <div className="comment-list-item">
                        <h2 className="comment-author-initial">{this.authorInitial(comment.author_id)}</h2>
                        <div className="comment-body">
                            <div className="name-date">
                                <h2 className="comment-author-name">{this.authorName(comment.author_id)}</h2>
                                <h2 className="comment-upload-date"> commented on {this.dateCreated(comment.created_at)}</h2>
                            </div>
                            <h2 className="comment-text">{comment.body}</h2>
                        </div>
                    </div>
                </ul>
            )
        })

        return (
            <div id="comment-list">
                <h1 className="comment-page-title">{videoComments.length} Comments</h1>
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