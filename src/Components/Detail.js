import React from "react";

function Detail() {
  return (
    <div className="max-w-[1296px] mx-auto w-full">
      <h2 className="mt-[42px] mb-[19px] font-semibold font-Montserrat text-50">
        DETAILS{" "}
      </h2>
      <div className="mt-[47px] px-[36px] flex">
        <div className="flex gap-[11px] items-center">
            <img src="/assets/images/detail1.png" alt="" />
            <p className="font-Poppins font-normal text-25 pr-[119px]">Bedrooms</p>
            <div className="border border-r-2  border-gray-400  h-[59px]"></div>
        </div>
        <div className="flex gap-[11px] items-center ">
            <img  className="pl-[62px]" src="/assets/images/detail2.png" alt="" />
            <p className="font-Poppins font-normal text-25 pr-[119px]">Bathrooms</p>
            <div className="border border-r-2  border-gray-400  h-[59px]"></div>
        </div>
        <div className="flex gap-[11px] items-center">
            <img className="pl-[62px]" src="/assets/images/detail3.png" alt="" />
            <p className="font-Poppins font-medium  text-22 pr-[119px]">10000 sqft</p>
            <div className="border border-r-2  border-gray-400  h-[59px]"></div>
        </div>
        <div className="flex gap-[11px] items-center ">
            <img className="pl-[62px]" src="/assets/images/detail4.png" alt="" />
            <p className="font-Poppins font-bold text-23 ">2007</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
