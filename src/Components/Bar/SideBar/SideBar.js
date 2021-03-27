import React from "react";
import { DeviceGrid, ConnectorGrid } from "./utilities/CustomGrid";
import ProjectTree from "../../UI/Navigation/ProjectTree/ProjectTree";

import styles from "./SideBar.module.css";
import treeData from "./utilities/treeData";

const SideBar = (props) => (
  <div className={styles.sideBar}>
    <div className={styles.hardwareBox}><DeviceGrid /></div>
    <div className={styles.linksBox}><ConnectorGrid /></div>
    <div className={styles.projectTreeBox}><ProjectTree data={treeData} /></div>
  </div>
);

export default SideBar;