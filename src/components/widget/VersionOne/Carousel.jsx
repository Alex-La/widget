import React, { useEffect, useRef } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

const Carousel = () => {
  const owlRef = useRef(null);

  useEffect(() => {
    if (owlRef.current) {
      $(".owl-carousel").owlCarousel();
    }
  }, []);

  return (
    <div className="owl-carousel" ref={owlRef}>
      <div> Your Content </div>
      <div> Your Content </div>
      <div> Your Content </div>
      <div> Your Content </div>
      <div> Your Content </div>
      <div> Your Content </div>
      <div> Your Content </div>
    </div>
  );
};

export default Carousel;
