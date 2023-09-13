import React, { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import {
  AiFillCaretDown,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import {
  BsChevronDown,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsSearch,
} from "react-icons/bs";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import AddProperties from "./AddProperties";
import threedot from "../images/threedot.png";
import substraction from "../images/substraction.png";
import notification from "../images/notifi.png";
import PropertyDetail from "./PropertyDetail";
import notice from "../images/warning.png";
import Sidebar from "../Sidebar";

const Events = () => {
  const [show, setShow] = useState(false);
  const [properties, setProperties] = useState(true);
  const [propertyDetail, setPropertyDetail] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handlePropertyDetail = () => {
    setPropertyDetail(true);
    setProperties(false);
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
    <div className="w-full">
      <div className="w-full">
        <div className="flex items-center justify-between px-10 py-8 bg-green-100">
          <div className="flex items-center gap-x-4">
            <div>
              <div className="flex items-center gap-x-4">
                <div className="w-7 border-[2px] border-black p-[2px] rounded-md h-7">
                  <img src={substraction} />
                </div>

                <h1 className="text-3xl font-bold">Events</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-x-12">
            <AiOutlineExclamationCircle
              style={{ strokeWidth: "1px", transform: "scale(1.1)" }}
              className="text-3xl text-[#737475]"
            />

            <div className="w-6 h-6">
              <img src={notification} className="object-fill w-full h-full" />
            </div>
            <div className="w-2 h-5">
              <img src={threedot} className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
        {properties && (
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

            <div className="flex flex-col py-2 justify-between mt-3 sm:flex-row">
              <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-normal gap-x-6">
                <div className="flex w-[80%] sm:w-44   gap-x-3 justify-center items-center ">
                  <p className="text-sm text-[#737475] font-semibold">Show:</p>
                  <select className="w-12 h-8 px-0 text-sm bg-transparent border border-gray-700 rounded-sm outline-none">
                    <option className="text-sm">25</option>
                    <option>35</option>

                    <option>45</option>

                    <option>55</option>
                  </select>
                </div>

                <div className="flex w-[80%] sm:w-full   gap-x-3">
                  <label className="text-xs   sm:text-sm mt-1 text-[#737475] font-semibold">
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
            </div>
            <div className="flex flex-col gap-y-3 lg:flex-row items-center justify-center lg:justify-between w-3/4 px-3  py-2 gap-x-4">
              <div className="w- relative flex items-center py-[6px] rounded-md px-3 border">
                <input type="text" className=""></input>
                <AiOutlineCaretDown  className="text-xl" />
                
              </div>
              <div className="w- flex items-center py-[6px] rounded-md px-3 border">
                <input type="text" className=""></input>
                <AiOutlineCaretDown className="text-xl" />
              </div>
              <div className="w- flex items-center py-[6px] rounded-md px-3 border">
                <input type="text" className=""></input>
                <AiOutlineCaretDown className="text-xl" />
              </div>
              <div className="w- relative flex items-center py-[6px] rounded-md px-3 border">
                <input type="text" className=""></input>
                <AiOutlineCaretDown onClick={handlenotification} className="text-xl" />
                {showNotification && (
                <div
                  ref={divNotification}
                  className="absolute flex flex-col gap-y-1 bg-slate-50   rounded-xl px-3 w-44 right-0    py-2 border-2 border-[#737475] top-8"
                >
                  <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                    Console
                  </p>
                  <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                    App
                  </p>
                </div>
              )}
              </div>
            </div>

            <div className="py-8">
              <div
                onClick={handlePropertyDetail}
                className="flex flex-col items-center border rounded-lg cursor-pointer"
              >
                <div className="flex w-full text-xs sm:text-base hover:bg-blue-50 ">
                  <div className="w-[3%] sm:py-2 border-r flex items-center justify-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" w-[9%] ">
                    <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                      Saverity
                    </p>
                  </div>
                  <div className=" w-[15%] ">
                    <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                      Date/Time
                    </p>
                  </div>
                  <div className="w-[15%] ">
                    <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                      Description
                    </p>
                  </div>
                  <div className="w-[10%] ">
                    <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2 ">
                      Category
                    </p>
                  </div>
                  <div className="w-[16%] ">
                    <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                      Events Name
                    </p>
                  </div>
                  <div className="w-[16%] ">
                    <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                      Events Data
                    </p>
                  </div>
                  <div className="w-[16%] ">
                    <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2 ">
                      Recently Rum Reports
                    </p>
                  </div>
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-3 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[9%]">
                    <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                      <img src={notice} className="w-5 h-5" />
                      Notice
                    </div>
                  </div>
                  <div className=" border-r w-[15%]">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      24/08/2022 4.30pm
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      zahid@gmail.com
                    </p>
                  </div>
                  <div className="w-[10%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      login
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                      Admin User Login
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs font-semibold text-[#737475] w-[16%] border-r h-full sm:text-sm sm:py-3 text-center  flex items-center justify-center "></p>
                  {/* </div> */}
                  {/* <div className=""> */}
                  <p className="w-[15%] font-semibold text-[#737475] text-xs sm:text-sm  sm:py-3 text-center  flex gap-x-2 items-center justify-center h-full"></p>
                  {/* </div> */}
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
        {show && (
          <div>
            <AddProperties />
          </div>
        )}
        {propertyDetail && (
          <>
            <PropertyDetail />
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
