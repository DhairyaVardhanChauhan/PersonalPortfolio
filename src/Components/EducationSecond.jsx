import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const EducationSecond = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="w-full max-w-4xl mx-auto mt-[60px]">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="center-content flex items-center justify-center flex-col"
          >
            <img
              className="w-56 h-32 mb-4 object-contain"
              src={item.imgSrc}
              alt={item.imgAlt}
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {item.heading}
            </h2>
            <div className="flex items-start justify-start font-popins">
              <ul className="text-left text-gray-600 space-y-1">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex pb-2">
                    <span className="font-bold">{detail.label}:&nbsp;</span>
                    <span>{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EducationSecond;
