import React from "react";
// import images
import appstore from "../images/app-store.png";
import apiari from "../images/apiary.png";
import android from "../images/android.png";
import basecamp from "../images/basecamp.png";
import airbnb from "../images/airbnb.png";
import blender from "../images/blender-orange.png";
import ibm from "../images/ibm.png";

const Partners = () => {
  return (
    <section className="partners" id="partners">
      <header className="section-heading">
        <h2>Партнеры</h2>
        <p>
          Мы уделяем особое внимание эргономике и стараемся соответствовать
          месту работы
        </p>
      </header>
      <div className="partners__logos">
        <img src={appstore} alt="app-store logo" />
        <img src={apiari} alt="apiari logo" />
        <img src={android} alt="android logo" />
        <img src={basecamp} alt="basecamp logo" />
        <img src={airbnb} alt="airbnb logo" />
        <img src={blender} alt="blender-orange logo" />
        <img src={ibm} alt="ibm logo" />
      </div>
    </section>
  );
};

export default Partners;
