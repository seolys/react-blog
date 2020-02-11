import React, { Component } from "react";
import EditorHeader from "components/editor/EditorHeader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as editorActions from "store/modules/editor";

import queryString from "query-string";

class EditorHeaderContainer extends Component {
  componentDidMount() {
    const { EditorActions, location } = this.props;
    console.log(EditorActions);
    EditorActions.initialize();

    const { id } = queryString.parse(location.search);
    if (id) {
      EditorActions.getPost(id);
    }
  }

  handleGoBack = () => {
    // alert("야호1");
    const { history } = this.props;
    history.goBack();
  };

  // handleSubmit = () => {
  //   alert("야호2");
  // }

  handleSubmit = async () => {
    const {
      title,
      markdown,
      tags,
      EditorActions,
      history,
      location
    } = this.props;
    const post = {
      title,
      body: markdown,
      tags:
        tags === "" ? [] : [...new Set(tags.split(",").map(tag => tag.trim()))]
    };

    try {
      const { id } = queryString.parse(location.search);

      // id가 존재하면 수정, id가 없으면 신규 글쓰기 처리
      if (id) {
        await EditorActions.editPost({ id, ...post });
        history.push(`/post/${id}`);
      } else {
        await EditorActions.writePost(post);
        //페이지를 이동시킨다.
        console.log("this.props.postId", this.props.postId);
        history.push(`/post/${this.props.postId}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { handleGoBack, handleSubmit } = this;
    const { id } = queryString.parse(this.props.location.search);
    return (
      <EditorHeader
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
        isEdit={id ? true : false}
      />
    );
  }
}

export default connect(
  state => ({
    title: state.editor.get("title"),
    markdown: state.editor.get("markdown"),
    tags: state.editor.get("tags"),
    postId: state.editor.get("postId")
  }),
  dispatch => ({ EditorActions: bindActionCreators(editorActions, dispatch) })
)(withRouter(EditorHeaderContainer));
