import React from "react";
import styles from "styles/Answer.css";

const Answer = () => {
  return (
    <div className={styles.review_answer}>
      <a href="#" className={styles.review_answer__do}>
        <span>Ответить</span>
        <img
          src="http://marsip01.tech01.net.in/mpv/img/answers.svg"
          alt="Ответить"
        />
      </a>
      <div className={styles.review_answer__mark}>
        <a href="#" className={styles.like}>
          <img
            src="http://marsip01.tech01.net.in/mpv/img/like-review.svg"
            alt="5"
          />
          <span>5</span>
        </a>
        <a href="#" className={styles.dislike}>
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
