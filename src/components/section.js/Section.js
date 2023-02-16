import React from "react";
import Slider from "react-slick";
import Vertor from "../../img/Rectangle 13.svg";
function Section() {

  const settings = {
    dots: true,
    infinite: true, 
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="conatiner">
      <div className="box">
        <Slider {...settings}>
          <img className="vec" src={Vertor} />
          <img className="vec" src={Vertor} />
          <img className="vec" src={Vertor} />
          <img className="vec" src={Vertor} />
          <img className="vec" src={Vertor} />
        </Slider>
      </div>
    </div>
  );
}

export default Section;
