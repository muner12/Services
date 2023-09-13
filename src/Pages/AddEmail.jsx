import React, { useRef, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../Style/AddCertificate.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import '../Style/AddNewJobs.css'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AddEmailSetting = () => {

  

const navigate=useNavigate();
const toSetting=()=>{
  navigate('/setting')
}
 

  return (
    <div>
      <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <BsChevronLeft onClick={toSetting}   className="cursor-pointer text-xl" />
                <h1 className="text-3xl font-bold">Email Setting</h1>
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
      <div className="w-[90%] sm:w-[80%] lg:w-[43%] shadow-md border py-4 rounded-md m-auto">
      
        <div className="flex flex-col gap-y-3   px-14">
        <h1 className="  text-[#737475] font-bold text-xl">
        Add Email
                </h1>
        <p className="  text-[#737475] font- text-sm">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.
        </p>
         <div className="px-6 flex flex-col gap-y-4">
         <div className="input-field">
            <input type="text" className="" placeholder="Email" />
            {/* <FaRegCalendarAlt /> */}
          </div>
          <div className="input-field">
            <input type="text" className="" placeholder="Password" />
          </div>         
          <div className="input-field">
            <input type="text" className="" placeholder="Port" />
          </div>
          <div className="input-field">
            <input type="text" className="" placeholder="smpt" />
          </div>    
          <button
            type="button"
            className="bg-[#38bf67] text-white flex !outline-none justify-center items-center rounded-md  py-2 font-semibold"
          >
            Save
          </button>
         </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AddEmailSetting;
