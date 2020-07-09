import React from 'react';

class Edit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            video_id: this.props.match.params.id,
            video_title: "",
            video_description: "",
            edit_errors: ["Title cannot be empty", "Description cannot be empty"],
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id);
    }

    handleSubmit() {
        const { video_id, ...rest } = this.state
        this.props.updateVideo({ id: video_id, ...rest })
            .then(() => {
                this.setState(
                        { video_title: "", video_description: "", edit_errors: [] }
                )  
            }) 
    }


    handleTitleError() {
        if (this.state.video_title.length === 0) {
            return this.state.edit_errors[0]
        }
    }

    handleDescriptionError() {
        if (this.state.video_description.length === 0) {
            return this.state.edit_errors[1]
        }
    }
    
    render() {
    
        return (
            <div className="edit-container">
                <form className="edit-form" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <h1 className="edit-head-title">Edit video</h1>
                    <label>
                        <input 
                            className="edit-title-text"
                            type="text"
                            value={this.state.video_title}
                            placeholder="Your video's title"
                            onChange={this.update("video_title")}
                            />
                        <div className="error-message">{this.handleTitleError()}</div>
                    </label>               
                    
                    <label>
                        <input 
                            className="edit-description-text"
                            type="textarea"
                            value={this.state.video_description}
                            placeholder="Your video's description"
                            onChange={this.update("video_description")}
                        />  
                        <div className="error-message">{this.handleDescriptionError()}</div>
                    </label>
                    
                    <button className="edit-button">Edit</button>
                </form>
                <div id="edit-footer">
                    <h2 className="home-footer-1">@2020</h2>
                    <h2 className="home-footer-2">
                        Made with
                            <svg viewBox="0 0 20 20" className="_3Weix"><path d="M10 18a1.23 1.23 0 01-.8-.4 14.25 14.25 0 00-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 011.6-3.9A5.73 5.73 0 016 2a5.25 5.25 0 014 1.9A5.85 5.85 0 0114 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 00-4.4 3.7 1.23 1.23 0 01-.8.4z" fill="rgb(255,0,0)"></path></svg>
                            NYC
                        </h2>
                </div>
            </div>
        );
    }
}

export default Edit;