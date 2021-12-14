import React, { Component } from 'react';
import ProjectDetail from './ProjectDetail';

class JiraApp extends Component {
  constructor(props) {
    super(props);

    const props = {
      appEditions: {
        core: "FREE_EDITION",
        productDiscovery: "UNLICENSED",
        serviceDesk: "UNLICENSED",
        software: "FREE_EDITION",
      },
      baseUrl: "",
      isAdmin: true,
      locale: "en_US",
      projectId: 10000,
      projectType: "software",
      onDetailsUpdated: () => {}
    };
  }

  const ArchiveProjectModalComponent = () => {};
  const AvatarPickerDialogComponent = () => {};
  const DeleteProjectModalComponent = () => {};
  const FlagsComponent = () => {};
  const FormComponent = () => {};
  const HeaderComponent = () => {};
  const SoftDeleteProjectModalComponent = () => {};
  const onRefresh = () => {};

  render() {
    const flags = [];
    const hasFetchDataError = false;
    const isArchiveProjectModalOpen = false;
    const isAvatarPickerDialogOpen = true;
    const isDeleteProjectModalOpen = false;
    const isFetchingData = false;
    const isFormDirty = false;
    const isTrashProjectModalOpen = false;
    const flags = [];

    return (<div>
      <ProjectDetail
        flags={flags}
        hasFetchDataError=false
        isArchiveProjectModalOpen=false
        isAvatarPickerDialogOpen=true
        isDeleteProjectModalOpen=false
        isFetchingData=false
        isFormDirty=false
        isTrashProjectModalOpen=false
        ArchiveProjectModalComponent={this.ArchiveProjectModalComponent}
        AvatarPickerDialogComponent={this.AvatarPickerDialogComponent}
        DeleteProjectModalComponent={this.DeleteProjectModalComponent}
        FlagsComponent={this.FlagsComponent}
        FormComponent={this.FormComponent}
        HeaderComponent={this.HeaderComponent}
        SoftDeleteProjectModalComponent={this.SoftDeleteProjectModalComponent}
        onRefresh={this.onRefresh}
      />
    </div>);
  }
}

export default JiraApp;
