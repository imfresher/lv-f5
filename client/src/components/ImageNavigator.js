import React, { Component } from 'react';

class ImageNavigator extends Component {
  constructor(props) {
    super(props);

    // Default.
    this.state = {
      fileImageSource: undefined,
      imageFile: undefined,
      scale: 0,
      dragStartPoint: {x: 0, y: 0},
      imageOrientation: 1,
      imagePos: {x: 28, y: 28},
      isDragging: false,
      isDroppingFile: false,
      viewport: {
        dragStartPos: {x: 0, y: 0},
        height: 256,
        itemBounds: {
          height: 0,
          width: 0,
          x: 0,
          y: 0
        },
        itemSourceRect: {
          height: 0,
          width: 0
        },
        margin: 28,
        orientation: 1,
        width: 256
      }
    }

    const props = {
      errorMessage: undefined,
      imageSource: undefined,
      intl: {},
      isLoading: undefined,
      onImageError: () => {},
      onImageLoaded: () => {},
      onImageUploaded: () => {},
      onLoad: () => {},
      onRemoveImage: () => {},
    }

    // After drag image
    this.state = {
      fileImageSource: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAHCAyADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDx...",
      imageFile: {
        lastModified: 1638272924000,
        lastModifiedDate: "Tue Nov 30 2021 18:48:44 GMT+0700 (Indochina Time)",
        name: "db895f90d3fce9cb241362d03c43ad8346aa4338_0.jpg",
        size: 107679,
        type: "image/jpeg",
        webkitRelativePath: "",
        arrayBuffer: () => {},
        stream: () => {},
        slice: () => {},
        text: () => {},
      },
      scale: 0,
      dragStartPoint: {x: 0, y: 0},
      imageOrientation: 1,
      imagePos: {x: 28, y: 28},
      isDragging: false,
      isDroppingFile: false,
      viewport: {
        dragStartPos: {x: 0, y: 0},
        height: 256,
        item: "<img />",
        itemBounds: {
          height: 200,
          width: 355.55555555555554,
          x: -49.77777777777777,
          y: 28
        },
        itemSourceRect: {
          height: 450,
          width: 800
        },
        margin: 28,
        orientation: 1,
        width: 256
      }
    }

    const props = {
      errorMessage: undefined,
      imageSource: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAHCAyADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDx...",
      intl: {},
      isLoading: undefined,
      onImageError: () => {},
      onImageLoaded: () => {},
      onImageUploaded: () => {},
      onLoad: () => {},
      onRemoveImage: () => {},
    }
  }

  render() {
    const { fileImageSource } = this.state;

    return (<div>
    {/*{
      ! fileImageSource ? <DropZone /> : (
        <div>
          <ImageCropper />
          <Slider />
        </div>
      )
    }*/}
    </div>);
  }
}

export default ImageNavigator;
