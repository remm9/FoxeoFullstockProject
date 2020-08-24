import React from 'react';
import Link from 'react-router-dom';

class Carousel extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
        this.props.fetchUsers();
    }

    videoList() {
        const videos = Object.values(this.props.videos)
        let subArr1 = [] 
        let subArr2 = []
        // const random = Array.from({ length: 12 }, () => Math.floor(Math.random() * videos.length))
        for(let i=0; i<12; i++) {

        }
        return videos
    }

    render() {
        console.log(this.videoList())
        return (
            <div className="carousel">Carousel</div>
        )
    }

}

export default Carousel;