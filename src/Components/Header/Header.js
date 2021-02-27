import React, { Fragment } from "react";
import MenuBar from "../Bar/MenuBar/MenuBar";
import TitleBar from "../Bar/TitleBar/TitleBar";
import ToolBar from "../Bar/ToolBar/ToolBar";

import styles from "./Header.module.css";

const Header = () => (
  <Fragment>
    <div className={styles.titleBarBox}>
      <TitleBar />
    </div>
    <div className={styles.menuBarBox}>
      <MenuBar />
    </div>
    <div className={styles.toolBarBox}>
      <ToolBar />
    </div>
  </Fragment>
);

export default Header;