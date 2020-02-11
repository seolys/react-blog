import React, { Component } from "react";
import PageTemplate from "../components/common/PageTemplate";
import ListWrapper from "../components/list/ListWrapper/ListWrapper";
import ListContainer from "containers/list/ListContainer";

class ListPage extends Component {
  render() {
    const { page = 1, tag } = this.props.match.params;

    return (
      <PageTemplate>
        <ListWrapper>
          <ListContainer page={parseInt(page)} tag={tag} />
        </ListWrapper>
      </PageTemplate>
    );
  }
}

export default ListPage;
