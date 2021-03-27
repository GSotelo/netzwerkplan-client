import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Layout from "../UI/Containers/Layout/Layout";
import Network from "../Network/Network";
import SideBar from "../Bar/SideBar/SideBar";

import styles from "./App.module.css";

const App = (props) => {
  const propsLayout = {
    header: <Header />,
    sideBar: <SideBar />,
    content: <Network />,
    footer: <Footer />,
  }

  return (
    <div className={styles.app}>
      <Layout {...propsLayout} />
    </div>
  );
};

export default App;