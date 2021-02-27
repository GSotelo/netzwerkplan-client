import React from "react";
import { Tree } from 'antd';

import "./ProjectTree.css";

const { DirectoryTree } = Tree;

const ProjectTree = ({ data }) => (
  <div className="tree">
    <DirectoryTree
      className="h100"
      defaultExpandedKeys={["m1"]}
      treeData={data}
    />
  </div>
);

export default ProjectTree;