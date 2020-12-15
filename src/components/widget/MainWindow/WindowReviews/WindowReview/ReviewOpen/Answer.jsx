import React from "react";
import "styles/windowMain/Answer.css";

const Answer = () => {
  return (
    <div className="review_answer">
      <a href="#" className="review_answer__do">
        <span>Ответить</span>
        <img
          src="http://marsip01.tech01.net.in/mpv/img/answers.svg"
          alt="Ответить"
        />
      </a>
      <div className="review_answer__mark">
        <a href="#" className="like">
          <img
            src="http://marsip01.tech01.net.in/mpv/img/like-review.svg"
            alt="5"
          />
          <span>5</span>
        </a>
        <a href="#" className="dislike">
          <img
            src="http://marsip01.tech01.net.in/mpv/img/dislike-review.svg"
            alt="0"
          />
          <span>0</span>
        </a>
      </div>
    </div>
  );
};

export default Answer;
