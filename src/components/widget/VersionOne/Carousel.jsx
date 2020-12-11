import React, { useEffect, useState, useCallback } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "styles/versionOne/Carousel.css";

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
      items={width < 500 ? 1 : width < 985 ? 2 : 3}
      width={320}
      loop
      nav
      dots
      center
    >
      {Array(3)
        .fill()
        .map(() => (
          <CarouselItem />
        ))}
    </OwlCarousel>
  );
};

export default Carousel;
