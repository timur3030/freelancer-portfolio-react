import React from "react";
import "./nav.css";
// Social icons
import sun from "../../icons/sun.svg";
import moon from "../../icons/moon.svg";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__row">
          <a href="./index.html" className="nav__logo">
            <span>Freelancer</span> portfolio
          </a>
          <ul className="nav__list">
            <li>
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>
            <li>
              <a href="./skills.html" className="nav__link">
                Skills
              </a>
            </li>
            <li>
              <a href="./contacts.html" className="nav__link">
                Contacts
              </a>
            </li>
          </ul>
          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>
          <div className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
