import React from "react";
import Icon from "rsuite/lib/Icon";

import "./SystemButton.css";

const SystemButton = (props) => (
  <div className="systemButton">
    <div className="btn"><Icon icon="window-minimize" /></div>
    <div className="btn"><Icon icon="window-restore" /></div>
    <div className="btn"><Icon icon="window-close" /></div>
  </div>
);

export default SystemButton;