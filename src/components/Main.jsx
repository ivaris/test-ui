import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    fetch('http://localhost:8080/upload/v1', {
      method: 'POST',
      body: data,
      headers:{"Authorization": ""}
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: body.url });
        console.log("uploaded response..", body)
      });
    });
  }

  render() {
    return (
        <form onSubmit={this.handleUploadImage}>
          <div>
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
          </div>

          <br />
          <div>
            <button>Upload</button>
          </div>
          <img src={this.state.imageURL} alt="img" />
        </form>
    );
  }
}

export default Main;