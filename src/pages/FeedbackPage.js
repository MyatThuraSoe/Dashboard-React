//   const imageurl = "https://randomuser.me/api/?results=";
//   const totalimage = 25;
//   const res = await fetch(`${imageurl}${totalimage}`);
//   const { results } = await res.json();
import React from "react";
import { useState, useRef, useEffect } from "react";
import feedbackList from "../assets/data/feedbackList";
import { Feedback } from "../components/feedback";
import "../style/feedbackpage.css";
function FeedbackPage() {
  return (
    <div className="feedbackPage">
      <div className="heading">
        <h3>Feedback by our customers</h3>
      </div>
      <div className="feedback-container">
        <div className="feedbacklist">
          {feedbackList.map((item) => {
            return <Feedback key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default FeedbackPage;
