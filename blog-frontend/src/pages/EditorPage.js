import React, { Component } from "react";
import EditorTemplate from "../components/editor/EditorTemplate/EditorTemplate";
import EditorHeaderContainer from "containers/editor/EditorHeaderContainer";
import EditorPaneContainer from "containers/editor/EditorPaneContainer";
import PreviewPaneContainer from "containers/editor/PreviewPaneContainer";

class EditorPage extends Component {
  render() {
    return (
      <EditorTemplate
        header={<EditorHeaderContainer />}
        editor={<EditorPaneContainer />}
        preview={<PreviewPaneContainer />}
      />
    );
  }
}

export default EditorPage;
