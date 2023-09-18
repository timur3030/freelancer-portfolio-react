import React from "react";
import Skill from "../components/skill/Skill";
import { skillsList } from "../helpers/skillsList";

function Skills() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section__title">Skills</h1>
        <ul className="section__list">
          {skillsList.map((skill, i) => {
            return <Skill title={skill.title} img={skill.img} key={i} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
