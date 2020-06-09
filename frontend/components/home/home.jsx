import React from 'react';
import { fetchVideos } from '../../actions/video_actions' 

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-container">
            <h1 className="home-container">Welcome Home</h1>
            {/* <p>{Video.all.ids}</p> */}
             <p>{console.log(this.props)}</p>
             
            </div>
        );
    }

}

export default Home;