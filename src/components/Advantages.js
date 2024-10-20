import React from "react";
// import images
import advImage from "../images/adv-img1.png";
import advImage2 from "../images/adv-img2.png";
// import icons
import union from "../images/Union.png";
import siteTemplate from "../images/site-template-fill.png";
import chart from "../images/chart-cube-arrow-fill.png";
import message from "../images/message-lines-fill.png";

const Advantages = () => {
  return (
    <section className="advantages wrapper">
      <header className="advantages__text">
        <h2>Преимущества</h2>
        <p>
          Link предназначен для фрилансеров, которым нужен простой способ
          планирования своего расписания
        </p>
      </header>
      <article className="advantages__features">
        <div className="advantages__image-container">
          <img src={advImage} alt="" className="adv-image1" />
          <img src={advImage2} alt="" className="adv-image2" />
        </div>
        <div className="advantages__features-container">
          <div className="advantages__feature">
            <img src={union} alt="" />
            <div className="advantages__feature-text">
              <h3>Единый источник истины</h3>
              <p>
                Когда вы добавляете работу в свой календарь Link, мы
                автоматически вычисляем полезные сведения
              </p>
            </div>
          </div>
          <div className="advantages__feature">
            <img src={siteTemplate} alt="" />
            <div className="advantages__feature-text">
              <h3>Единый источник истины</h3>
              <p>
                Когда вы добавляете работу в свой календарь Link, мы
                автоматически вычисляем полезные сведения
              </p>
            </div>
          </div>
          <div className="advantages__feature">
            <img src={chart} alt="" />
            <div className="advantages__feature-text">
              <h3>Единый источник истины</h3>
              <p>
                Когда вы добавляете работу в свой календарь Link, мы
                автоматически вычисляем полезные сведения
              </p>
            </div>
          </div>
          <div className="advantages__feature">
            <img src={message} alt="" />
            <div className="advantages__feature-text">
              <h3>Единый источник истины</h3>
              <p>
                Когда вы добавляете работу в свой календарь Link, мы
                автоматически вычисляем полезные сведения
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Advantages;
