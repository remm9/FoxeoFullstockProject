import React from 'react';

class Like extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
            <button className="like-video-button"> Like</button>
        )
    }
}

export default Like;