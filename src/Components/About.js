import React, { useState } from "react";

function About() {
  const [isBuy, setIsBuy] = useState("rent");

  return (
    <div className="pt-[95px]  max-w-[1296px] mx-auto w-full px-[16px]">
      <div className="max-w-[899px] mx-auto w-full hidden md:block">
        <div>
          <div className="w-[428px] mx-auto  p-[6px] flex gap-[9px] h-[76px] items-center rounded-full border border-grey-1300 ">
            <button
              onClick={() => setIsBuy("rent")}
              className={`w-[203px] px-[77px] py-[20px] text-center text-grey-1200 rounded-full  text-20 font-Montserrat font-semibold leading-[24px] ${
                isBuy === "rent"
                  ? "text-white bg-blue-400"
                  : "text-grey-1200 bg-white"
              }`}
            >
              Rent
            </button>
            <button
              onClick={() => setIsBuy("buy")}
              className={`w-[203px] px-[77px] py-[20px] text-center rounded-full text-20 font-Montserrat font-semibold leading-[24px] ${
                isBuy === "buy"
                  ? "text-white bg-blue-400"
                  : "text-grey-1200 bg-white"
              }`}
            >
              Buy
            </button>
          </div>
          <div className="mt-[24px] p-[16px] bg-white shadow sdadow-lg   rounded-[8px] border border-grey-1300 flex gap-[16px]">
            <input
              type="text"
              placeholder="Enter key Word..."
              className="text-grey-300 outline-none font-Montserrat rounded-[8px] border border-grey-1300  font-normal text-16 leading-[19px] py-[15px] w-[200px] pl-[16px]"
            />
            <div className=" pl-[24px] pr-[21px] py-[15px] rounded-md border border-grey-1300  w-[180px]">
              <select className="w-full text-grey-300 outline-none font-Montserrat  font-normal text-16">
                <option value="user">Property Type</option>
                <option value="user">Home</option>
                <option value="user">Home</option>
                <option value="user">Home</option>
                <option value="user">Home</option>
              </select>
            </div>
            <div className=" rounded-[8px] border py-[15px] pr-[21px] pl-[24px] border-grey-1300  w-[141px]">
              <select className="w-full text-grey-300 outline-none font-Montserrat  font-normal text-16">
                <option value="user">Location</option>
                <option value="user">Doloremque quia solu</option>
                <option value="user">Doloremque quia solu</option>
                <option value="user">Doloremque quia solu</option>
              </select>
            </div>
            <div className=" rounded-[8px] border border-grey-1300   pr-[23px] py-[15px] pl-[24px] w-[111px]">
              <select className="text-grey-300 font-Montserrat outline-none  w-full font-normal text-16 ">
                <option value="user">Price</option>
                <option value="user">432</option>
                <option value="user">300</option>
                <option value="user">212</option>
              </select>
            </div>
            <button className="text-white font-Montserrat text-center bg-blue-400 rounded-[8px]  border border-grey-1300  font-medium text-20 leading-[24px] py-[15px] w-[171px] ">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className=" flex md:hidden px-[16px] max-w-[382px] mx-auto ">
        <div>
        <div className=" border border-grey-1300 rounded-lg px-[7px]">
          <p onClick={() => setIsBuy("rent")} 
          className={`py-[17px] text-center text-17 border border-grey-1300 rounded-lg font-Montserrat font-semibold ${
            isBuy === "rent" ? "text-white bg-blue-400" :"text-grey-1200 bg-white"
          }`}>
            Rent
          </p>
          <p  onClick={() => setIsBuy("buy")} className={`py-[17px] text-center mt-[7px] text-17 border border-grey-1300 rounded-lg font-Montserrat font-semibold
           ${ isBuy ===  "buy" ? " text-white bg-blue-400" :" text-grey-1200 bg-white"
            } `}
             >
            Buy
          </p>
        </div>
        <div className="mt-[29px] px-[16px]  max-w-[382px]  ">
          <div className="px-[16px] border border-grey-1300 rounded-lg py-[13px]">
            <input type="text" placeholder="Enter Kry Word..." className="max-w-[348px] w-full pl-[13px]  outline-none  border border-grey-1300 rounded-lg font-Montserrat font-normal p-[13px]" />
            <div className=" px-[20px] py-[13px] rounded-md border mt-[13px] border-grey-1300  max-w-[348px]">
              <select className="w-full text-grey-300 outline-none bg-gray-1400 font-Montserrat  font-normal text-13">
                <option value="user">Property Type</option>
                <option value="user">Home</option>
                <option value="user">Home</option>
                <option value="user">Home</option>
                <option value="user">Home</option>
              </select>
            </div>
            <div className=" px-[20px] py-[13px] rounded-md border mt-[13px] border-grey-1300  max-w-[348px]">
              <select className="w-full text-grey-300 outline-none  bg-gray-1400 font-Montserrat  font-normal text-13">
                <option value="user">Location</option>
                <option value="user">Doloremque quia solu</option>
                <option value="user">Doloremque quia solu</option>
                <option value="user">Doloremque quia solu</option>
              </select>
            </div>
            <div className=" px-[20px] py-[13px] rounded-md border mt-[13px] border-grey-1300  max-w-[348px]">
              <select className="w-full text-grey-300 outline-none  bg-gray-1400 font-Montserrat  font-normal text-13">
                <option value="user">Price</option>
                <option value="user">432</option>
                <option value="user">300</option>
                <option value="user">212</option>
              </select>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
