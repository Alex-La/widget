import React, { useEffect, useState, useCallback } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "styles/versionThree/Carousel.css";

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
      items={width < 768 ? 1 : width < 1200 ? 2 : 3}
      margin={width < 1200 ? 15 : 40}
      className="review-shop"
      dots
      nav
      loop
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
