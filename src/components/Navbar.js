import React, { useState } from "react";
import logo from "../images/logo.png";
import vk from "../images/vk.png";
import telegram from "../images/telegram.png";
import youtube from "../images/youtube.png";
import yandex from "../images/yandex-zen.png";
import showhide from "../images/showhide.png";
import google from "../images/google.png";
import apple from "../images/apple.png";
import cancel from "../images/cancel.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <header className="fixed-header">
      <div className="navbar">
        <img src={logo} alt="logo" className="navbar__logo" />
        <nav className="navbar__nav-desctop">
          <a href="#advantages" className="hover-underline-animation">
            Преимущества
          </a>
          <a href="#product" className="hover-underline-animation">
            Продукт
          </a>
          <a href="#gallery" className="hover-underline-animation">
            Галерея
          </a>
          <a href="#partners" className="hover-underline-animation">
            Партнеры
          </a>
          <a href="#feedbacks" className="hover-underline-animation">
            Отзывы
          </a>
        </nav>
        <nav
          className={
            navOpen
              ? "navbar__nav-mobile navbar__nav-mobile-open"
              : "navbar__nav-mobile"
          }
        >
          <div></div>
          <div className="navbar__mobile-links">
            <a href="#advantages" onClick={toggleNav}>
              Преимущества
            </a>
            <a href="#product" onClick={toggleNav}>
              Продукт
            </a>
            <a href="#gallery" onClick={toggleNav}>
              Галерея
            </a>
            <a href="#partners" onClick={toggleNav}>
              Партнеры
            </a>
            <a href="#feedbacks" onClick={toggleNav}>
              Отзывы
            </a>
          </div>
          <div className="navbar__mobile-media">
            <div className="navbar__media-links">
              <a href="/">
                <img src={vk} alt="vkontakte" />
              </a>
              <a href="/">
                <img src={telegram} alt="telegram" />
              </a>
              <a href="/">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="/">
                <img src={yandex} alt="yandex-zen" />
              </a>
            </div>
            <button className="btn-blue">Попробовать бесплатно</button>
          </div>
        </nav>
        <div className="navbar__btn-container">
          <button className="btn-dark navbar__btn" onClick={toggleModal}>
            Войти
          </button>
          <div
            className={navOpen ? "nav-toggle open" : "nav-toggle"}
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={modalOpen && !navOpen ? "navbar__modal-container" : "hide"}
      >
        <div className="navbar__modal has-fade fade-in">
          <h2>Вход в систему</h2>
          <form className="navbar__modal-form" action="">
            <div className="navbar__modal-form-group">
              <label htmlFor="email">E-mail</label>
              <input
                required
                placeholder="email@address.com"
                type="email"
                id="email"
              />
            </div>
            <div className="navbar__modal-form-group">
              <label htmlFor="password">Пароль</label>
              <div className="navbar__modal-form-password">
                <input
                  required
                  placeholder="8+ символов"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  minLength="8"
                  pattern="[a-zA-Z0-9]{8,}"
                  title="Используйте английские буквы и цифры"
                />
                <img
                  src={showhide}
                  alt="show or hide password"
                  onClick={togglePassword}
                />
              </div>
            </div>
            <label className="navbar__modal-form-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Запомнить меня
            </label>
            <button className="button btn-blue">Войти</button>
          </form>
          <div className="navbar__modal-auth">
            <p>Или войдите с помощью</p>
            <div className="navbar__modal-buttons-cont">
              <button className="button btn-dark">
                <img src={google} alt="" /> Google
              </button>
              <button className="button btn-dark">
                <img src={apple} alt="" />
                Apple ID
              </button>
            </div>
          </div>
          <div className="navbar__modal-footer">
            <p>Впервые в системе?</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Регистрация
            </a>
          </div>
          <div className="navbar__modal-close" onClick={toggleModal}>
            <img src={cancel} alt="cancel button" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
