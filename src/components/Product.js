import React from "react";

// import images
import cardImage1 from "../images/Macbook.png";
import cardImage2 from "../images/Boards.png";

const Product = () => {
  return (
    <section className="product wrapper">
      <header className="section-heading">
        <h2>Продукт</h2>
        <p>
          Мы уделяем особое внимание эргономике и стараемся соответствовать
          месту работы
        </p>
      </header>
      <div className="product__cards-container">
        <article className="product__card">
          <h3>Работа</h3>
          <p>
            Вы когда-нибудь задумывались о том, не слишком ли вы зависите от
            клиента в работе? Link поможет вам определиться
          </p>
          <button className="button btn-blue">Регистрация</button>
          <img src={cardImage1} alt="Macbook display with some graph" />
        </article>

        <article className="product__card">
          <h3>Дизайн с реальными данными</h3>
          <p>
            Вы когда-нибудь задумывались о том, не слишком ли вы зависите от
            клиента в работе? Link поможет вам определиться
          </p>
          <button className="button btn-blue">Попробовать бесплатно</button>

          <img src={cardImage2} alt="Boards notifications" />
        </article>
      </div>
    </section>
  );
};

export default Product;
