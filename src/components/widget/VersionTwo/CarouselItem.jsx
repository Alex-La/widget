import React from "react";

const CarouselItem = () => {
  return (
    <div className="review-shop__item">
      <div className="item-top">
        <img src="http://marsip01.tech01.net.in/mpv/img/review1.png" alt="" />
      </div>
      <div className="review-open__header header-review">
        <div className="header-review__person">
          <img
            className="person-img"
            src="http://marsip01.tech01.net.in/mpv/img/person.png"
            alt="Артемий Лебедев"
          />
          <div className="person-name">
            <h5>Артемий Лебедев</h5>
            <p>Россия, Волгоград</p>
          </div>
        </div>
        <div className="header-review__rating rating-header">
          <div className="rating-header__stars">
            <img
              src="http://marsip01.tech01.net.in/mpv/img/rating-stars.svg"
              alt="star"
            />
            <img
              src="http://marsip01.tech01.net.in/mpv/img/rating-stars.svg"
              alt="star"
            />
            <img
              src="http://marsip01.tech01.net.in/mpv/img/rating-stars.svg"
              alt="star"
            />
            <img
              src="http://marsip01.tech01.net.in/mpv/img/rating-stars.svg"
              alt="star"
            />
            <img
              src="http://marsip01.tech01.net.in/mpv/img/rating-starsg.svg"
              alt="star"
            />
          </div>
          <span>3 месяца назад</span>
        </div>
        <p className="full-review">
          Это мой первый компьютер семейства Mac. Поскольку сам работаю в сфере
          ИТ, и всю жизнь работал на Windows, решил для себя попробовать что-то
          новое, поизучать операционную систему MacOS. Поначалу было непривычно,
          пришлось привыкать. Через какое-то время начал понимать, что в MacOS
          работать одно удовольствие.
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
