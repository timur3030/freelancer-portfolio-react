import React, { useState } from "react";
import "./animation.css";

function Animation() {
  const [start, setStart] = useState(true);
  function animationToggle() {
    setStart(!start);
  }

  return (
    <>
      <div className="btn" onClick={animationToggle}>
        {start ? "Start animation" : "Stop animation"}
      </div>
      <div>
        <div className={start ? "anime-element" : "anime-element anime"}></div>
        <div className={start ? "anime-element" : "anime-element anime"}></div>
        <div className={start ? "anime-element" : "anime-element anime"}></div>
        <div className={start ? "anime-element" : "anime-element anime"}></div>
        <div className={start ? "anime-element" : "anime-element anime"}></div>
      </div>
    </>
  );
}

export default Animation;
