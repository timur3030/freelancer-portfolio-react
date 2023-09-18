import React from "react";
import "./footer.css";
// Social icons
import facebook from "../../icons/social/facebook.svg";
import instagram from "../../icons/social/instagram.svg";
import github from "../../icons/social/github.svg";
import telegram from "../../icons/social/telegram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="footer__list">
            <li className="footer__link">
              <a
                href="https://facebook.com/timur.rizakhanov"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="footer__link">
              <a
                href="https://instagram.com/timur.biker"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="footer__link">
              <a
                href="https://github.com/timur3030"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
              </a>
            </li>
            <li className="footer__link">
              <a href="https://t.me/timur05" target="_blank" rel="noreferrer">
                <img src={telegram} alt="telegram" />
              </a>
            </li>
          </ul>
          <div className="footer__copyright">
            <p>© 2023 timur-store.ru</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
