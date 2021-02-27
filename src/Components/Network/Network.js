import React from 'react';
import ReactFlow from 'react-flow-renderer';
import elements from "./utilities/networkData";

import styles from "./Network.module.css";

const Network = () => (
  <div className={styles.network}>
    <ReactFlow elements={elements} />
  </div>
);

export default Network;