import * as APIUtil from '../util/video_api_util'

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
}

export const fetchVideo = videoId => dispatch => {
    return APIUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
}