import React from "react";
import "./Card.css";

const Card = ({ icon, ip, title }) => (
  <div className="card">
    <div className="icon">{icon}</div>
    <div className="titleFormat"><span>{title}</span></div>
    <div>{ip}</div>
  </div>
);

export default Card;