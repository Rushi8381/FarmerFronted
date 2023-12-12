import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Common } from "../../../language-data/Common";
import { HomeData } from "../../../language-data/HomeData";
import HeroBannerImg from '../../../assets/HeroBanner.png'

const FarmerHeroBanner = () => {
  const lang = useSelector((state) => state.lang.lang);

  return (
    <div className="bg-theme2 w-full flex flex-col">
      <div className="flex px-10 gap-x-10 items-center justify-between w-full">
        <div className="w-2/3 mt-20 mx-auto text-center">
          <h1 className="text-4xl font-medium">
            {HomeData[lang].welcome} {" "}
            <span className="text-theme3">{Common[lang].shetkariMitra} </span>
          </h1>

          <p className="text-theme text-xl font-medium mt-5">
             {HomeData[lang].info}
          </p>

          <p className="mt-5 text-xs text-themeText2">
            {HomeData[lang].welcomeDesc}
          </p>

          <div className=" mt-10 text-center">
            <button className="px-4 py-[6px] text-[16px] border border-theme text-theme hover:bg-theme hover:text-white duration-200 ease-in-out">
              {HomeData[lang].knowMore}
            </button>
          </div>
        </div>

          {/* <img src={HeroBannerImg} alt="hero banner img" width={300} className="mt-10" /> */}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,288L40,277.3C80,267,160,245,240,234.7C320,224,400,224,480,192C560,160,640,96,720,74.7C800,53,880,75,960,96C1040,117,1120,139,1200,128C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default FarmerHeroBanner;
