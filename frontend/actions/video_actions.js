import * as VideoAPIUtil from '../util/video_api_util'

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = "REMOVE_VIDEO";

const receiveAllVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos
});

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
});

export const fetchVideos = () => dispatch => {
    return VideoAPIUtil.fetchVideos()
        .then(videos => dispatch(receiveAllVideos(videos)));
}

export const fetchVideo = videoId => dispatch => {
    return VideoAPIUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)));
}

export const createVideo = video => dispatch => {
    return VideoAPIUtil.createVideo(video)
        .then(video => dispatch(receiveVideo(video)));
}

export const updateVideo = video => dispatch => {
    return VideoAPIUtil.updateVideo(video)
        .then(video => dispatch(receiveVideo(video)));
}

export const deleteVideo = videoId => dispatch => {
    return VideoAPIUtil.deleteVideo(videoId)
        .then(() => dispatch(removeVideo(videoId)));
}

