import React, { useState, useCallback, useEffect } from "react";
import "styles/versionTwo/Carousel.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import CarouselItem from "./CarouselItem";

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
      className="review-shop"
      items={width < 768 ? 1 : width < 1200 ? 2 : 3}
      loop
      dots
      nav={false}
    >
      {Array(6)
        .fill()
        .map(() => (
          <CarouselItem />
        ))}
    </OwlCarousel>
  );
};

export default Carousel;
