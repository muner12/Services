import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TimeZone = () => {
  const navigate=useNavigate();
  const toSetting=()=>{
    navigate('/setting')
  }
  return (
    <div className="w-[100%]">
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toSetting}   className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Time Zone</h1>
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
      <div className="py-5">
      <div className="flex w-[30%] flex-col  m-auto mt-3 rounded-md border shadow-md p-3">
        <div className="flex flex-col gap-y-8 px-3">
        <h1 className="text-[#737475] text-lg font-bold mt-2">Time Zone</h1>
       <div className="flex flex-col gap-y-4">
       <div className="flex justify-between border rounded-md items-center  py-[4px] px-2">
            <input type="search" placeholder="Tenant Name *" />
            <BsChevronDown />
          </div>
        <input
          type="text"
          className=" rounded-md border  w-full py-[4px] px-2"
          placeholder="Groups"
        ></input>
       </div>

        <button
          type="button"
          className="bg-[#38bf67] !outline-none text-sm px-2 py-2 rounded-sm font-semibold text-white"
        >
        Save
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TimeZone;
