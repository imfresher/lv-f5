import React, { Component } from 'react';
import { ImageUploader } from './styled';

class MediaUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragging: false
    };
  }

  // UNSAFE_componentWillMount() {
  //   document.addEventListener('mousemove', this.onMouseMove);
  //   document.addEventListener('mouseup', this.onMouseUp);
  // }

  componentWillUnmount() {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onDragStarted = (x, y) => {
    this.setState({
      isDragging: true
    });
  }

  onMouseMove = () => {
    console.log("onMouseMove");
  }

  onMouseUp = () => {
    console.log("onMouseUp");
  }

  renderImageUploader = () => {
    // const { errorMessage, isLoading } = this.props;

    return (
      <ImageUploader>
        ABC
      </ImageUploader>
    );
  }

  render() {
    return (
      <div className="MediaUpload">
        { this.renderImageUploader() }
      </div>
    );
  }
}

export default MediaUpload;
