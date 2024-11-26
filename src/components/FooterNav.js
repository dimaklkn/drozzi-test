import React, { useState } from "react";
// import images
import chevron from "../images/chevron-up.png";

const FooterNav = () => {
  const [linkIsOpen, setLinkIsOpen] = useState(true);
  const [missionIsOpen, setMissionIsOpen] = useState(false);
  const [resoursesIsOpen, setResoursesIsOpen] = useState(false);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);

  const toggleLink = () => {
    setLinkIsOpen(!linkIsOpen);
    console.log(linkIsOpen);
  };

  const toggleMission = () => {
    setMissionIsOpen(!missionIsOpen);
  };

  const toggleResourses = () => {
    setResoursesIsOpen(!resoursesIsOpen);
  };

  const toggleAbout = () => {
    setAboutIsOpen(!aboutIsOpen);
  };

  return (
    <nav className="footernav">
      <div className="footernav__pages">
        <div className="footernav__page">
          <div className="footernav__page-title" onClick={toggleLink}>
            <h3>Link</h3>
            <div className="footernav__button">
              <img
                src={chevron}
                alt=""
                className={linkIsOpen ? "chevron-down" : "chevron-up"}
              />
            </div>
          </div>
          <div
            className={
              linkIsOpen
                ? "footernav__pages-links  has-fade fade-in"
                : "collapsed"
            }
          >
            <a href="/">Преимущества</a>
            <a href="/">Продукт</a>
            <a href="/">Галерея</a>
            <a href="/">Партнеры</a>
            <a href="/">Отзывы</a>
            <a href="/">Заявка</a>
          </div>
        </div>
        <div className="footernav__page">
          <div className="footernav__page-title" onClick={toggleMission}>
            <h3>Миссия</h3>
            <div className="footernav__button">
              <img
                src={chevron}
                alt=""
                className={missionIsOpen ? "chevron-down" : "chevron-up"}
              />
            </div>
          </div>
          <div
            className={
              missionIsOpen
                ? "footernav__pages-links  has-fade fade-in"
                : "collapsed"
            }
          >
            <a href="/">Повествование</a>
            <a href="/">Роадмеп</a>
            <a href="/">Релизы</a>
            <a href="/">Календарь</a>
            <a href="/">Сторибук</a>
            <a href="/">Художка</a>
          </div>
        </div>
        <div className="footernav__page">
          <div className="footernav__page-title" onClick={toggleResourses}>
            <h3>Ресурсы</h3>
            <div className="footernav__button">
              <img
                src={chevron}
                alt=""
                className={resoursesIsOpen ? "chevron-down" : "chevron-up"}
              />
            </div>
          </div>
          <div
            className={
              resoursesIsOpen
                ? "footernav__pages-links  has-fade fade-in"
                : "collapsed"
            }
          >
            <a href="/">Для инвесторов</a>
            <a href="/">Вэйтлист</a>
            <a href="/">Прайслист</a>
            <a href="/">Презентация</a>
            <a href="/">Файлы</a>
          </div>
        </div>
        <div className="footernav__page">
          <div className="footernav__page-title" onClick={toggleAbout}>
            <h3>О нас</h3>
            <div className="footernav__button">
              <img
                src={chevron}
                alt=""
                className={aboutIsOpen ? "chevron-down" : "chevron-up"}
              />
            </div>
          </div>
          <div
            className={
              aboutIsOpen
                ? "footernav__pages-links  has-fade fade-in"
                : "collapsed"
            }
          >
            <a href="/">История компании</a>
            <a href="/">Об основателе</a>
            <a href="/">Наша команда</a>
            <a href="/">Вакансии</a>
          </div>
        </div>
      </div>

      <div className="footernav__address">
        <p>г. Москва, ул Пушкина, д. Колотушкина 37, каб. 142, дверь справа</p>
        <p>+7 999 123-45-67</p>
        <p>example@example.com</p>
      </div>
    </nav>
  );
};

export default FooterNav;
