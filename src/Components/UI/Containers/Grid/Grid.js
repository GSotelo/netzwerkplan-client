import React from "react";

import "./Grid.css";

const Grid = ({ groups, title }) => {
  return (
    <div className="grid">
      <div className="title">{title}</div>
      <div className="groupBox">
        {
          groups.map(group =>
            <div className="row" >
              {
                group.map(el => <div className="col">{el}</div>)
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Grid;