import React from "react";
import ProjectTree from "../../UI/Navigation/ProjectTree/ProjectTree";

import treeData from "./utilities/treeData";
import styles from "./SideBar.module.css";

// Temp
import { DeviceGrid, ConnectorGrid } from "./utilities/CustomGrid";

const SideBar = (props) => (
  <div className={styles.sideBar}>
    <div className={styles.hardwareBox}><DeviceGrid /></div>
    <div className={styles.linksBox}><ConnectorGrid /></div>
    <div className={styles.projectTreeBox}><ProjectTree data={treeData} /></div>
  </div>
);

export default SideBar;