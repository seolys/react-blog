import React, { Component } from "react";
import styles from "./PageTemplate.scss";
import classNames from "classnames/bind";
import HeaderContainer from "containers/common/HeaderContainer";
import FooterContainer from "containers/common/FooterContainer";

const cx = classNames.bind(styles);

class PageTemplate extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={cx("page-template")}>
        <HeaderContainer />
        <main>{children}</main>
        <FooterContainer />
      </div>
    );
  }
}

export default PageTemplate;
