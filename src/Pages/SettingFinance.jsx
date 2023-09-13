import React, { useState } from "react";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import "../Style/SettingFinance.css";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SettingFinance = () => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const navigate=useNavigate()
  const toSetting=()=>{
    navigate('/setting')
  }
  return (
    <div className="w-full">
      <div className="bg-green-100  px-10 flex items-center justify-between py-12">
    <div className="flex gap-x-4 items-center">
      <div>
        <div className="flex items-center gap-x-4">
          <BsChevronLeft  onClick={toSetting}   className="cursor-pointer text-xl" />
          <h1 className="text-3xl font-bold">Finance </h1>
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
    <div>
      <div className="flex justify-center py-3">
        <div className="w-1/2 p-5 bg-white border rounded-md shadow-md">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <button
                className={`relative w-[44px] h-6 rounded-full p-2 focus:outline-none ${
                  isToggled ? "bg-green-500" : "bg-red-500"
                }`}
                onClick={() => handleToggle()}
              >
                <div
                  className={`absolute left-[2px] top-[2px] w-5 h-5  rounded-full bg-white transform transition-transform duration-300 ${
                    isToggled ? "translate-x-full" : "translate-x-0"
                  }`}
                ></div>
              </button>
              <h1 className="text-[#737475] font-bold text-lg">
                Enable Autogenerate
              </h1>
            </div>
            <div className="flex items-center gap-x-2">
              <button
                className={`relative w-[44px] h-6 rounded-full p-2 focus:outline-none ${
                  isToggled ? "bg-green-500" : "bg-red-500"
                }`}
                onClick={() => handleToggle()}
              >
                <div
                  className={`absolute left-[2px] top-[2px] w-5 h-5  rounded-full bg-white transform transition-transform duration-300 ${
                    isToggled ? "translate-x-full" : "translate-x-0"
                  }`}
                ></div>
              </button>
              <h1 className="text-[#737475] font-bold text-lg">
                Enable Commission
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#737475] font-semibold">Enable Commission</p>
              <button
                type="button"
                className="flex items-center gap-x-2 text-[#737475] font-semibold"
              >
                Percentage
                <BsChevronDown className="mt-[2px] text-md font-bold" />
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="05%"
                className="appearance-none border  rounded-md py-2 px-4 font-bold w-full   text-xl !outline-none  "
              ></input>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
              <div>
                <input type="checkbox" id="myCheckbox" className="w-4 h-4" />
              </div>
              <div className="mt-[4px]">
                <label className="text-[#b1b1b1]">
                  Mark Invoice as overdue after
                </label>
              </div>
              </div>
              <div className="flex items-center justify-center w-20 ">
              <input type="text" placeholder="05 Days" className="w-12 h-12 p-2 border rounded-md "/>

              </div>
            </div>
            <div>
        <h1 className="text-[#737475] font-bold text-lg">
        Invoice Details
              </h1>
              <input type="text" className="w-full px-3 border rounded-md h-9" placeholder="Adress"></input>
              <input type="text" className="w-full px-3 border rounded-md h-9" placeholder="Phone Number"></input>
              <input type="email" className="w-full px-3 border rounded-md h-9" placeholder="Email"></input>
              <textarea className="w-full p-2 border rounded-md" rows='5' placeholder="Notes"></textarea>
        </div>
        <div className="">
        <h1 className="text-[#737475] font-bold text-lg">
                VAT
              </h1>
              <input type="text" className="w-full px-3 border rounded-md h-9" placeholder="Enter VAT Number"></input>


        </div>
            <div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default SettingFinance;
