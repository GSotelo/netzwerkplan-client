import React, { Fragment } from "react";

import styles from "./Layout.module.css";

const Layout = ({ header, sideBar, content, footer }) => (
  <Fragment>
    <header className={styles.headerBox}>{header}</header>
    <main className={styles.mainBox}>
      <aside className={styles.sideBarBox}>{sideBar}</aside>
      <section className={styles.contentBox}>{content}</section>
    </main>
    <footer className={styles.footer}>{footer}</footer>
  </Fragment>
);

export default Layout;