import React from "react";

function Contacts() {
  return (
    <section className="section">
      <h1 className="section__title">Contacts</h1>
      <h2 className="section__subtitle">Location</h2>
      <div className="section__descr">Moscow, Russia</div>
      <h2 className="section__subtitle">Telegram / WhatsApp</h2>
      <div className="section__descr">
        <a href="tel:+79896603030">+7 (989) 660-30-30</a>
      </div>
      <h2 className="section__subtitle">Email</h2>
      <div className="section__descr">
        <a href="mailto:timur87@internet.com">timur87@internet.ru</a>
      </div>
    </section>
  );
}

export default Contacts;
