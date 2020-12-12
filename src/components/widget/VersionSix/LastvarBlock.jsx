import React from "react";
import "styles/versionSix/LastvarBlock.css";

import Carousel from "./Carousel";

const LastvarBlock = () => {
  return (
    <div className="lastvar-block">
      <div className="lastvar-left">
        <Carousel />
      </div>
      <div class="lastvar-right">
        <h3>“...Достал Windows, купил себе Mac...”</h3>
        <p>
          Это мой первый компьютер семейства Mac. Поскольку сам работаю в сфере
          ИТ, и всю жизнь работал на Windows, решил для себя попробовать что-то
          новое, поизучать операционную систему MacOS. Поначалу было непривычно,
          пришлось привыкать. Через какое-то время начал понимать, что в MacOS
          работать одно удовольствие.
        </p>
        <span>Артемий Лебедев, 45 лет, Москва</span>
      </div>
    </div>
  );
};

export default LastvarBlock;
