import React from "react";
import Social from "../social/Social";
import "./footer.css";
import { socialsList } from "../../helpers/socialsList";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="footer__list">
            {socialsList.map((item, i) => {
              return (
                <Social
                  img={item.img}
                  href={item.href}
                  alt={item.alt}
                  key={i}
                />
              );
            })}
          </ul>
          <div className="footer__copyright">
            <p>© 2023 timur-biker.ru</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
