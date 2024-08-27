import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SubHeading from "./SubHeading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCards } from "swiper/modules";

export default function App() {
  return (
    <div className="mt-[60px] px-4 xs:px-3 md:px-6 bg-blue-100">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col bg-white/20 backdrop-blur-lg shadow-lg rounded-t-none rounded-2xl overflow-hidden min-w-[100%] xs:min-w-[95%] md:min-w-[90%] lg:min-w-[70%] border border-white/30">
            <div className="flex items-center justify-center p-3 xs:p-4 md:p-6 bg-gray-100/20 pb-0">
              <img
                className="object-cover rounded-lg shadow-md w-full h-auto max-w-[300px]"
                src="/education/mris.png"
                alt="Manav Rachna International School"
              />
            </div>
            <div className="p-3 xs:p-4 md:p-6 pt-0">
              <div className="flex items-center justify-center">
                <SubHeading className="text-sm xs:text-base md:text-lg lg:text-xl font-semibold text-gray-800">
                  GURUGRAM | 2014-2021
                </SubHeading>
              </div>
              <div className="mt-2 xs:mt-3 md:mt-4 flex flex-col space-y-1 text-xs xs:text-sm md:text-base lg:text-lg xs:space-y-1.5 md:space-y-2 text-gray-600">
                <p>
                  Branch: <span className="font-medium">Science</span>
                </p>
                <p>
                  Percentage: <span className="font-medium">88.2%</span> (Class 10)
                </p>
                <p>
                  Percentage: <span className="font-medium">83.6%</span> (Class 12)
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col bg-white/20 backdrop-blur-lg shadow-lg rounded-t-none rounded-2xl overflow-hidden min-w-[100%] xs:min-w-[95%] md:min-w-[90%] lg:min-w-[70%] border border-white/30">
            <div className="flex items-center justify-center p-3 xs:p-4 md:p-6 bg-gray-100/20 pb-0">
              <img
                className="object-cover rounded-lg shadow-md w-full h-auto max-w-[300px]"
                src="/education/bennett.png"
                alt="Bennett University"
              />
            </div>
            <div className="p-3 xs:p-4 md:p-6 pt-0">
              <div className="flex items-center justify-center">
                <SubHeading className="text-sm md:text-lg lg:text-xl font-semibold text-gray-800">
                  GREATER NOIDA | 2021-2025
                </SubHeading>
              </div>
              <div className="mt-2 xs:mt-3 md:mt-4 flex flex-col space-y-1 text-xs xs:text-sm md:text-base lg:text-lg xs:space-y-1.5 md:space-y-2 text-gray-600">
                <p>
                  Branch: <span className="font-medium">Computer Science</span>
                </p>
                <p>
                  Cgpa: <span className="font-medium">9.4/10</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
