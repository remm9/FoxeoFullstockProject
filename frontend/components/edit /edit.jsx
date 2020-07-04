import React from 'react';

class Edit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            video_title: "",
            video_description: "",
        }
    }
    render() {
        return (
            <form action="">
                <label>
                    <input 
                        type="text"
                        value={this.state.video_title}
                
                    />
                </label>
                <label>
                    <input 
                        type="textarea"
                        value={this.state.video_description}
                    />  
                </label>
                <button>Edit</button>
            </form>
        );
    }
}

export default Edit;