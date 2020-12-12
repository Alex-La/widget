import React, { useState } from "react";
import "styles/versionFour/Review.css";

const Review = () => {
  const [open, isOpen] = useState(false);

  return (
    <div className="btob-block">
      <div className="block-wrap">
        <div className="btob-block__left">
          <img
            className="paper"
            src="http://marsip01.tech01.net.in/mpv/img/paper.png"
            alt=""
          />
          <a style={{ cursor: "pointer" }} onClick={() => isOpen(true)}>
            Открыть благодарственное письмо{" "}
            <img
              src="http://marsip01.tech01.net.in/mpv/img/file-prev.svg"
              alt=""
            />
          </a>
        </div>
        <div className="btob-block__right">
          <div className="right-btob">
            <img
              src="http://marsip01.tech01.net.in/mpv/img/circle1.png"
              alt=""
            />
            <div className="right-btob__text">
              <h5>ООО “Рога и копыта”</h5>
              <p>
                Крупнейший производитель digital-продукта в апельсиновом
                сегменте
              </p>
            </div>
          </div>
          <ul>
            <li>
              <b>Проект:</b> Крупнейший производитель digital-продукта в
              апельсиновом сегменте
            </li>
            <li>
              <b>Задача:</b> Крупнейший производитель digital-продукта в
              апельсиновом сегменте
            </li>
            <li>
              <b>Результат:</b> Крупнейший производитель digital-продукта в
              апельсиновом сегменте
            </li>
          </ul>
        </div>
      </div>
      <a
        style={{ cursor: "pointer" }}
        className="btob-read"
        onClick={() => isOpen(true)}
      >
        Читать полностью
      </a>
      {open && (
        <>
          <h6>Благодарственное письмо</h6>
          <p className="btov-block__letter">
            Абсолютно доволен инструментом белмаш качество класс работает
            отменно не хватает еще шлифовальной машинки вашего производства и
            тогда буду весь в белмаше))) доставка быстрая как я и просил. думаю
            что инструмент проработает долго, но гарантия есть если что сразу
            обращусь спасибо)) Абсолютно доволен инструментом белмаш качество
            класс работает отменно не хватает еще шлифовальной машинки вашего
            производства и тогда буду весь в белмаше))) доставка быстрая как я и
            просил. думаю что инструмент проработает долго, но гарантия есть
            если что сразу обращусь спасибо)) Абсолютно доволен инструментом
            белмаш качество класс работает отменно не хватает еще шлифовальной
            машинки вашего производства и тогда буду весь в белмаше))) доставка
            быстрая как я и просил. думаю что инструмент проработает долго, но
            гарантия есть если что сразу обращусь спасибо)) Абсолютно доволен
            инструментом белмаш качество класс работает отменно не хватает еще
            шлифовальной машинки вашего производства и тогда буду весь в
            белмаше))) доставка быстрая как я и просил. думаю что инструмент
            проработает долго, но гарантия есть если что сразу обращусь
            спасибо)) Абсолютно доволен инструментом белмаш качество класс
            работает отменно не хватает еще шлифовальной машинки вашего
            производства и тогда буду весь в белмаше))) доставка быстрая как я и
            просил. думаю что инструмент проработает долго, но гарантия есть
            если что сразу обращусь спасибо)) Абсолютно доволен инструментом
            белмаш качество класс работает отменно не хватает еще шлифовальной
            машинки вашего производства и тогда буду весь в белмаше))) доставка
            быстрая как я и просил. думаю что инструмент проработает долго, но
            гарантия есть если что сразу обращусь спасибо))
          </p>
        </>
      )}
    </div>
  );
};

export default Review;
