import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "styles/versionSix/Carousel.css";

const Carousel = () => {
  return (
    <OwlCarousel items={1} loop nav dots={false}>
      <img src="http://marsip01.tech01.net.in/mpv/img/video.png" alt="" />
      <img src="http://marsip01.tech01.net.in/mpv/img/video.png" alt="" />
      <img src="http://marsip01.tech01.net.in/mpv/img/video.png" alt="" />
    </OwlCarousel>
  );
};

export default Carousel;
