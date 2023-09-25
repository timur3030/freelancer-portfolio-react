import React from "react";
import Promo from "../components/promo/Promo";
import Projects from "../components/projects/Projects";
import Skills from "./Skills";

function Home() {
  return (
    <>
      <Promo />
      <Skills />
      <Projects />
    </>
  );
}

export default Home;
