import * as LikeAPIUtil from '../util/like_api_util'

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveAllLikes = likes => ({
    type: RECEIVE_ALL_LIKES,
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = likeId => {
    return {
        type: REMOVE_LIKE,
        likeId

    }
};

export const fetchLikes = () => dispatch => {
    return LikeAPIUtil.fetchLikes()
        .then(likes => dispatch(receiveAllLikes(likes)))   
}

export const fetchLike = likeId => dispatch => {
    return LikeAPIUtil.fetchLike(likeId)
        .then(like => dispatch(receiveLike(like)));
}

export const createLike = like => dispatch => {
    return LikeAPIUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)));
}

export const deleteLike = likeId => dispatch => {
    return LikeAPIUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)));
}
