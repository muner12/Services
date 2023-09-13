import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLegendToggle } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const MapView = () => {
  let navigate=useNavigate();
  const goBack=()=>{
    navigate("/")
  }
  return (
    <div className="w-full">
      <div className="bg-green-100 w-full  px-10 flex items-center justify-between py-12">
        <div className="flex gap-x-4 items-center">
          <div>
            <div className="flex items-center gap-x-4">
              <BsChevronLeft className="cursor-pointer text-xl" onClick={goBack} />
              <h1 className="text-3xl font-bold">Map View</h1>
            </div>
          </div>
        </div>
        <div className="flex  w-64 items-center gap-x-[2px] ">
          <MdOutlineLegendToggle className="text-2xl" />
          <div className="bg-gray-300 h-4 w-[2px]" />
          <div className="flex items-center gap-x-[1px]  ">
            <CiSearch className="text-xl text-black" />
            <input
              placeholder="Search for properties contractor"
              type="text"
              style={{ borderBottom: "1px solid gray" }}
              className="outline-none text-sm w-48 border-green-500 focus:border-green-700 bg-green-100"
            />{" "}
          </div>
          <div className=""></div>
        </div>
      </div>
      <div classNam=" shadow-sm  h-[100%]">
      <iframe
      
src="https://maps.google.com/maps?q=peshawar&amp;t=k&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"        className="w-full h-full"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
};

export default MapView;
