import React, { Component } from 'react';
import AvatarPickerDialog from './AvatarPickerDialog';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);

    const props = {
      flags: [],
      hasFetchDataError: false,
      isArchiveProjectModalOpen: false,
      isAvatarPickerDialogOpen: true,
      isDeleteProjectModalOpen: false,
      isFetchingData: false,
      isFormDirty: false,
      isTrashProjectModalOpen: false,
      ArchiveProjectModalComponent: () => {},
      AvatarPickerDialogComponent: () => {},
      DeleteProjectModalComponent: () => {},
      FlagsComponent: () => {},
      FormComponent: () => {},
      HeaderComponent: () => {},
      SoftDeleteProjectModalComponent: () => {},
      onRefresh: () => {}
    }
  }

  const onAvatarPicked = () => {};
  const onCloseAvatarPickerDialog = () => {};
  const onImagePicked = () => {};

  render() {
    const avatars = [];
    const defaultSelectedAvatar = {
      dataURI: "/secure/viewavatar?size=xxxlarge@2x&avatarId=10417&avatarType=project"
    };

    return (<div>
      <AvatarPickerDialog
        title="Choose an icon"
        predefinedAvatarsText="Default icons"
        primaryButtonText="Select"
        avatars={ avatars }
        defaultSelectedAvatar={ defaultSelectedAvatar }
        onAvatarPicked={this.onAvatarPicked}
        onCancel={this.onCloseAvatarPickerDialog}
        onImagePicked={this.onImagePicked}
      />
    </div>);
  }
}

export default ProjectDetail;
