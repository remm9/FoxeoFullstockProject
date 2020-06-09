export const fetchVideos = () => {
    return $.ajax({
        url: 'api/videos'
    })
}

export const fetchVideo = videoId =>  {
    return $.ajax({
        url: `api/videos/${videoId}`
    })
}

export const createVideo = video => {
    return $.ajax({
        method: 'post',
        url: `api.videos/`, // do i need to change api to `api.videos/${video.id}`???
        data: { video }
    })
}

export const updateVideo = video => {
    return $.ajax({
        method: 'patch',
        url: `api.videos/${video.id}`,
        data: { video }
    })
}

export const deleteVideo = videoId => {
    return $.ajax({
        method: 'delete',
        url: `api/video/${videoId}`
    })
}



