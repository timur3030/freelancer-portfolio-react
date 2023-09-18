import React from "react";
// Skills img
import js from "../img/skills/js.svg";
import react from "../img/skills/react.svg";
import html from "../img/skills/html.svg";
import css from "../img/skills/css.svg";
import bootstrap from "../img/skills/bootstrap.svg";
import node from "../img/skills/node-js.svg";
import sass from "../img/skills/sass.svg";
import git from "../img/skills/git.svg";
import github from "../img/skills/github.svg";
import jquery from "../img/skills/jquery.svg";
import npm from "../img/skills/npm.svg";
import figma from "../img/skills/figma.svg";
import gulp from "../img/skills/gulp.svg";
import bem from "../img/skills/bem.svg";

function Skills() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section__title">Skills</h1>
        <ul className="section__list">
          <li className="section__item">
            <img src={js} alt="JavaScript" />
            <h3 className="section__item-subtitle">JavaScript</h3>
          </li>
          <li className="section__item">
            <img src={react} alt="React" />
            <h3 className="section__item-subtitle">React</h3>
          </li>
          <li className="section__item">
            <img src={html} alt="HTML" />
            <h3 className="section__item-subtitle">HTML</h3>
          </li>
          <li className="section__item">
            <img src={css} alt="CSS" />
            <h3 className="section__item-subtitle">CSS</h3>
          </li>
          <li className="section__item">
            <img src={bootstrap} alt="BootStrap" />
            <h3 className="section__item-subtitle">BootStrap</h3>
          </li>
          <li className="section__item">
            <img src={node} alt="Node.js" />
            <h3 className="section__item-subtitle">Node.js</h3>
          </li>
          <li className="section__item">
            <img src={sass} alt="SASS/SCSS" />
            <h3 className="section__item-subtitle">SASS/SCSS</h3>
          </li>
          <li className="section__item">
            <img src={git} alt="Git" />
            <h3 className="section__item-subtitle">Git</h3>
          </li>
          <li className="section__item">
            <img src={github} alt="Github" />
            <h3 className="section__item-subtitle">Github</h3>
          </li>
          <li className="section__item">
            <img src={jquery} alt="jQuery" />
            <h3 className="section__item-subtitle">jQuery</h3>
          </li>
          <li className="section__item">
            <img src={npm} alt="NPM" />
            <h3 className="section__item-subtitle">NPM</h3>
          </li>
          <li className="section__item">
            <img src={figma} alt="figma" />
            <h3 className="section__item-subtitle">Figma</h3>
          </li>
          <li className="section__item">
            <img src={gulp} alt="gulp" />
            <h3 className="section__item-subtitle">Gulp</h3>
          </li>
          <li className="section__item">
            <img src={bem} alt="БЭМ" />
            <h3 className="section__item-subtitle">БЭМ</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
