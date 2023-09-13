import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {
  BsChevronDown,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsSearch,
} from "react-icons/bs";

import img from "../images/dltEdit.png";
import SelectCategory from "./SelectCategory";
import SelectAction from "./SelectAction";

const JobNotification = () => {
  const [jobNot, setjobNot] = useState(true);
  const [select, setselect] = useState(false);

  const handleJobNotification = () => {
    setjobNot(false);
    setselect(true);
  };

  return (
    <div>
      {
        jobNot && 
        <div className=" w-full px-3">
        <div className="py-"></div>
        <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-normal gap-y-2 gap-x-4 mt-3"></div>
        <div className=" flex flex-col sm:flex-row  justify-between items-center mt-3">
          <div className="flex flex-col sm:flex-row   justify-center sm:justify-normal items-center gap-x-6"></div>
          <div className=" flex  w-[80%] sm:w-auto !outline-none  justify-center   sm:mt-0  sm:justify-normal gap-x-4">
            <button
              type="button"
              onClick={handleJobNotification}
              className="bg-[#38bf67] px-3 rounded-sm text-sm h-8 text-white"
            >
              Add Job Notification
            </button>
          </div>
        </div>

        <div className="py-4">
          <div className="flex items-center justify-end px-1 gap-x-1"></div>
          <div className="border cursor-pointer flex flex-col   items-center  rounded-lg">
            <div className="flex text-xs sm:text-base w-full hover:bg-blue-50  ">
              <div className="w-[7%] sm:py-5 flex items-center justify-center">
                <p className=" text-xs sm:text-base   text-center font-bold  flex items-center justify-center h-full">
                  No#
                </p>
              </div>
              <div className=" w-[8%] ">
                <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                  Recipient
                </p>
              </div>
              <div className="w-[8%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                  Groups
                </p>
              </div>
              <div className="w-[14%] ">
                <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                  Delivery Method
                </p>
              </div>
              <div className="w-[26%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                  Select Action
                </p>
              </div>
              <div className="w-[21%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                  Messsage
                </p>
              </div>
              <div className="w-[16%] ">
                <p className="text-xs sm:text-base  sm:py-2 text-center font-bold  flex items-center justify-center h-full ">
                  Action
                </p>
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[7%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
                <p>01</p>
              </div>
              <div className=" border-r w-[8%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  All
                </p>
              </div>
              <div className="w-[8%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  All
                </p>
              </div>
              <div className="w-[14%] border-r">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Email
                </p>
              </div>
              <div className="w-[26%] border-r">
                <p className="text-xs sm:text-sm  text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Notify Landlord on New Jobs
                </p>
              </div>
              <div className="w-[21%] border-r  ">
                <p className="text-xs  h-full sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="w-[16%] flex items-center justify-center">
                {/* <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                  Select <BsChevronDown className="mt-[3px]" />
                </p> */}
                <img src={img} className="w-24 h-6 object-fill " />
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[7%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
                <p>02</p>
              </div>
              <div className=" border-r w-[8%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Primary
                </p>
              </div>
              <div className="w-[8%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Group A
                </p>
              </div>
              <div className="w-[14%] border-r">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Text
                </p>
              </div>
              <div className="w-[26%] border-r">
                <p className="text-xs sm:text-sm  text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Send Job closure report to Landlord{" "}
                </p>
              </div>
              <div className="w-[21%] border-r  ">
                <p className="text-xs  h-full sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="w-[16%] flex items-center justify-center">
                {/* <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                  Select <BsChevronDown className="mt-[3px]" />
                </p> */}
                <img src={img} className="w-24 h-6 object-fill " />
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[7%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
                <p>03</p>
              </div>
              <div className=" border-r w-[8%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  All
                </p>
              </div>
              <div className="w-[8%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  All
                </p>
              </div>
              <div className="w-[14%] border-r">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Both
                </p>
              </div>
              <div className="w-[26%] border-r">
                <p className="text-xs sm:text-sm  text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Send Job closure report to Landlord{" "}
                </p>
              </div>
              <div className="w-[21%] border-r  ">
                <p className="text-xs  h-full sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="w-[16%] flex items-center justify-center">
                {/* <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                  Select <BsChevronDown className="mt-[3px]" />
                </p> */}
                <img src={img} className="w-24 h-6 object-fill " />
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[7%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
                <p>04</p>
              </div>
              <div className=" border-r w-[8%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Primary
                </p>
              </div>
              <div className="w-[8%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Group A
                </p>
              </div>
              <div className="w-[14%] border-r">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Text
                </p>
              </div>
              <div className="w-[26%] border-r">
                <p className="text-xs sm:text-sm  text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Send Job closure report to Landlord{" "}
                </p>
              </div>
              <div className="w-[21%] border-r  ">
                <p className="text-xs  h-full sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="w-[16%] flex items-center justify-center">
                {/* <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                  Select <BsChevronDown className="mt-[3px]" />
                </p> */}
                <img src={img} className="w-24 h-6 object-fill " />
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[7%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
                <p>05</p>
              </div>
              <div className=" border-r w-[8%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Primary
                </p>
              </div>
              <div className="w-[8%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Group A
                </p>
              </div>
              <div className="w-[14%] border-r">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Text
                </p>
              </div>
              <div className="w-[26%] border-r">
                <p className="text-xs sm:text-sm  text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                  Send Job closure report to Landlord{" "}
                </p>
              </div>
              <div className="w-[21%] border-r  ">
                <p className="text-xs  h-full sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="w-[16%] flex items-center justify-center">
                {/* <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                  Select <BsChevronDown className="mt-[3px]" />
                </p> */}
                <img src={img} className="w-24 h-6 object-fill " />
              </div>
            </div>
          </div>
        </div>
      </div>
      }
      {
        select && <SelectAction/>
      }
    </div>
  );
};

export default JobNotification;
