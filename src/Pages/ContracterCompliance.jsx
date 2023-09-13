import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ContracterCompliance = () => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const navigate=useNavigate();
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
                <h1 className="text-3xl font-bold">Property Compliance </h1>
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
      <div className="py-4">
      <div className="border flex  flex-col gap-y-3 rounded-lg lg:w-[30%] m-auto shadow-md py-3 px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#737475] font-bold">Contractor Compliance</p>
          </div>
          <div>
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
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#737475] text-sm">
              Notify If certificate is due expiry
            </p>
          </div>
          <div>
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
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#737475] text-sm">
              Notify If certificate has expired
            </p>
          </div>
          <div>
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
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#737475] text-sm">
              If certificate has expired suspend contractor{" "}
            </p>
          </div>
          <div>
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
          </div>
        </div>
        <div>
            <input type="text" className="rounded-md w-full py-[6px] mt-2 border px-2" placeholder="Enter Email to send notification"></input>
        </div>
        <div>
        <button type="button" className="w-full !outline-none py-[6px] bg-[#38bf67] mt-4 rounded-sm text-white font-semibold">Save</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContracterCompliance;
