import React from 'react';

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video_title: "",
            video_description: "",
            owner_id: null,
            video_file: null, 
            video_url: null,
        };
        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ video_file: file, video_url: reader.result });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ video_url: "", video_file: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[video_title]', this.state.video_title);
        formData.append('video[video_description]', this.state.video_description);
    
        if (this.state.video_file) {
            // debugger
            formData.append('video[video_url]', this.state.video_file);
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
            }
        );
    }

    render()  {
        console.log(this.state)
        // const preview = this.state.video_url ? <img src={this.state.video_url} /> : null;
        return (
        
            <div className="upload-component">

                {/* <form className="upload-component" onSubmit={this.handleSubmit}> */}
                <form className="upload-form" onSubmit={this.handleSubmit}>
                    <h1 className="upload-title">Upload video</h1>

                    <input 
                        type="file" 
                        onChange={this.handleFile}
                        className="upload-file"
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
                    {/* <h3>Video preview </h3>
                    {preview} */}
                    
                    <button className="upload-button" ><img src="http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" alt=""/>Upload</button>
                </form>
            </div> 
        );
    }

}

export default Upload;