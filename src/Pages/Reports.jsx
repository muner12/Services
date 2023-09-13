import React, { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {
  BsChevronDown,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsSearch,
} from "react-icons/bs";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import img from "../images/ring.png";
import RecentReports from "./RecentReports";
import RunReports from "./RunReports";
import Sidebar from "../Sidebar";
import notification from "../images/notifi.png";
import threedot from "../images/threedot.png";
import substraction from "../images/substraction.png";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Reports = () => {
  const [recentReport, setRecentReport] = useState(false);
  const [report, setReport] = useState(true);
  const [runReport, setrunReport] = useState(false);
const navigate=useNavigate();
  const handleRecentReports = () => {
    navigate('/reports/recent-reports')
   
  };

  const handleRunReport = () => {
  navigate('/reports/run-report')
   
  };

  //Notification
  const [showNotification, setShowNotification] = useState(false);
  const divNotification = useRef(null);

  const handlenotification = () => {
    setShowNotification(!showNotification);
  };

  const handleClickOutsideNotification = (event) => {
    if (
      divNotification.current &&
      !divNotification.current.contains(event.target)
    ) {
      setShowNotification(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNotification);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNotification);
    };
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-full">
        <div className="flex items-center justify-between px-10 py-8 bg-green-100">
          <div className="flex items-center gap-x-4">
            <div>
              <div className="flex items-center gap-x-4">
                <div className="w-7 border-[2px] border-black p-[2px] rounded-md h-7">
                  <img src={substraction} />
                </div>

                <h1 className="text-3xl font-bold">Reports</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-x-12">
            <AiOutlineExclamationCircle
              style={{ strokeWidth: "1px", transform: "scale(1.1)" }}
              className="text-3xl text-[#737475]"
            />

            <div className="w-6 h-6 relative">
              <img  onClick={handlenotification}  src={notification} className="object-fill w-full h-full" />
              {showNotification && (
                <div
                  ref={divNotification}
                  className="absolute flex flex-col gap-y-1   rounded-xl px-3 w-44 right-0 -left-20   py-2 border-2 border-[#737475] top-8"
                >
                  <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                    Setting
                  </p>
                  <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                    Logout
                  </p>
                </div>
              )}
            </div>
            <div className="w-2 h-5">
              <img src={threedot} className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
        {report && (
          <div className="w-full px-3 ">
            <div className="py-8">
              <div className="flex items-center justify-between gap-x-4">
                <h1 className="text-xl font-bold">Home/Reports</h1>
                <div className="flex items-center gap-x-4">
                  <p className="text-xl">
                    <IoIosArrowUp className="text-4xl text-[#407c1e]" />
                  </p>
                  <p>
                    <ImCross />
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-400"></div>
            </div>
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-normal gap-x-6">
                <div className="flex w-[80%] sm:w-44   gap-x-3 justify-center items-center ">
                  <p className="text-sm">Show:</p>
                  <select className="w-12 h-8 px-0 text-sm bg-transparent border border-gray-700 rounded-sm outline-none">
                    <option className="text-sm">25</option>
                    <option>35</option>

                    <option>45</option>

                    <option>55</option>
                  </select>
                </div>

                <div className="flex w-[80%] sm:w-full   gap-x-3">
                  <label className="mt-1 text-xs sm:text-sm">
                    Entries Search:
                  </label>

                  <div className="relative input-container">
                    <input
                      type="text"
                      className="pl-10 outline-none border rounded-md p-[2px]"
                    />
                    <BsSearch className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  </div>
                </div>
              </div>
              <div className=" flex  w-[80%] sm:w-auto  justify-center  mt-2 sm:mt-0  sm:justify-normal gap-x-4">
                <button
                  onClick={handleRecentReports}
                  type="button"
                  className="bg-[#38bf67] px-2 rounded-sm text-sm h-8 text-white"
                >
                  Recent Reports
                </button>
              </div>
            </div>
            <div className="py-8">
              {/* <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-normal gap-y-2 gap-x-4 "></div> */}

              <div className="flex items-center justify-end px-1 gap-x-1">
                <p className="px-2 py-2 text-end">Sort</p>
                <div className="flex flex-col outline-none ">
                  <button className="border-none outline-none">
                    <BsFillCaretUpFill className="mt-1 text-xl outline-none" />
                  </button>
                  <button className="border-none outline-none ">
                    <BsFillCaretDownFill className="-mt-2 text-xl outline-none" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center border rounded-lg">
                <div className="flex w-full text-xs sm:text-base ">
                  <div className="w-[3%] sm:py-4 border-r flex items-center justify-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" w-[30%] ">
                    <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                      Name
                    </p>
                  </div>
                  <div className="w-[37%] ">
                    <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                      Description
                    </p>
                  </div>
                  <div className="w-[30%] ">
                    <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2 ">
                      Actions
                    </p>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold   flex items-center px-3 h-full">
                      Total Properties
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold  text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        onClick={handleRunReport}
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 px-3   flex items-center  h-full">
                      Total Contractors
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        onClick={handleRunReport}
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 px-3 flex items-center  h-full">
                      Total Jobs
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        onClick={handleRunReport}
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 px-3 flex items-center  h-full">
                      Number of jobs reported per property{" "}
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        onClick={handleRunReport}
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 px-3 flex items-center  h-full">
                      Number of jobs reported via app
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        type="button"
                        onClick={handleRunReport}
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 px-3 flex items-center  h-full">
                      Number of Jobs reported via phone/email
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        onClick={handleRunReport}
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 px-3 flex items-center  h-full">
                      Number of jobs completed
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 px-3 flex items-center  h-full">
                      Number of Jobs in pending
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 px-3 flex items-center  h-full">
                      Number of properties
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs sm:text-sm sm:py-3 text-[#737475] font-semibold  px-3 flex items-center  h-full">
                      Number of engineer by category/All
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs sm:text-sm text-[#737475] font-semibold  sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 px-3 flex items-center  h-full">
                      Total Jobs
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 px-3 flex items-center  h-full">
                      Total Text message sent
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 px-3 flex items-center  h-full">
                      Per engineer report number of jobs
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 px-3 flex items-center  h-full">
                      Average job close time
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-t ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[30%]">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 px-3 flex items-center  h-full">
                      Highest number of job declines by contractor
                    </p>
                  </div>
                  <div className="w-[37%] border-r">
                    <p className="text-xs text-[#737475] font-semibold  sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Lorem ipsum dolor sit ame
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center items-center  ">
                    <div className="flex items-center justify-center h-full gap-x-3">
                      <button
                        type="button"
                        className="bg-[#38bf67] text-white text-sm font-semibold rounded-sm py-[2px] px-1"
                      >
                        Run
                      </button>
                      <Link to="/report/events/subscription">
                        <div className="bg-[#737475] flex items-center justify-center rounded-sm w-6 h-6">
                          <img src={img} className="object-fill w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-4 border rounded-sm w-44 ">
                <button className="p-1 text-sm border-r w-11">Excel</button>
                <button className="p-1 text-sm border-r w-11">CSV</button>

                <button className="p-1 text-sm border-r w-11">PDF</button>

                <button className="p-1 text-sm border-r w-11">Print</button>
              </div>
              <div className="flex items-center mt-4 gap-x-3 ">
                <button className="text-sm font-semibold">Previous</button>
                <p className="flex items-center justify-center text-sm border rounded w-7 h-7">
                  1
                </p>
                <button className="text-sm font-semibold">Next</button>
              </div>
            </div>
          </div>
        )}
        {/* {recentReport && <RecentReports />}

        {runReport && <RunReports />} */}
      </div>
    </div>
  );
};

export default Reports;
