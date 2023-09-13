import React, { useState } from "react";
import img from "../images/ring.png";
import {
  BsChevronDown,
  BsChevronLeft,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsSearch,
} from "react-icons/bs";
import RunReports from "./RunReports";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RecentReports = () => {
  const [show, setShow] = useState(true);
  const [runReports, setrunReports] = useState(false);

 
const navigate=useNavigate();
const toReport=()=>{
  navigate('/report')
}
const handleRunReport=()=>{
  navigate('/reports/run-report')

}
const toSubscription=()=>{
  navigate('/reports/subscription')
}
  

  return (
    <div className="w-full">
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
    <div className="flex gap-x-4 items-center">
      <div>
        <div className="flex items-center gap-x-4">
          <BsChevronLeft onClick={toReport} className="cursor-pointer text-xl" />
          <h1 className="text-3xl font-bold">Recent Reports </h1>
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
      {show && (
        <div className=" w-full px-3">
          <div className="py-8">
            <div className=" flex items-center justify-between gap-x-4 ">
              <h1 className="text-xl font-bold">Home/Reports/Recent Reports</h1>
            </div>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>

          <div className=" flex flex-col sm:flex-row justify-between mt-3">
            <div className="flex flex-col sm:flex-row  justify-center sm:justify-normal items-center gap-x-6">
              <div className="flex w-[80%] sm:w-44   gap-x-3 justify-center items-center ">
                <p className="text-sm">Show:</p>
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
          </div>

          <div className="py-8">
            <div className="flex items-center justify-end px-1 gap-x-1">
              <p className="text-end px-2 py-2">Sort</p>
              <div className="  flex flex-col !outline-none ">
                <button className="border-none !outline-none">
                  <BsFillCaretUpFill className="text-xl  !outline-none mt-1" />
                </button>
                <button className=" border-none !outline-none">
                  <BsFillCaretDownFill className="text-xl !outline-none -mt-2" />
                </button>
              </div>
            </div>
            <div
              className="border cursor-pointer flex flex-col   items-center  rounded-lg"
            >
              <div className="flex text-xs sm:text-base w-full hover:bg-blue-50  ">
                <div className="w-[3%] sm:py-3 border-r flex items-center justify-center">
                  <input type="checkbox" />
                </div>
                <div className=" w-[35%] ">
                  <p className=" text-xs sm:text-base sm:py-3  text-center font-bold  flex items-center justify-center h-full">
                    Name
                  </p>
                </div>
                <div className="w-[35%] ">
                  <p className="text-xs sm:text-base sm:py-3 text-center font-bold  flex items-center justify-center h-full">
                    Description
                  </p>
                </div>
                <div className="w-[27%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Action
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                    Total Properties
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                    onClick={handleRunReport}
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div onClick={toSubscription} className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Total Contractors
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Total Jobs
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                    Total Properties
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Number of Jobs reported via phone/email
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Number of Jobs reported via phone/email
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Number of Jobs reported via phone/email
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Number of Jobs reported via phone/email
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Number of Jobs reported via phone/email
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Number of Jobs reported via phone/email
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Number of Jobs reported via phone/email
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Number of Jobs reported via phone/email
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Number of Jobs reported via phone/email
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50   ">
                <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[35%]">
                  <p className="text-xs sm:text-sm sm:py-3 text-center text-[#737475] font-semibold  flex items-center justify-center h-full">
                  Number of Jobs reported via phone/email
                  </p>
                </div>
                <div className="w-[35%] border-r">
                  <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
                    Lorem ipsum dolor sit ame
                  </p>
                </div>
                <div className="w-[27%] border-r">
                  <div className=" flex items-center justify-center gap-x-3 h-full">
                    <button
                      type="button"
                      className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                    >
                      Run
                    </button>
                    <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                      <img src={img} className="w-5 h-5 object-fill" />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="flex border rounded-sm w-44 mt-4 ">
              <button className="border-r text-sm w-11 p-1">Excel</button>
              <button className="border-r text-sm w-11 p-1">CSV</button>

              <button className="border-r text-sm w-11 p-1">PDF</button>

              <button className="border-r text-sm w-11 p-1">Print</button>
            </div>
            <div className="flex items-center gap-x-3 mt-4 ">
              <button className="text-sm font-semibold">Previous</button>
              <p className="border text-sm  flex rounded items-center justify-center w-7 h-7">
                1
              </p>
              <button className="text-sm font-semibold">Next</button>
            </div>
          </div>
        </div>
      )}
    
      {runReports && 
          <RunReports />
      }
    </div>
  );
};

export default RecentReports;
