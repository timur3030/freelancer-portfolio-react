import React from "react";

function Project(props) {
  return (
    <li className="projects__item">
      <a href={props.href} target="_blank" rel="noreferrer">
        <img src={props.img} alt={props.title} className="projects__img" />
        <h3 className="projects__item-title">{props.title}</h3>
      </a>
    </li>
  );
}

export default Project;
