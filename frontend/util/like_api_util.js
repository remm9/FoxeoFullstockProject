export const fetchLikes = () => {
    return $.ajax({
        url: 'api/likes'
    })
}

export const fetchLike = likeId => {
    return $.ajax({
        url: `api/like/${likeId}`
    })
}

export const createLike = like => {
    return $.ajax({
        method: 'post',
        url: `api/likes/`,
        data: { like }
    })
}

export const deleteLike = likeId => {
    return $.ajax({
        method: 'delete',
        url: `api/likes/${likeId}`
    })
}