import React, { useState } from "react";

function TeamSection() {

  const [ isHover, setIsHover ] = useState(1)

  return (
    <div className=" bg-grey-1500 pb-0 md:pb-[40px]  px-[16px] md:px-0  pt-[60px] md:pt-[100px]">
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[23px]">
        <div onMouseEnter={()=>setIsHover(1)}
        onMouseLeave={()=>setIsHover(null)}
         className=" bg-grey-1300  hover:bg-blue-400 hover:text-white">
            <img src="/assets/images/Man1.png" alt="" />
            <div className="py-[23px] px-[21px]  rounded-b-[4px]">
              <p className=" text-23 font-semibold font-PlusJakartaSans">
                Elena Gilberts
              </p>
              <div className="flex justify-between">
                <p className={`text-18 font-normal font-PlusJakartaSans ${isHover === 1 ? 'text-white':'text-blue-400'}`}>
                  Land Seller
                </p>
                <div>
                  {" "}
                  <img src="/assets/images/SocialMedia.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-grey-1300  hover:bg-blue-400 hover:text-white">
            <img src="/assets/images/Man2.png" alt="" />
            <div className="py-[23px] px-[21px]  rounded-b-[4px]">
              <p className=" text-23 font-semibold font-PlusJakartaSans">
                Elena Gilberts
              </p>
              <div className="flex justify-between">
                <p className=" text-18 font-normal font-PlusJakartaSans ">
                  Land Seller
                </p>
                <div>
                  {" "}
                  <img src="/assets/images/SocialMedia.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-grey-1300  hover:bg-blue-400 hover:text-white">
            <img src="/assets/images/Man3.png" alt="" />
            <div className="py-[23px] px-[21px]  rounded-b-[4px]">
              <p className=" text-23 font-semibold font-PlusJakartaSans">
                Elena Gilberts
              </p>
              <div className="flex justify-between">
                <p className=" text-18 font-normal font-PlusJakartaSans text-blue-400 ">
                  Land Seller
                </p>
                <div>
                  {" "}
                  <img src="/assets/images/SocialMedia.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-grey-1300  hover:bg-blue-400 hover:text-white">
            <img src="/assets/images/Man4.png" alt="" />
            <div className="py-[23px] px-[21px]  rounded-b-[4px]">
              <p className=" text-23 font-semibold font-PlusJakartaSans">
                Elena Gilberts
              </p>
              <div className="flex justify-between">
                <p className=" text-18 font-normal font-PlusJakartaSans   text-blue-400 ">
                  Land Seller
                </p>
                <div>
                  {" "}
                  <img src="/assets/images/SocialMedia.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
