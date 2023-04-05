import React from "react";
import "./card.css";

function Card({ img, title, desc }) {
  return (
    <div className="organick__card">
      <div className="organick__card-img">
        <img src={img} alt="" />
      </div>
      <div className="organick__card-content">
        <p className="text_italic">{title}</p>
        <h3>{desc}</h3>
      </div>
    </div>
  );
}

export default Card;
