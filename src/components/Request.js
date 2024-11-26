import React from "react";
// import images
import heroImage from "../images/hero.png";

const Request = () => {
  return (
    <section className="request">
      <div className="request__cover">
        <div className="request__text">
          <h3>Оставьте заявку на бетатест</h3>
          <p>
            Мы уделяем особое внимание эргономике и стараемся соответствовать
            месту работы
          </p>
        </div>
        <div className="request__img-container">
          <img src={heroImage} alt="" />
        </div>
      </div>
      <form action="" className="request__form">
        <div className="request__form-group">
          <label htmlFor="name">Ваше имя</label>
          <input required placeholder="Иван" type="text" id="name" />
        </div>
        <div className="request__form-group">
          <label htmlFor="phone">Номер телефона</label>

          <input
            required
            placeholder="+7 000 000-00-00"
            type="tel"
            id="phone"
          />
        </div>
        <div className="request__form-group">
          <label htmlFor="email">E-mail</label>
          <input
            required
            placeholder="email@address.com"
            type="email"
            id="email2"
          />
        </div>
        <div className="request__form-group">
          <label htmlFor="comment">Комментарий к заявке</label>
          <textarea
            required
            placeholder="Здравствуйте, хотелось бы..."
            id="comment"
          />
        </div>
        <p>
          Нажимая «Отправить» вы соглашаетесь с <br />
          <a href="/">политикой конфиденциальности</a>
        </p>
        <button className="btn-blue">Отправить</button>
      </form>
    </section>
  );
};

export default Request;
