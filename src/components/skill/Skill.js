import React from "react";

function Skill(props) {
  return (
    <li className="section__item">
      <img src={props.img} alt={props.title} />
      <h3 className="section__item-subtitle">{props.title}</h3>
    </li>
  );
}

export default Skill;
