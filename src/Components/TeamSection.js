import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import useResponsive from "../hooks/useResponsive";
const TEAMSECTION = [
  {
    id: 1,
    img: '/assets/images/Man1.png',
    heading: 'Peter Parker',
    text: 'Land Seller',
    icon: '/assets/images/SocialMedia.png',
  },
  {
    id: 2,
    img: '/assets/images/Man2.png',
    heading: 'Elena Gilberts',
    text: 'Land Seller',
    icon: '/assets/images/SocialMedia.png',
  },
  {
    id: 3,
    img: '/assets/images/Man3.png',
    heading: 'Peter Parker',
    text: 'Land Seller',
    icon: '/assets/images/SocialMedia.png',
  },
  {
    id: 4,
    img: '/assets/images/Man4.png',
    heading: 'Peter Parker',
    text: 'Land Seller',
    icon: '/assets/images/SocialMedia.png',
  },
]

function TeamSection() {
  const { md } = useResponsive()
  const [isHover, setIsHover] = useState()
  console.log("🚀 ~ TeamSection ~ isHover:", isHover)

  return (
    <div className=" bg-grey-1500 pb-0 md:pb-[40px]  px-[16px] md:px-0  pt-[60px] md:pt-[100px] ">
      <div className="flex justify-center">
        <div className=" border border-l-2  border-black-700   h-[25px]" />
        <p className="font-normal  leading-[28px] md:leaing-[38px] text-14 md:text-20 px-[10px] font-PlusJakartaSans">
          <span className="text-blue-400">06</span>{" "}
          <span className="text-black-700">EXPERTS</span>
        </p>
        <div className=" border border-r-2  border-black-700  h-[24px]" />
      </div>
      <p className="text-center mt-[16px]  font-Montserrat font-semibold text-[25px] md:text-48 leading-[31px] md:leading-[58px]">
        Our Property Team
      </p>
      <div className="mt-[24px] md:mt-[144px] flex justify-center max-w-[1440px] mx-auto w-full">

        {md && TEAMSECTION?.map((items, index) => {
          return (
            <div className=" bg-grey-1300  hover:bg-blue-400 hover:text-white  max-w-[306px] w-full mx-auto"
              key={`${items.id}____${index}`}
              onMouseEnter={() => setIsHover(items.id)}
              onMouseLeave={() => setIsHover(null)} >
              <img src={items.img} alt="" />
              <div className="py-[23px] px-[21px]  rounded-b-[4px]">
                <p className=" text-23 font-semibold font-PlusJakartaSans">{items.heading}</p>
                <div className="flex justify-between">
                  <p className={`text-18 font-normal font-PlusJakartaSans ${isHover === items.id ? 'text-white' : 'text-blue-400'}`}>{items.text} </p>
                  <div>
                    <img src={items.icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Swiper navigation={false} slidesPerView={1} spaceBetween={20} modules={[Navigation]} className="mySwiper" >
          {!md && TEAMSECTION?.map((items, index) => {
            return (
              <SwiperSlide key={`${items.id}____${index}`}
                onMouseEnter={() => setIsHover(items.id)}
                onMouseLeave={() => setIsHover(null)}
                className="  ">
                <div className="max-w-[309px] bg-grey-1300 mx-auto hover:bg-blue-400 hover:text-white">

                  <img src={items.img} alt="" />
                  <div className="py-[23px] px-[21px] rounded-b-[4px]">
                    <p className=" text-23 font-semibold font-PlusJakartaSans">{items.heading}</p>
                    <div className="flex justify-between">
                      <p className={`text-18 font-normal font-PlusJakartaSans ${isHover === items.id ? 'text-white' : 'text-blue-400'}`}>{items.text} </p>
                      <div>
                        <img src={items.icon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        </Swiper>
      </div>
    </div>
  );
}

export default TeamSection;
