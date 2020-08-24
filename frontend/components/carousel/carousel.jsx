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

    dateCreated(date) {
        const dateCreated = new Date(date)
        return dateCreated.toLocaleDateString();
    }

    // videoList() {
    //     const videos = Object.values(this.props.videos)
    //     let subArr1 = [] 
    //     let subArr2 = []
    //     // const random = Array.from({ length: 12 }, () => Math.floor(Math.random() * videos.length))
    //     for(let i = 0; i < 12; i++) {
    //         if (subArr1.length < 6) {
    //             subArr1.push(videos[i]);
    //         } else if (subArr1.length === 6) {
    //             subArr2.push(videos[i]);
    //         }
    //     }
    //     return ( [subArr1, subArr2] )
    // }

    render() {
        // const listItem1 = this.videoList()[0];
        // const listItem2 = this.videoList()[1];
        // return (
        //     <div className="carousel">Carousel</div>
        // )
        const videoList = this.props.videos.map(video => {
            if (video) {
                const owner = this.props.users.filter(user => user.id === video.owner_id)
                if (owner) {
                    const videoOwner = owner.find(user => user.username)
                    debugger
                    return (
                        <ul key={video.id} >
                            <div className="home-list-item">
                                <div className="home-video-header">
                                    <h2 className="home-video-header-1">Added to</h2>
                                    <h2 className="home-video-header-2">Foxeo Staff Picks</h2>
                                </div>
                                <Link to={`/play/${video.id}`}>
                                    <video
                                        className="home-video"
                                        src={video.video_url}
                                        poster=""
                                        width="320"
                                        height="240"
                                    >
                                    </video>
                                </Link>
                                <h2 className="video-title">{video.video_title}</h2>
                                <h2 className="video-upload-date">uploaded {this.dateCreated(video.created_at)}</h2>
                                <h2 className="video-owner-name">{videoOwner ? videoOwner.username : ""}</h2>
                            </div>
                        </ul>
                    )
                }
            }
        })

        console.log(videoList)
        return (
            <div>
                <div className="home-nav">
                    <h1 className="home-title">Home</h1>
                    {/* <div id="scroll-container">
                        <button id="slideLeft" type="button" onClick={this.slideLeft}>
                            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTQuMTkgMTYuMDA1bDcuODY5IDcuODY4LTIuMTI5IDIuMTI5LTkuOTk2LTkuOTk3TDE5LjkzNyA2LjAwMmwyLjEyNyAyLjEyOXoiLz48L3N2Zz4=' />
                        </button>
                        <button id="slideRight" type="button" onClick={this.slideRight}>
                            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTguNjI5IDE1Ljk5N2wtNy4wODMtNy4wODFMMTMuNDYyIDdsOC45OTcgOC45OTdMMTMuNDU3IDI1bC0xLjkxNi0xLjkxNnoiLz48L3N2Zz4=' />
                        </button>
                    </div> */}
                </div>
                <div className="carousel-container">
                    <ul id="carousel-ul">
                        {/* <div id="carousel-item">{videoList}</div> */}
                    </ul>
                    {/* <div id="gradient"></div>
                    <div className="home-footer">
                        <h2 className="home-footer-1">@2020</h2>
                        <h2 className="home-footer-2">
                            Made with 
                            <svg viewBox="0 0 20 20" className="_3Weix"><path d="M10 18a1.23 1.23 0 01-.8-.4 14.25 14.25 0 00-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 011.6-3.9A5.73 5.73 0 016 2a5.25 5.25 0 014 1.9A5.85 5.85 0 0114 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 00-4.4 3.7 1.23 1.23 0 01-.8.4z" fill="rgb(255,0,0)"></path></svg>
                            NYC
                        </h2>
                    </div> */}
                </div>
            </div>
        )
    }

}

export default Carousel;