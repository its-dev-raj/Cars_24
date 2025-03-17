import { Search } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel, Keyboard, FreeMode, Navigation } from "swiper/modules";

const Ads = () => {
  const adsData = [
    "https://media.cars24.com/india/cms/prod/banners/root/2025/01/25/883276fc-7414-44a4-be30-fbcb7973093a-discount-desk.webp?w=130&dpr=3&format=webp&optimize=low&quality=10",
    "https://media.cars24.com/india/cms/prod/banners/root/2025/01/25/883276fc-7414-44a4-be30-fbcb7973093a-discount-desk.webp?w=130&dpr=3&format=webp&optimize=low&quality=10",
    "https://media.cars24.com/india/cms/prod/banners/root/2025/01/25/b934ac15-b910-492f-bae8-a6924bbc9732-exchnage-banner-desktop.webp?w=130&dpr=3&format=webp&optimize=low&quality=10",
    "https://media.cars24.com/india/cms/prod/banners/root/2025/01/25/b934ac15-b910-492f-bae8-a6924bbc9732-exchnage-banner-desktop.webp?w=130&dpr=3&format=webp&optimize=low&quality=10",
    "https://media.cars24.com/india/cms/prod/banners/root/2025/01/25/b934ac15-b910-492f-bae8-a6924bbc9732-exchnage-banner-desktop.webp?w=130&dpr=3&format=webp&optimize=low&quality=10",
  ];

  return (
    <>
      <div className="lg:px-0 lg:mt-0 mt-8 px-4">
        <div className="relative bg-[#FFFFFF]   shadow rounded-xl ">
          <Search className="absolute size-4 lg:size-5  left-6 top-4 lg:left-4 text-[#294760]" />
          <input
            className="w-full text-xs lg:text-sm font-semibold p-4 rounded-xl  px-12"
            type="text"
            placeholder="Search for your favourite cars Previous"
          />
        </div>
      </div>
      <div className="lg:flex  px-4 lg:px-0 py-10 lg:py-12 select-none">
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={3}
          freeMode={true}
          navigation={true}
          modules={[Mousewheel, Keyboard, FreeMode, Navigation]}
          className="mySwiper"
        >
          {adsData.map((item, idx) => (
            <div className=" ">
              <SwiperSlide>
                <img className="" src={item} alt="" />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Ads;
