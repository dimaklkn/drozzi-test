import React from "react";

const Gallery = () => {
  return (
    <section className="gallery wrapper">
      <header className="section-heading gallery__text" id="gallery">
        <h2>Галерея</h2>
        <p>
          Мы уделяем особое внимание эргономике и стараемся соответствовать
          месту работы
        </p>
      </header>
      <div className="gallery__images">
        <div className="gallery__image-container one"></div>
        <div className="gallery__image-container two"></div>
        <div className="gallery__image-container three"></div>
        <div className="gallery__image-container four"></div>
        <div className="gallery__image-container five"></div>
        <div className="gallery__image-container six"></div>
        <div className="gallery__image-container seven"></div>
      </div>
      <button className="button btn-dark">Смотреть ещё</button>
    </section>
  );
};

export default Gallery;
