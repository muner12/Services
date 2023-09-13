import React from "react";
import dashboard from "../images/dashboard.png";
import { BsChevronLeft } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DonutColorPicker from "../compunents/DonutColorPicker";
const Branding = () => {
  const navigate=useNavigate()
  const toSetting=()=>{
    navigate('/setting')
  }
  return (
    <div className="w-full">
      <div className="bg-green-100  px-10 flex items-center justify-between py-12 w-full">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toSetting}  className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Brandingss</h1>
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
        <div className="p-3 ">
      <div className="flex gap-x-3">
        <div className="w-1/2 rounded-md border shadow-md py-4">
          <h2 className="text-[#737475] font-semibold px-3">Change Company Logo</h2>
          <div className="px-3">
            <div className="flex items-center  gap-x-16 mt-2 py-3">
              <h1 className="text-[#737475] text-sm">Company Logo:</h1>
              <div className="w-28 h-28 border rounded-md"></div>
            </div>
            <div className="flex items-center  gap-x-12 mt-2 py-3">
              <h1 className="text-[#737475] w-28 text-sm">Company URL:</h1>
              <div className="w-60">
                <input
                  type="text"
                  className=" rounded-md border w-56 py-[3px] px-2"
                  placeholder="www.wpm.com"
                ></input>
              </div>
              {/* <button type='button'></button> */}
            </div>
            <h1 className="text-[#737475]  font-semibold">Header</h1>

            <div className="flex items-center  gap-x-12 mt-2 py-3 ">
              <h1 className="text-[#737475] w-28 text-sm">Header Color</h1>
              <div className="w-60">
                <input
                  type="text"
                  className=" rounded-md border w-56  py-[3px] px-2"
                  placeholder="#123456"
                ></input>
              </div>
              {/* <button type='button'></button> */}
            </div>
            <div className="flex items-center  gap-x-12 mt-2 py-3  w-96">
              <h1 className="text-[#737475] w-28  text-sm">Font Color</h1>
              <div className="flex border rounded-md  w-60">
                <button
                  type="button"
                  className="bg-[#737475] rounded-tl-md rounded-bl-md !outline-none  rounded- w-1/2 py-1 text-white"
                >
                  Dark
                </button>
                <button type="button" className="w-1/2 !outline-none py-1">
                  Light
                </button>
              </div>
            </div>
            <h1 className="text-[#737475]  font-semibold">Navigation</h1>

            <div className="flex items-center  gap-x-12 mt-2 py-3 ">
              <h1 className="text-[#737475] w-28 text-sm">Header Color</h1>
              <div className="w-60">
                <input
                  type="text"
                  className=" rounded-md border w-56  py-[3px] px-2"
                  placeholder="#123456"
                ></input>
              </div>
              {/* <button type='button'></button> */}
            </div>
            <div className="flex items-center  gap-x-12 mt-2 py-3  w-96">
              <h1 className="text-[#737475] w-28  text-sm">Font Color</h1>
              <div className="flex border rounded-md  w-60">
                <button
                  type="button"
                  className="bg-[#737475] rounded-tl-md rounded-bl-md !outline-none  rounded- w-1/2 py-1 text-white"
                >
                  Dark
                </button>
                <button type="button" className="w-1/2 !outline-none py-1">
                  Light
                </button>
              </div>
            </div>
            <h1 className="text-[#737475]  font-semibold">Highlights</h1>

            <div className="flex items-center  gap-x-12 mt-2 py-3 ">
              <h1 className="text-[#737475] w-28 text-sm">Header Color</h1>
              <div className="w-60">
                <input
                  type="text"
                  className=" rounded-md border w-56  py-[3px] px-2"
                  placeholder="#123456"
                ></input>
              </div>
              {/* <button type='button'></button> */}
            </div>
            <div className="flex items-center  gap-x-12 mt-2 py-3  w-96">
              <h1 className="text-[#737475] w-28  text-sm">Font Color</h1>
              <div className="flex border rounded-md  w-60">
                <button
                  type="button"
                  className="bg-[#737475] rounded-tl-md rounded-bl-md !outline-none  rounded- w-1/2 py-1 text-white"
                >
                  Dark
                </button>
                <button type="button" className="w-1/2 !outline-none py-1">
                  Light
                </button>
              </div>
            </div>
            <div className="flex items-center  gap-x-3 mt-4">
              <div>
                <input type="checkbox" />
              </div>
              <p className="text-sm text-[#737475]">
                Apply these settings to Web Form
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-3">
          <img src={dashboard} className="w-full h-auto object-fill" />
        </div>
      </div>
      <div className=" flex  justify-between px-16 mt-5">
          <button
            class="text-[#407c1e] font-semibold   !outline-none border-[2px] border-[#407c1e] px-2 w-56  justify-center   py-2 flex text-center items-center rounded-sm"
            fdprocessedid="xwgfij"
          >
            Cancel
          </button>
      
        <button
          class="bg-[#407c1e] font-semibold  !outline-none text-white px-2 w-56 justify-center   py-2 flex text-center items-center rounded-sm"
          fdprocessedid="xwgfij"
        >
          SAVE
        </button>
        </div>
        <DonutColorPicker/>
      </div>
      
      
    </div>
    
  );
};

export default Branding;
