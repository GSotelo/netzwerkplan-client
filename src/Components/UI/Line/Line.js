import React from "react";

const Line = ({ color, ...props }) => (
  <svg {...props}>
    <line stroke-width="4" x1="60%" y1="10%" x2="30%" y2="90%" stroke={color} />
  </svg>
);

export default Line;