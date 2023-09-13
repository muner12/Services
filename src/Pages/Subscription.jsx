import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import {
  AiFillCaretDown,
  AiOutlineCaretUp,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import {
  BsChevronDown,
  BsChevronLeft,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsSearch,
} from "react-icons/bs";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import AddProperties from "./AddProperties";
import PropertyDetail from "./PropertyDetail";
import threedot from "../images/threedot.png";
import substraction from "../images/substraction.png";
import notification from "../images/notifi.png";
import notice from "../images/warning.png";
import Sidebar from "../Sidebar";

const Subscription = () => {
  const [show, setShow] = useState(false);
  const [properties, setProperties] = useState(true);
  const [propertyDetail, setPropertyDetail] = useState(false);
const navigate=useNavigate()
  const toReport = () => {
    navigate('/report')
  };

  return (
    <div className=" w-full">
      <div className="w-full">
        <div className="flex items-center justify-between px-10 py-8 bg-green-100">
          <div className="flex items-center gap-x-4">
            <div>
              <div className="flex items-center gap-x-4">
                {/* <div className="w-7 border-[2px] border-black p-[2px] rounded-md h-7">
                  <img src={substraction} />
                </div> */}
                <div className="w-7 h-7 cursor-pointer">
                    <BsChevronLeft onClick={toReport} size={25} color="#333333" />
                  </div>

                <h1 className="text-3xl font-bold">Subscription</h1>
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
        <div className="w-full px-3 ">
          <div className="py-8">
            <div className="flex items-center justify-between gap-x-4">
              <h1 className="text-xl font-bold">Home/Reports/Subscription</h1>
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

          <div className="flex flex-col justify-between mt-3 sm:flex-row">
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

          <div className="py-8">
            <div className="flex flex-col items-center border rounded-lg cursor-pointer">
              <div className="flex w-full text-xs sm:text-base hover:bg-blue-50 ">
                <div className="w-[3%] sm:py-2  flex items-center justify-center">
                  <input type="checkbox" />
                </div>
                <div className=" w-[25%] ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Name
                  </p>
                </div>
                <div className=" w-[15%] ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Frequency
                  </p>
                </div>
                <div className="w-[21%] ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Last Execution
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2 ">
                    Next Excution
                  </p>
                </div>
                <div className="w-[16%] ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Status{" "}
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50 ">
                <div className="w-[3%]  sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[25%]">
                  <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                    Total Properties
                  </div>
                </div>
                <div className=" border-r w-[15%]">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Daily{" "}
                  </p>
                </div>
                <div className="w-[21%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[16%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    Admin User Login
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50 ">
                <div className="w-[3%]  sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[25%]">
                  <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                    Total Properties
                  </div>
                </div>
                <div className=" border-r w-[15%]">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Daily{" "}
                  </p>
                </div>
                <div className="w-[21%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[16%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    Admin User Login
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50 ">
                <div className="w-[3%]  sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[25%]">
                  <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                    Total Properties
                  </div>
                </div>
                <div className=" border-r w-[15%]">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Daily{" "}
                  </p>
                </div>
                <div className="w-[21%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[16%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    Admin User Login
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50 ">
                <div className="w-[3%]  sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[25%]">
                  <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                    Total Properties
                  </div>
                </div>
                <div className=" border-r w-[15%]">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Daily{" "}
                  </p>
                </div>
                <div className="w-[21%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[16%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    Admin User Login
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50 ">
                <div className="w-[3%]  sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[25%]">
                  <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                    Total Properties
                  </div>
                </div>
                <div className=" border-r w-[15%]">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Daily{" "}
                  </p>
                </div>
                <div className="w-[21%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[16%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    Admin User Login
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t hover:bg-blue-50 ">
                <div className="w-[3%]  sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[25%]">
                  <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                    Total Properties
                  </div>
                </div>
                <div className=" border-r w-[15%]">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Daily{" "}
                  </p>
                </div>
                <div className="w-[21%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[16%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    Admin User Login
                  </p>
                </div>
              </div>

              <div className="flex w-full border-t hover:bg-blue-50 ">
                <div className="w-[3%]  sm:py-3 flex justify-center items-center">
                  <input type="checkbox" />
                </div>
                <div className=" border-r w-[25%]">
                  <div className="text-xs  sm:text-sm sm:py-3 font-semibold text-[#737475] text-center  flex items-center justify-center gap-x-2 h-full">
                    Total Properties
                  </div>
                </div>
                <div className=" border-r w-[15%]">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Daily{" "}
                  </p>
                </div>
                <div className="w-[21%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    23 Dec 2022
                  </p>
                </div>
                <div className="w-[16%] border-r">
                  <p className="text-xs font-semibold text-[#737475] sm:text-sm sm:py-3 text-center  flex items-center justify-center h-full">
                    Admin User Login
                  </p>
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
        )
      </div>
    </div>
  );
};

export default Subscription;
