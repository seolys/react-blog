import React, { Component } from "react";
import PageTemplate from "../components/common/PageTemplate";
import Post from "../containers/post/Post";
import AskRemoveModalContainer from "containers/modal/AskRemoveModalContainer";

class PostPage extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <PageTemplate>
        <Post id={id} />
        <AskRemoveModalContainer />
      </PageTemplate>
    );
  }
}

export default PostPage;
