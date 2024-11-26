import React from "react";
import { useGlobalContext } from "../context";

const FeedbackCard = ({ image, name, title, feedback }) => {
  let width = window.innerWidth;
  const slicedFeedback =
    width > 1000 ? feedback.slice(0, 250) : feedback.slice(0, 185);
  const { setPhoto, setTitle, setName, setFeedback } = useGlobalContext();
  return (
    <article className="feedback-card">
      <header>
        <img src={image} alt="avatar" />
        <div className="feedback-card__text">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </header>
      <p>{slicedFeedback}...</p>
      <div
        className="feedback-card__button"
        onClick={() => {
          setPhoto(image);
          setTitle(title);
          setName(name);
          setFeedback(feedback);
        }}
      >
        Показать еще
      </div>
    </article>
  );
};

export default FeedbackCard;
