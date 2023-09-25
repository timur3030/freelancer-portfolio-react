import React, { useEffect, useRef } from "react";
import "./btnDarkMode.css";
import { useLocalStorage } from "../../utils/useLocalSorage";
// BtnDarkMode icons
import sun from "../../icons/sun.svg";
import moon from "../../icons/moon.svg";

function BtnDarkMode({ active }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");

  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn-active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn-active");
    }
  }, [darkMode]);

  useEffect(() => {
    if (active) {
      btnRef.current.classList.add("active");
    } else {
      btnRef.current.classList.remove("active");
    }
  }, [active]);

  const toggleDarkMode = () => {
    setDarkMode((currentState) => {
      return currentState === "light" ? "dark" : "light";
    });
  };

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

export default BtnDarkMode;
