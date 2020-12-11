import React from "react";

const CarouselItem = () => {
  return (
    <div className="viget-slide">
      <img
        className="viget-slide__person"
        src="http://marsip01.tech01.net.in/mpv/img/vig-pers.png"
        alt=""
      />
      <div className="viget-slide__block">
        <p>
          Это мой первый компьютер семейства Mac. Поскольку сам работаю в сфере
          ИТ, и всю жизнь работал на Windows, решил для себя попробовать что-то
          новое, поизучать операционную систему MacOS. Поначалу было непривычно,
          пришлось привыкать. Через какое-то время начал понимать, что в MacOS
          работать одно удовольствие
        </p>
      </div>
      <p className="viget-slide__name">Лариса Иванова, г. Москва </p>
      <span className="viget-slide__fitnes">
        Фитнес-тренер с 5-летним стажем{" "}
      </span>
    </div>
  );
};

export default CarouselItem;
