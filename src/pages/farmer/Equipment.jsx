import React, { useEffect, useState } from "react";
import { get_request } from "../../components/utils/ApiRequests";
import API_URL from "../../components/utils/ApiRequests";
import { message } from "antd";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import BookModal from "./BookModal";
import { useSelector } from "react-redux";
import { FarmerData } from "../../language-data/FarmerData";

const Equipment = () => {
  const [data, setData] = useState([]);
  const lang = useSelector((state) => state.lang.lang);

  const fetchData = async () => {
    try {
      const res = await get_request(`${API_URL}/partner/get-equipments/all`);
      console.log(res);
      if (res) {
        const data = res.filter((item) => item.type === "Equipment");
        setData(data);
        return;
      } else {
        message.error("Something went wrong!");
        return;
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong!");
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="pb-10">
        <div className="bg-theme2 w-full flex flex-col">
          <div className="flex px-10 gap-x-10 items-center justify-between w-full">
            <div className="w-2/3 mt-20 mx-auto text-center">
              {/* <h1 className="text-4xl font-medium">
                {FarmerData[lang].bookEquipment}{" "}
              </h1> */}

              <p className="text-theme text-2xl font-medium mt-5">
                {FarmerData[lang].info}
              </p>

              <p className="mt-5 text-xs text-themeText2">
                {FarmerData[lang].vehicleWelcomeDesc}
              </p>

              <div className=" mt-10 text-center">
                <Link
                  to={"/farmer/vehicle"}
                  className="px-4 py-[6px] text-[16px] border border-theme text-theme hover:bg-theme hover:text-white duration-200 ease-in-out"
                >
                  {FarmerData[lang].exploreMore}
                </Link>
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

      <h1 className="text-3xl font-semibold text-center mb-10">
      {FarmerData[lang].book} <span className="text-theme3">{FarmerData[lang].equipment}</span>
      </h1>
      <div className="flex flex-wrap gap-x-16 gap-y-16 px-10">
        {data.map((item, index) => {
          const star = (index = Math.floor(Math.random() * 4) + 2);
          return (
            <div
              key={item._id}
              className="cursor-pointer rounded-md shadow-md bg-theme text-white w-[20%] h-[320px]"
            >
              <div className="w-full h-[150px] p-1 relative z-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full object-cover h-full overflow-hidden rounded-tl-md rounded-tr-md z-0"
                />
                <div className="absolute top-5 right-5 bg-theme3 rounded-full w-9 h-9 flex items-center justify-center z-0">
                  <p className="text-theme font-semibold flex items-center justify-center gap-x-[2px]">
                    <span>{star}</span>
                    <span>
                      <FaStar />
                    </span>
                  </p>
                </div>
              </div>
              <div className="px-3 pb-2 h-1/2 flex flex-col justify-between">
                <h1 className="text-xl font-semibold">
                  {item.name.length > 13
                    ? `${item.name.toUpperCase().substring(0, 13)}...`
                    : item.name.toUpperCase()}
                </h1>
                <p className="text-sm mb-3 italic">
                  {item.desc.length > 25
                    ? `${item.desc.substring(0, 25)}...`
                    : item.desc}
                </p>
                <p className="text-sm">₹ {item.price}.00/day</p>

                <div className="text-center mt-3">
                  <BookModal text={"Book Now"} item={item}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Equipment;
 