import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SubHeading from "./SubHeading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCards } from "swiper/modules";

const EducationCarousel = ({ data }) => {
  return (
    <div className="mt-[60px] px-4 xs:px-3 md:px-6 bg-blue-100">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col bg-white/20 backdrop-blur-lg shadow-lg rounded-t-none rounded-2xl overflow-hidden min-w-[100%] xs:min-w-[95%] md:min-w-[90%] lg:min-w-[70%] border border-white/30">
              <div className="flex items-center justify-center p-3 xs:p-4 md:p-6 bg-gray-100/20 pb-0">
                <img
                  className="object-cover rounded-lg shadow-md w-full h-auto max-w-[300px]"
                  src={item.imgSrc}
                  alt={item.imgAlt}
                />
              </div>
              <div className="p-3 xs:p-4 md:p-6 pt-0">
                <div className="flex items-center justify-center">
                  <SubHeading isBlack={true} className="text-sm xs:text-base md:text-lg lg:text-xl font-semibold">
                    {item.heading}
                  </SubHeading>
                </div>
                <div className="mt-2 xs:mt-3 md:mt-4 flex flex-col space-y-1 text-xs xs:text-sm md:text-base lg:text-lg xs:space-y-1.5 md:space-y-2 text-gray-600">
                  {item.details.map((detail, index) => (
                    <p key={index} className="text-black">
                      {detail.label}:{" "}
                      <span className="font-medium">{detail.value}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EducationCarousel;
