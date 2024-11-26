import React from "react";
//import images
import logo from "../images/logo.png";
import vk from "../images/vk.png";
import telegram from "../images/telegram.png";
import youtube from "../images/youtube.png";
import yandex from "../images/yandex-zen.png";
import arrowUp from "../images/arrow-up.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logosocial">
        <img src={logo} alt="link logo" className="footer__logo" />
        <div className="footer__social">
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
            <img src={yandex} alt="yandex" />
          </a>
        </div>
      </div>
      <div className="footer__body">
        <p>ООО «Пример компании», 2020–2023</p>
        <div className="footer__policy">
          <a href="/">Политика конфиденциальности</a>
          <a href="/">Публичная оферта</a>
        </div>
      </div>
      <a href="#top" className="button btn-dark button-link">
        Подняться наверх <img src={arrowUp} alt="" />
      </a>
    </footer>
  );
};

export default Footer;
