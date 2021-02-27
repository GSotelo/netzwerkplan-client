import React from "react";
import Dropdown from "../../UI/InputControls/Dropdown/Dropdown";

import { editItems, fileItems, helpItems, optionItems, zoomItems } from "./utilities/dropdownItems";
import styles from "./MenuBar.module.css";

const MenuBar = () => (
  <div className={styles.menuBar}>
    <Dropdown items={fileItems} title="File" />
    <Dropdown items={editItems} title="Edit" />
    <Dropdown items={optionItems} title="Options" />
    <Dropdown items={zoomItems} title="Zoom" />
    <Dropdown items={helpItems} title="Help" />
  </div>
);

export default MenuBar;