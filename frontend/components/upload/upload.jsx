import React from 'react';
import { deleteVideo } from '../../util/video_api_util';

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video_title: "",
            video_description: "",
            owner_id: null,
            video_file: null, 
            video_url: null,
            upload_errors: null,
        };
        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    handleFile(e) {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        if (file.name.toLowerCase().split(".")[1] !== "mov") {
            alert("You must select a MOV file for upload");
            reader.onloadend = () => 
                this.setState({ video_url: "", video_file: null });
        } else {
            reader.onloadend = () =>
                this.setState({ video_file: file, video_url: reader.result });
            if (file) {
                reader.readAsDataURL(file);
            }      
        }
    }

    
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[video_title]', this.state.video_title);
        formData.append('video[video_description]', this.state.video_description);
        if (this.state.video_file) {
            formData.append('video[video_url]', this.state.video_file)
        } else {
            return new Error("You must select a MOV file for upload")
        }
        $.ajax({
            url: '/api/videos',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(
            (response) => console.log(response.message),
            (response) => {
                console.log(response.responseJSON)
                this.setState(
                    {upload_errors: response.responseJSON},
                )
            }
        ).then(() => {
            this.setState(
                { video_title: "", video_description: "", video_url: "", upload_errors: null }
            )
                document.querySelector('.upload-file').value="";
        });
    }

    mapErrors() {
        if (this.state.upload_errors) {
            return this.state.upload_errors.map((error, i) => {
                return <p key={i}>{error}</p>
            })
        }
    }


    render()  {
        return (
            <div className="upload-component">
                <form className="upload-form" onSubmit={this.handleSubmit}>
                    <svg className="upload-svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 53"><g id="Symbols"><g id="Main-Thing"><g id="Group"><g id="Group-3"><g id="dragdrop_emptystate" data-name="dragdrop emptystate"><g id="Group-2" data-name="Group"><path id="Shape" d="M77.82,39H76.61V36.62H79v1.2A1.21,1.21,0,0,1,77.82,39Z" fill="#b2bec7"></path><path id="Shape-2" data-name="Shape" d="M74.18,39H71.76V36.62h2.42Zm-4.85,0H66.91V36.62h2.42Z" fill="#b2bec7"></path><path id="Shape-3" data-name="Shape" d="M16.48,11.56H14.06V9.27h2.42Zm0-4.57H14.06V4.7h2.42Z" fill="#b2bec7"></path><path id="Shape-4" data-name="Shape" d="M16.48,2.41H14.06V1.2A1.14,1.14,0,0,1,15.27,0h1.21Z" fill="#b2bec7"></path><path id="Shape-5" data-name="Shape" d="M74.18,2.41H71.76V0h2.42Zm-4.85,0H66.91V0h2.42Zm-4.85,0H62.06V0h2.42Zm-4.72,0H57.33V0h2.43Zm-4.85,0H52.48V0h2.43Zm-4.85,0H47.64V0h2.42Zm-4.73,0H42.91V0h2.42Zm-4.85,0H38.06V0h2.42Zm-4.84,0H33.21V0h2.43Zm-4.73,0H28.48V0h2.43Zm-4.85,0H23.64V0h2.42Zm-4.85,0H18.79V0h2.42Z" fill="#b2bec7"></path><path id="Shape-6" data-name="Shape" d="M79,2.41H76.61V0h1.21A1.14,1.14,0,0,1,79,1.2Z" fill="#b2bec7"></path><path id="Shape-7" data-name="Shape" d="M79,34.33H76.61V32H79Zm0-4.58H76.61V27.46H79Zm0-4.45H76.61V23H79Zm0-4.58H76.61V18.43H79Zm0-4.58H76.61V13.85H79Zm0-4.58H76.61V9.27H79ZM79,7H76.61V4.7H79Z" fill="#b2bec7"></path></g><g id="Group-3-2" data-name="Group"><g id="Shape-8" data-name="Shape"><path d="M63.64,40.47,9.21,51.8a.81.81,0,0,1-.85-.49L1.45,18.43a.53.53,0,0,1,.49-.72L56.36,6.38a.54.54,0,0,1,.73.49l7,32.88C64.24,40,64,40.35,63.64,40.47Z" fill="#fff"></path><path d="M9.09,53a1.39,1.39,0,0,1-1-.36,2.2,2.2,0,0,1-.85-1.21L.36,18.67a2,2,0,0,1,.25-1.44,2.16,2.16,0,0,1,1.21-.85L56.24,5.06a2.12,2.12,0,0,1,1.46.24,2.27,2.27,0,0,1,.85,1.2l6.9,32.89a2,2,0,0,1-.24,1.44,2.19,2.19,0,0,1-1.21.85L9.45,53ZM2.79,18.67l6.66,31.8L62.79,39.39,56.12,7.59Z" fill="#192e3c"></path></g><path id="Shape-9" data-name="Shape" d="M38.55,28.79l-7.88,7a.86.86,0,0,1-1.46-.48L27,25.05a.84.84,0,0,1,1.09-1l10.06,3.25A.87.87,0,0,1,38.55,28.79Z" fill="#b2bec7"></path></g></g></g></g></g></g></svg>
                    <h1 className="upload-title">Upload video</h1>
                    <input 
                        type="file" 
                        className="upload-file"
                        onChange={this.handleFile}
                        accept="video/MOV"
                    />
                    <label>
                        <input 
                            type="text"
                            value={this.state.video_title}
                            onChange={this.update('video_title')}
                            placeholder="Enter video title" 
                            className="upload-imput-title"
                        />
                    </label>    
                    <label>
                        <textarea
                            value={this.state.video_description}
                            onChange={this.update("video_description")}
                            placeholder="Enter video description"  
                            className="upload-imput-description"  
                        />
                    </label>
                    <div className="upload-errors">{this.mapErrors()}</div>

                    <button className="upload-button">
                        <svg className="upload-logo" viewBox="0 0 24 24"><path d="M20.921 11.498a6.37 6.37 0 00.079-.953C21 6.93 17.978 4 14.25 4c-2.701 0-5.024 1.542-6.103 3.764a3.428 3.428 0 00-1.772-.491C4.511 7.273 3 8.738 3 10.545c0 .324.05.636.141.931C1.32 12.035 0 13.686 0 15.636 0 18.046 2.015 20 4.5 20H11v-5.379L9.561 16.06a.5.5 0 01-.707 0l-.707-.707a.5.5 0 010-.707l3.5-3.5a.5.5 0 01.707 0l3.5 3.5a.5.5 0 010 .707l-.707.707a.5.5 0 01-.707 0L13 14.621V20h6.5c2.485 0 4.5-1.954 4.5-4.364 0-1.928-1.291-3.561-3.079-4.138z"></path></svg>
                        Upload
                    </button>
                </form>
            </div> 
        );
    }

}

export default Upload;