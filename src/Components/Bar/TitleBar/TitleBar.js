import React from "react";
import SystemButton from "../../UI/InputControls/Button/SystemButton/SystemButton";
import { ReactComponent as Github } from "../../../assets/svg/github.svg";

import styles from "./TitleBar.module.css";

const TitleBar = () => (
  <div className={styles.titleBar}>
    <div className={styles.logoBox}><Github /></div>
    <div className={styles.textBox}><span>NextEngineering</span></div>
    <div className={styles.controlsBox}><SystemButton /></div>
  </div>
);

export default TitleBar;