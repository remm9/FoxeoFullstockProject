export const fetchComments = () => {
    return $.ajax({
        url: 'api/comments'
    })
}

export const fetchComment = commentId => {
    return $.ajax({
        url: `api/comment/${commentId}`
    })
}

export const createComment = comment => {
    return $.ajax({
        method: 'post',
        url: `api/comment/`,
        data: { comment }
    })
}

export const updateComment = comment => {
    return $.ajax({
        method: 'patch',
        url: `api/comments/${comment.id}`,
        data: { comment }
    })
}

export const deleteComment = commentId => {
    return $.ajax({
        method: 'delete',
        url: `api/comments/${commentId}`
    })
}