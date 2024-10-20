import React from "react";
// import images
import heroImage from "../images/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero__text">
        <h1>Работайте быстрее скорости мысли</h1>
        <p>
          Большинство календарей предназначены для команд. Link предназначен для
          фрилансеров, которым нужен простой способ планирования своего
          расписания
        </p>
      </article>
      <div className="hero__buttons-container">
        <button className="button btn-blue">Попробовать бесплатно</button>
        <button className="button btn-dark">Узнать больше</button>
      </div>
      <div className="hero__image-container">
        <img src={heroImage} alt="" className="hero__image" />
      </div>
    </section>
  );
};

export default Hero;
