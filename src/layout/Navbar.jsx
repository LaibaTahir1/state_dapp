import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const isHome = pathname === "/";
  const isProperty = pathname === "/BrowseProperty";
  return (
    <div
      className={` relative z-10 px-[25px] md:px-[73px]
     ${isHome
          ? "text-white"
          : "text-black-200" && isProperty
            ? "bg-gray-1400"
            : "bg-white"
        }
    `}
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex justify-between items-center">
          <div>
            <img
              className="py-3 md:pt-4"
              src="/assets/images/LogoImg.png"
              alt=""
            />
          </div>
          <div className="hidden md:flex gap-[30px]  font-Montserrat text-15 font-medium">
            <Link to={"/"}>
              {" "}
              <p className="py-4">Home</p>
            </Link>
            <Link to="/BrowseProperty">
              {" "}
              <p className="py-4">Properties</p>
            </Link>
            <div className="bg-current flex items-center">
              <select
                onChange={(e) => {
                  if (e.target.value === '/AboutUs') {
                    navigate(e.target.value)
                  }
                }
                }
                className={`py-4 outline-none  bg-none ${isProperty
                    ? "bg-gray-1400"
                    : "bg-transparent"
                  }`}
              >
                <option value={'page'}>Pages</option>
                <option value={'/AboutUs'}>
                  About us
                </option>
                <option value={'services'}>Services</option>
                <option>Procecss</option>
                <option>Who we are</option>
                <option>Our Team</option>
                <option>Blog</option>
              </select>
            </div>
            <Link to={"/AboutUs"}>
              <p className="py-4">Contact us</p>{" "}
            </Link>
            <div className=" hidden md:flex gap-1.5 py-4">
              <div>
                {" "}
                <img src="/assets/images/Man.png" alt="" />
              </div>
              <p className="font-normal">Log In/Rigester</p>
            </div>
          </div>
          <div className=" py-3 block md:hidden items-center">
            <img src="/assets/images/Menu.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
