import React, { useState } from "react";
import {
  BsChevronDown,
  BsChevronLeft,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillSunsetFill,
  BsSearch,
} from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { IoIosArrowUp } from "react-icons/io";
import mbl from "../images/mbl.png";
import edit from "../images/edit.png";
import dlt from "../images/delete.png";
import AddContractor from "./AddContractor";
import SetOpeningHour from "./SetOpeningHour";
import { useNavigate } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const OpeningHours = () => {
  const [openingHours, setOpeningHours] = useState(true);
  const [showOPening, setshowOPening] = useState(false);

  const handleSetOpeningHours = () => {
   navigate('/setting/set-opening-hours')
  };
  const navigate = useNavigate();
  const toSetting = () => {
    navigate("/setting");
  };
  return (
    <>
      <div className="w-full">
        <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <BsChevronLeft onClick={toSetting} className="cursor-pointer text-xl" />
                <h1 className="text-3xl font-bold">Opening Hours</h1>
              </div>
            </div>
          </div>
          <div className="flex relative items-center  gap-x-8">
            <div>
              <AiOutlineExclamationCircle
                style={{ strokeWidth: "1px", transform: "scale(1.1)" }}
                className="text-3xl text-[#737475]"
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-full px-8">
          <div className=" flex flex-col sm:flex-row justify-between mt-3">
            <div className="flex flex-col sm:flex-row  justify-center sm:justify-normal items-center gap-x-6"></div>
            <div className=" flex   w-[80%] sm:w-auto  justify-center  mt-2 sm:mt-0  sm:justify-normal gap-x-4">
              <button
                type="button"
                onClick={handleSetOpeningHours}
                className="bg-[#38bf67] !outline-none px-2 rounded-sm text-sm h-7 font-semibold text-white"
              >
                Set Opening Hours
              </button>
            </div>
          </div>

          <div className="py-3">
            <div className="  border flex flex-col cursor-pointer  items-center  rounded-lg">
              <div className="flex text-xs hover:bg-blue-50 sm:text-base w-full  ">
                <div className="w-[25%] sm:py-2  flex items-center justify-center">
                  <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                    Status/user
                  </p>
                </div>
                <div className=" w-[25%] ">
                  <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                    Business Name
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Service
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Working Hours
                  </p>
                </div>
              </div>
              <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
                <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
                  <p className="text-[#737475] font-semibold">Sunday</p>
                </div>
                <div className=" w-[25%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[25%] ">
                  <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[25%] ">
                  <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
                    <img src={edit} className="w-5 h-5 object-fill" />
                    <img src={dlt} className="w-5 h-5 object-fill" />
                  </div>
                </div>
              </div>
              <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
                <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
                  <p className="text-[#737475] font-semibold">Monday</p>
                </div>
                <div className=" w-[25%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
                    10:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    06:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
                    <img src={edit} className="w-5 h-5 object-fill" />
                    <img src={dlt} className="w-5 h-5 object-fill" />
                  </div>
                </div>
              </div>
              <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
                <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
                  <p className="text-[#737475] font-semibold">Tuesday</p>
                </div>
                <div className=" w-[25%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
                    10:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    06:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
                    <img src={edit} className="w-5 h-5 object-fill" />
                    <img src={dlt} className="w-5 h-5 object-fill" />
                  </div>
                </div>
              </div>
              <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
                <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
                  <p className="text-[#737475] font-semibold">Tuesday</p>
                </div>
                <div className=" w-[25%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
                    10:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    06:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
                    <img src={edit} className="w-5 h-5 object-fill" />
                    <img src={dlt} className="w-5 h-5 object-fill" />
                  </div>
                </div>
              </div>
              <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
                <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
                  <p className="text-[#737475] font-semibold">Tuesday</p>
                </div>
                <div className=" w-[25%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
                    10:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    06:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
                    <img src={edit} className="w-5 h-5 object-fill" />
                    <img src={dlt} className="w-5 h-5 object-fill" />
                  </div>
                </div>
              </div>
              <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
                <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
                  <p className="text-[#737475] font-semibold">Tuesday</p>
                </div>
                <div className=" w-[25%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
                    10:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    06:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
                    <img src={edit} className="w-5 h-5 object-fill" />
                    <img src={dlt} className="w-5 h-5 object-fill" />
                  </div>
                </div>
              </div>
              <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
                <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
                  <p className="text-[#737475] font-semibold">Tuesday</p>
                </div>
                <div className=" w-[25%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
                    10:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    06:00
                  </p>
                </div>
                <div className="w-[25%] ">
                  <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
                    <img src={edit} className="w-5 h-5 object-fill" />
                    <img src={dlt} className="w-5 h-5 object-fill" />
                  </div>
                </div>
              </div>
            </div>
            <div>
             <div className="flex justify-between items-center py-4">
             <h1 className="text-xl font-bold text-[#737475]">Holidays</h1>
              <button type="button" className="  text-[#38bf67] text-sm font-semibold rounded-sm border-2 border-[#38bf67] px-2 py-1">Set Holidays</button>
             </div>
             <div className="  border flex flex-col cursor-pointer  items-center  rounded-lg">
              <div className="flex text-xs hover:bg-blue-50 sm:text-base w-full  ">
                <div className="w-[30%] sm:py-2  flex items-center justify-center">
                  <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
Days                 
 </p>
                </div>
                <div className=" w-[40%] ">
                  <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                 Days
                  </p>
                </div>
                <div className=" w-[30%] ">
                  
                </div>
                
                
              </div>
              <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
                <div className="w-[30%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
                  <p className="text-[#737475] font-semibold">12/2/2022</p>
                </div>
                <div className=" w-[40%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full text-[#737475] font-semibold">Saturday</p>
                </div>
                <div className="w-[30%] ">
                  <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
                    <img src={edit} className="w-5 h-5 object-fill" />
                    <img src={dlt} className="w-5 h-5 object-fill" />
                  </div>
                </div>
               
              </div>
              <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
                <div className="w-[30%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
                  <p className="text-[#737475] font-semibold">12/2/2022</p>
                </div>
                <div className=" w-[40%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full text-[#737475] font-semibold">Sunday</p>
                </div>
                <div className="w-[30%] ">
                  <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
                    <img src={edit} className="w-5 h-5 object-fill" />
                    <img src={dlt} className="w-5 h-5 object-fill" />
                  </div>
                </div>
               
              </div>
              
              
            </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default OpeningHours;
