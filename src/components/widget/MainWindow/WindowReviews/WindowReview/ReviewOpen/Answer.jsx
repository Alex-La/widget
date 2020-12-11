import React from "react";
import styles from "styles/windowMain/Answer.css";

const Answer = () => {
  return (
    <div className={styles.review_answer}>
      <a href="#" className={styles.review_answer__do}>
        <span>Ответить</span>
        <img src="http://localhost:4000/static/answers.svg" alt="Ответить" />
      </a>
      <div className={styles.review_answer__mark}>
        <a href="#" className={styles.like}>
          <img src="http://localhost:4000/static/like-review.svg" alt="5" />
          <span>5</span>
        </a>
        <a href="#" className={styles.dislike}>
          <img src="http://localhost:4000/static/dislike-review.svg" alt="0" />
          <span>0</span>
        </a>
      </div>
    </div>
  );
};

export default Answer;
