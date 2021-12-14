import React, { Component } from 'react';
import ImageNavigator from './ImageNavigator';

class AvatarPickerDialog extends Component {
  constructor(props) {
    super(props);

    // Default.
    this.state = {
      errorMessage: undefined,
      mode: 0,
      selectedAvatar: {
        dataURI: "/secure/viewavatar?size=xxxlarge@2x&avatarId=10417&avatarType=project"
      },
      selectedImage: undefined,
      selectedImageSource: undefined
    }

    const props = {
      avatars: [],
      defaultSelectedAvatar: {
        dataURI: "/secure/viewavatar?size=xxxlarge@2x&avatarId=10417&avatarType=project"
      },
      predefinedAvatarsText: "Default icons",
      primaryButtonText: "Select",
      title: "Choose an icon",
      onAvatarPicked: () => {},
      onCancel: () => {onCloseAvatarPickerDialog()},
      onImagePicked: () => {}
    }

    // After drag image
    this.state = {
      errorMessage: undefined,
      mode: 0,
      selectedAvatar: {
        dataURI: "/secure/viewavatar?size=xxxlarge@2x&avatarId=10400&avatarType=project"
      },
      selectedImage: {
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
      selectedImageSource: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAHCAyADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDx..."
    }

    const props = {
      avatars: [
        {dataURI: "/secure/viewavatar?size=xxxlarge@2x&avatarId=10400&avatarType=project"},
        {dataURI: "/secure/viewavatar?size=xxxlarge@2x&avatarId=104..&avatarType=project"},
        ...
      ],
      defaultSelectedAvatar: {
        dataURI: "/secure/viewavatar?size=xxxlarge@2x&avatarId=10417&avatarType=project"
      },
      predefinedAvatarsText: "Default icons",
      primaryButtonText: "Select",
      title: "Choose an icon",
      onAvatarPicked: () => {},
      onCancel: () => {onCloseAvatarPickerDialog()},
      onImagePicked: () => {}
    }
  }

  const onImageError = () => {};
  const onImageLoaded = () => {};
  const onImageUploaded = () => {};
  const onLoad = () => {};
  const onRemoveImage = () => {};

  render() {
    const imageSource = this.state.selectedImageSource;

    return (<div>
      <ImageNavigator
        imageSource={imageSource}
        onImageError={this.onImageError}
        onImageLoaded={this.onImageLoaded}
        onImageUploaded={this.onImageUploaded}
        onLoad={this.onLoad}
        onRemoveImage={this.onRemoveImage},
      />
    </div>);
  }
}

export default AvatarPickerDialog;
