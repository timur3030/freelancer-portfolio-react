import React from "react";

function Social({ img, href, alt }) {
  return (
    <li className="footer__link">
      <a href={href} target="_blank" rel="noreferrer">
        <img src={img} alt={alt} />
      </a>
    </li>
  );
}

export default Social;
