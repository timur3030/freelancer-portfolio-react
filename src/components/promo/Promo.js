import React from "react";
import "./promo.css";
import Animation from "../animation/Animation";

function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__wrapper">
          <h1 className="promo__title">
            <span>
              Hi, my name is <span className="accent">Timur</span>
            </span>
            <br />a frontend developer
          </h1>
          <p className="promo__text">with passion for learning and creating.</p>
          <Animation />
        </div>
      </div>
    </section>
  );
}

export default Promo;
