import React, { useState } from "react";
import { useGlobalContext } from "../context";
//import feedbacks data
import feedbackData from "../feedbackData";
// import components
import FeedbackCard from "./FeedbackCard";
//import images
import arrowLeft from "../images/arrow-left.png";
import arrowRight from "../images/arrow-right.png";
import cancel from "../images/cancel.png";

const Feedback = () => {
  //context variables
  const {
    photo,
    setPhoto,
    name,
    setName,
    feedback,
    setFeedback,
    title,
    setTitle,
  } = useGlobalContext();

  //carousel functionality
  let width = window.innerWidth;
  const mover = width > 1000 ? 3 : 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToRight = () => {
    let newIndex = currentIndex + mover;

    setCurrentIndex(newIndex);
  };
  const goToLeft = () => {
    let newIndex = currentIndex - mover;
    if (newIndex < 0) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <section className="feedback wrapper" id="feedbacks">
      <header className="section-heading">
        <h2>Отзывы</h2>
      </header>
      <div className="feedback__cards-container">
        {feedbackData.map((person, index) => {
          if (index >= currentIndex && index < currentIndex + mover) {
            return (
              <FeedbackCard
                image={person.photo}
                name={person.name}
                title={person.title}
                feedback={person.feedback}
                key={person.id}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <nav className="feedback__navigation">
        <button
          className="btn-dark"
          onClick={goToLeft}
          disabled={currentIndex === 0}
        >
          <img src={arrowLeft} alt="left" />
        </button>
        <p>
          {currentIndex + 1}/{feedbackData.length}
        </p>
        <button
          className="btn-dark"
          onClick={goToRight}
          disabled={currentIndex >= feedbackData.length - mover}
        >
          <img src={arrowRight} alt="right" />
        </button>
      </nav>
      <div className={name ? "feedback__modal-container" : "hide"}>
        <div className="feedback__modal">
          <header>
            <img src={photo} alt="avatar" />
            <div className="feedback-card__text">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </header>
          <p>{feedback}</p>
          <div
            className="navbar__modal-close"
            onClick={() => {
              setName(null);
              setPhoto(null);
              setTitle(null);
              setFeedback(null);
            }}
          >
            <img src={cancel} alt="cancel button" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
