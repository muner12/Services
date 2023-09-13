import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {
  BsChevronDown,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsSearch,
} from "react-icons/bs";

import img from '../images/dltEdit.png'
import General from "./General";
// import showGen from "./showGen";

const AutoRespond = () => {
const [showRes,setshowRes]=useState(true)
const [showGen,setshowGen]=useState(false)




const handlGenral=()=>{
    setshowRes(false)
    setshowGen(true)

}

  return (
    <div>
      {
        showRes && <div className=" w-full px-3">
        <div className="py-">
        </div>
        <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-normal gap-y-2 gap-x-4 mt-3"></div>
        <div className=" flex flex-col sm:flex-row  justify-between items-center mt-3">
          <div className="flex flex-col sm:flex-row   justify-center sm:justify-normal items-center gap-x-6">
            <div className="flex w-[80%] sm:w-44   gap-x-3  items-center ">
              <p className="text-sm ">Show:</p>
              <select className="border border-gray-700 outline-none  rounded-sm h-8 bg-transparent  w-12 px-0 text-sm">
                <option className="text-sm">25</option>
                <option>35</option>

                <option>45</option>

                <option>55</option>
              </select>
            </div>

            <div className="flex w-[80%] sm:w-full   gap-x-3">
              <label className="text-xs   sm:text-sm mt-1">
                Entries Search:
              </label>

              <div className="input-container relative">
                <input
                  type="text"
                  className="pl-10 outline-none border rounded-md p-[2px]"
                />
                <BsSearch className="h-5 w-5 absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
          <div className=" flex  w-[80%] sm:w-auto !outline-none  justify-center   sm:mt-0  sm:justify-normal gap-x-4">
            <button
              type="button"
              onClick={handlGenral}
              className="bg-[#38bf67] px-12 rounded-sm text-sm h-8 text-white"
            >
              Add
            </button>
          </div>
        </div>
        
        <div className="py-4">
          <div className="flex items-center justify-end px-1 gap-x-1"></div>
          <div className="border cursor-pointer flex flex-col   items-center  rounded-lg">
            <div className="flex text-xs sm:text-base w-full hover:bg-blue-50  ">
              <div className="w-[7%] sm:py-4 flex items-center justify-center">
                <p className=" text-xs sm:text-base   text-center font-bold  flex items-center justify-center h-full">
                No#
                </p>
              </div>
              <div className=" w-[15%] ">
                <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                    Job Catetory
                </p>
              </div>
              <div className="w-[19%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                Target Group
                                </p>
              </div>
              <div className="w-[22%] ">
                <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                Message Hours
                                </p>
              </div>
              <div className="w-[21%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                Message
                </p>
              </div>
            
              <div className="w-[16%]  ">
                <p className="text-xs sm:text-base  sm:py-2 text-center font-bold  flex items-center justify-center h-full ">
                  Action
                </p>
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[7%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
              <p>01</p>
              </div>
              <div className=" border-r w-[15%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  All
                </p>
              </div>
              <div className="w-[19%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  All
                </p>
              </div>
              <div className="w-[22%] border-r">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  All Day
                </p>
              </div>
              <div className="w-[21%] border-r">
                <p className="text-xs sm:text-sm  text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Lorem Ipsum
                </p>
              </div>
              
              <div className="w-[16%] flex items-center justify-center">
              
                <img src={img} className="w-24 h-6 object-fill "/>
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[7%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
              <p>02</p>
              </div>
              <div className=" border-r w-[15%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Submission
                </p>
              </div>
              <div className="w-[19%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Group A
                </p>
              </div>
              <div className="w-[22%] border-r">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                18:00 to 8 am
                </p>
              </div>
              <div className="w-[21%] border-r">
                <p className="text-xs sm:text-sm  text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Lorem Ipsum
                </p>
              </div>
              
              <div className="w-[16%] flex items-center justify-center">
              
                <img src={img} className="w-24 h-6 object-fill "/>
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[7%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
              <p>03</p>
              </div>
              <div className=" border-r w-[15%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                General
                </p>
              </div>
              <div className="w-[19%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  All
                </p>
              </div>
              <div className="w-[22%] border-r">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  All Day
                </p>
              </div>
              <div className="w-[21%] border-r">
                <p className="text-xs sm:text-sm  text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Lorem Ipsum
                </p>
              </div>
              
              <div className="w-[16%]  flex items-center justify-center">
              
                <img src={img} className="w-24 h-6 object-fill m-auto "/>
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[7%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
              <p>04</p>
              </div>
              <div className=" border-r w-[15%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                General
                </p>
              </div>
              <div className="w-[19%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  All
                </p>
              </div>
              <div className="w-[22%] border-r">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  All Day
                </p>
              </div>
              <div className="w-[21%] border-r">
                <p className="text-xs sm:text-sm  text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Lorem Ipsum
                </p>
              </div>
              
              <div className="w-[16%] flex items-center justify-center">
              
                <img src={img} className="w-24 h-6 object-fill "/>
              </div>
            </div>
           
          </div>
         
        </div>
      </div>
      }

      {
        showGen && <General/>
      }
    </div>
  );
};

export default AutoRespond;
