import React, { useEffect, useState, useCallback } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "styles/versionThree/Carousel.css";

const Carousel = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const setInnerWidth = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setInnerWidth);
    return () => window.removeEventListener("resize", setInnerWidth);
  }, [setInnerWidth]);

  return (
    <OwlCarousel
      items={width < 768 ? 1 : width < 1200 ? 2 : 3}
      margin={width < 1200 ? 15 : 40}
      className="review-shop"
      dots
      nav
      loop
    >
      <div className="review-shop__item">
        <div className="item-top">
          <img src="http://marsip01.tech01.net.in/mpv/img/mo.png" alt="" />
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
            Это мой первый компьютер семейства Mac. Поскольку сам работаю в
            сфере ИТ, и всю жизнь работал на Windows, решил для себя попробовать
            что-то новое, поизучать операционную систему MacOS. Поначалу было
            непривычно, пришлось привыкать. Через какое-то время начал понимать,
            что в MacOS работать одно удовольствие.
          </p>
        </div>
      </div>

      <div className="review-shop__item">
        <div className="item-top">
          <img src="http://marsip01.tech01.net.in/mpv/img/mo.png" alt="" />
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
            Это мой первый компьютер семейства Mac. Поскольку сам работаю в
            сфере ИТ, и всю жизнь работал на Windows, решил для себя попробовать
            что-то новое, поизучать операционную систему MacOS. Поначалу было
            непривычно, пришлось привыкать. Через какое-то время начал понимать,
            что в MacOS работать одно удовольствие.
          </p>
        </div>
      </div>
      <div className="review-shop__item">
        <div className="item-top">
          <img src="http://marsip01.tech01.net.in/mpv/img/mo.png" alt="" />
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
            Это мой первый компьютер семейства Mac. Поскольку сам работаю в
            сфере ИТ, и всю жизнь работал на Windows, решил для себя попробовать
            что-то новое, поизучать операционную систему MacOS. Поначалу было
            непривычно, пришлось привыкать. Через какое-то время начал понимать,
            что в MacOS работать одно удовольствие.
          </p>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default Carousel;
