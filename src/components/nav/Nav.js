import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./nav.css";

function Nav() {
  const [active, setActive] = useState(false);

  const normalLink = "nav__link";
  const activeLink = "nav__link nav__link_active";

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav__row">
            <NavLink
              to="/"
              className="nav__logo"
              onClick={() => {
                setActive(false);
                toTop();
              }}
            >
              <span>Freelancer</span> portfolio
            </NavLink>
            <ul className={active ? "nav__list active" : "nav__list"}>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
            <BtnDarkMode active={active} />
            <div
              className={active ? "hamburger hamburger_active" : "hamburger"}
              onClick={() => {
                setActive(!active);
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={active ? "overlay active" : "overlay"}
        onClick={() => {
          setActive(false);
        }}
      ></div>
    </>
  );
}

export default Nav;
