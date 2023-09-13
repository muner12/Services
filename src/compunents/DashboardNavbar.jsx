import React from "react";
import dashboard from "../images/dashbaord.png";
import { BsChevronDown, BsThreeDotsVertical } from "react-icons/bs";
import notification from "../images/notifi.png";
import threedot from "../images/threedot.png";
import { useNavigate } from "react-router-dom";

const DashBoardNavbar = () => {
  const navigate=useNavigate()
  const toMap=()=>{
    navigate('/map')

  }
  return (
    <div className="bg-green-100 px-10 flex items-center justify-between py-4">
      <div className="flex items-center">
        <div>
          <div className="flex items-center gap-x-4">
            <div className="w-6 h-6">
              <img src={dashboard} />
            </div>

            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <span className="text-center text-xl font-semibold ml-[20%] text-[#737475]  w-full">Over view</span>
        </div>
      </div>
      <div className="flex gap-x-8">
        <button onClick={toMap}
          type="button"
          className="bg-[#38bf67] text-white rounded-sm text-sm font-semibold px-3 py-1"
        >
          Map View 
        </button>
        <button
          type="button"
          className="bg-[#407c1e] text-white rounded-sm text-sm font-semibold px-3 py-1 flex items-center gap-x-3"
        >
          Global <BsChevronDown className="text-md font-bold" />
        </button>
        <div className="w-6 h-6">
          <img src={notification} className="w-full h-full object-fill" />
        </div>
        <div className="w-2 h-5">
          <img src={threedot} className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
