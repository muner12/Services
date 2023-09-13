import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiOutlineCaretUp, AiOutlineExclamationCircle } from "react-icons/ai";
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

const UserDetail = () => {
  const navigate=useNavigate();
  const toAccess=()=>{
    navigate('/setting/access-controll')

  }
  const toUserRule=()=>{
    navigate('/setting/user-rule')

  }
  return (
    <div className="w-full">
      <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toAccess}  className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">User Detail</h1>
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
            <div>
              
            </div>
           
           
            
          </div>
        </div>
      <div className=" w-full px-3">
      
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
          <div className=" flex  w-[80%] sm:w-auto  justify-center   sm:mt-0  sm:justify-normal gap-x-4">
            <button
              type="button"
              onClick={toUserRule}
              className="bg-[#38bf67] px-2 rounded-sm text-sm h-8 text-white"
            >
              Add New User
            </button>

           
          </div>
        </div>
        <div className="w-[80%] sm:w-auto  flex justify-between sm:justify-between  items-center  mt-2">
          <div>
        <p className="text-sm ">Show 1 to 12 entries</p>

          </div>
          <div className="flex">
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
        </div>
        <div className="py-">
          <div className="flex items-center justify-end px-1 gap-x-1"></div>
          <div className="border cursor-pointer flex flex-col   items-center  rounded-lg">
            <div className="flex text-xs sm:text-base w-full hover:bg-blue-50  ">
              <div className="w-[7%] sm:py-5 flex items-center justify-center">
              <p className=" text-xs sm:text-base   text-center font-bold  flex items-center justify-center h-full">
               Status
                </p>
              </div>
              <div className=" w-[15%] ">
                <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
               Full Name
                </p>
              </div>
              <div className="w-[15%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                  User Name
                </p>
              </div>
              <div className="w-[21%] ">
                <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                  Email
                </p>
              </div>
              <div className="w-[15%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                  Role
                </p>
              </div>
              <div className="w-[16%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                  Group
                </p>
              </div>
              <div className="w-[11%] ">
                <p className="text-xs sm:text-base  sm:py-2 text-center font-bold  flex items-center justify-center h-full ">
                  Action
                </p>
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[7%] border-r sm:py-4 flex justify-center items-center">
                <input type="checkbox" />
              </div>
              <div className=" border-r w-[15%]">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
Zahid               
 </p>
              </div>
              <div className="w-[15%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Zahidkhan
                </p>
              </div>
              <div className="w-[21%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  zahid11@gmail.com
                </p>
              </div>
              <div className="w-[15%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Help Desk
                </p>
              </div>
              {/* <div className=""> */}
              <p className="text-xs w-[16%] border-r h-full sm:text-sm sm:py-2 text-center  flex items-center justify-center ">
                {/* <span className="bg-[#38bf67] text-white rounded-full px-2 py-[1px]">
                  Active
                </span> */}
                All
              </p>
              {/* </div> */}
              <div className="w-[10%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                  Select <BsChevronDown className="mt-[3px]" />
                </p>
              </div>
            </div>
            <div className="flex w-full border-t hover:bg-blue-50  ">
              <div className="w-[7%] border-r sm:py-4 flex justify-center items-center">
                <input type="checkbox" />
              </div>
              <div className=" border-r w-[15%]">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
Zahid               
 </p>
              </div>
              <div className="w-[15%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Zahidkhan
                </p>
              </div>
              <div className="w-[21%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  zahid11@gmail.com
                </p>
              </div>
              <div className="w-[15%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Help Desk
                </p>
              </div>
              {/* <div className=""> */}
              <p className="text-xs w-[16%] border-r h-full sm:text-sm sm:py-2 text-center  flex items-center justify-center ">
                {/* <span className="bg-[#38bf67] text-white rounded-full px-2 py-[1px]">
                  Active
                </span> */}
                All
              </p>
              {/* </div> */}
              <div className="w-[10%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                  Select <BsChevronDown className="mt-[3px]" />
                </p>
              </div>
            </div>
            <div className="flex w-full border-t hover:bg-blue-50  ">
              <div className="w-[7%] border-r sm:py-4 flex justify-center items-center">
                <input type="checkbox" />
              </div>
              <div className=" border-r w-[15%]">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
Zahid               
 </p>
              </div>
              <div className="w-[15%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Zahidkhan
                </p>
              </div>
              <div className="w-[21%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  zahid11@gmail.com
                </p>
              </div>
              <div className="w-[15%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Help Desk
                </p>
              </div>
              {/* <div className=""> */}
              <p className="text-xs w-[16%] border-r h-full sm:text-sm sm:py-2 text-center  flex items-center justify-center ">
                {/* <span className="bg-[#38bf67] text-white rounded-full px-2 py-[1px]">
                  Active
                </span> */}
                All
              </p>
              {/* </div> */}
              <div className="w-[10%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                  Select <BsChevronDown className="mt-[3px]" />
                </p>
              </div>
            </div>
            <div className="flex w-full border-t hover:bg-blue-50  ">
              <div className="w-[7%] border-r sm:py-4 flex justify-center items-center">
                <input type="checkbox" />
              </div>
              <div className=" border-r w-[15%]">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
Zahid               
 </p>
              </div>
              <div className="w-[15%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Zahidkhan
                </p>
              </div>
              <div className="w-[21%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  zahid11@gmail.com
                </p>
              </div>
              <div className="w-[15%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Help Desk
                </p>
              </div>
              {/* <div className=""> */}
              <p className="text-xs w-[16%] border-r h-full sm:text-sm sm:py-2 text-center  flex items-center justify-center ">
                {/* <span className="bg-[#38bf67] text-white rounded-full px-2 py-[1px]">
                  Active
                </span> */}
                All
              </p>
              {/* </div> */}
              <div className="w-[10%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                  Select <BsChevronDown className="mt-[3px]" />
                </p>
              </div>
            </div>
            <div className="flex w-full border-t hover:bg-blue-50  ">
              <div className="w-[7%] border-r sm:py-4 flex justify-center items-center">
                <input type="checkbox" />
              </div>
              <div className=" border-r w-[15%]">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
Zahid               
 </p>
              </div>
              <div className="w-[15%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Zahidkhan
                </p>
              </div>
              <div className="w-[21%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  zahid11@gmail.com
                </p>
              </div>
              <div className="w-[15%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                  Help Desk
                </p>
              </div>
              {/* <div className=""> */}
              <p className="text-xs w-[16%] border-r h-full sm:text-sm sm:py-2 text-center  flex items-center justify-center ">
                {/* <span className="bg-[#38bf67] text-white rounded-full px-2 py-[1px]">
                  Active
                </span> */}
                All
              </p>
              {/* </div> */}
              <div className="w-[10%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                  Select <BsChevronDown className="mt-[3px]" />
                </p>
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
    </div>
  );
};

export default UserDetail;
