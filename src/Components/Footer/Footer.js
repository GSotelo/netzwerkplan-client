import React from "react";
import Icon from "rsuite/lib/Icon";

import styles from "./Footer.module.css";

const Footer = (props) => {
  const icon = <Icon icon="copyright" />;
  return (
    <div className={styles.footer}>
      <span>Copyright {icon} 2021 NextEngineering</span>
    </div>
  );
  ;
}
export default Footer;