import React, { useState } from "react";
import "../style/feedback.css";

export function Feedback(props) {
  const [isHidden, setIsHidden] = useState(false);

  const Image = require(`../assets/img/${props.img}`);
  const goldStar = require(`./../assets/img/goldStar.png`);
  const blankStar = require(`./../assets/img/blankStar1.png`);

  let tag = [];

  function getStars(rating) {
    for (let j = 0; j < 5; j++) {
      if (j < rating) {
        tag = [
          ...tag,
          <img key={j} src={goldStar} className="stars" alt="star icon" />,
        ];
      } else {
        tag = [
          ...tag,
          <img key={j} src={blankStar} className="stars" alt="star icon" />,
        ];
      }
    }
    return tag;
  }

  const handleHideClick = () => {
    setIsHidden(!isHidden);
  };

  const handleDeleteClick = () => {
    // Perform delete action here
    // You can remove the feedback from the UI or send a request to delete it from the backend
  };

  return (
    <div id="feedback" className={`feedback ${isHidden ? "hidden" : ""}`}>
      <div className="feedback-profile-container">
        <img src={Image} alt="feedback profile icon" />
      </div>
      <div className="feedback-text-container">
        <div className="feedback-top">
          <span className="feedback-name">{props.name}</span>
          <span className="feedback-email">{props.email}</span>
          <span className="feedback-rating">{getStars(props.stars)}</span>
        </div>
        <div className="feedback-text">{props.review}</div>
        <div className="feedback-buttons">
          <button className="hide-btn" onClick={handleHideClick}>
            {isHidden ? "Hidden" : "Hide"}
          </button>
          <button className="delete-btn" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
