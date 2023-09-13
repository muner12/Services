import React, { useRef, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../Style/AddCertificate.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import '../Style/AddNewJobs.css'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AddNewJob = () => {

  

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files); // Do something with the selected files
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger click on file input when button is clicked
  };
  const navigate = useNavigate();
  // const navi = useNavigate();


  const handleuseNavigate=()=>{
    navigate('/properties')

  }

  return (

    <div className="w-full">
       <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={handleuseNavigate} className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Add Job</h1>
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
        <div className="py-4">
      <div className="w-[90%] sm:w-[80%] lg:w-[37%] shadow-md border py-4 rounded-md m-auto">
      
        <div className="flex flex-col gap-y-3   px-14">
        <h1 className="  text-[#737475] font-bold text-xl">
          Enter Job Detail
        </h1>
          <div className="input-field">
            <input type="text" className="" placeholder="Case No.*" />
            {/* <FaRegCalendarAlt /> */}
          </div>
          <div className="input-field">
            <input type="text" className="" placeholder="Address *" />
          </div>
          <div className="input-field">
            <input type="search" placeholder="Tenant Name *" />
            <BsChevronDown />
          </div>
          <div className="input-field">
            <input type="text" className="" placeholder="Contact Number *" />
          </div>
          <div className="input-field">
            <input type="text" className="" placeholder="E-mail *" />
          </div>
          <div className="px-3">
            <h3 className="font-semibold text-sm  text-[#737475]">Severity</h3>
          <div className="flex flex-col md:flex-row justify-between mt-2 px-2 md:px-4">
          <div className="">
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
              <label for="html" className="text-xs -mt-3 ml-2 text-[#737475]">
                Emergency
              </label>
            </div>
            <div className="">
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
              <label for="html" className="text-xs ml-2 text-[#737475]">
              Non-Emergency
              </label>
            </div>
          </div>
          </div>
          <div className="input-field">
            <input type="text" className="" placeholder="Subject *" />
          </div>

          <div className="input-field flex justify-between">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              placeholder=""
            />
            <p className="text- text-[#b1b1b1]"> Upload Attachment</p>

            <button
              onClick={handleButtonClick}
              className="border text-[#407c1e]  px-1 rounded-sm !outline-none  text-sm font-bold "
            >
              Choose File
            </button>
          </div>
          <textarea
            className="border outline-none rounded-md px-2 py-1"
            rows="4"
            cols="60"
            placeholder="Description"
          ></textarea>
          <button
            type="button"
            className="bg-[#407c1e] text-white flex !outline-none justify-center items-center rounded-md  py-2 font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AddNewJob;
