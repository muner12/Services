import React, { useRef, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../Style/AddCertificate.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import '../Style/AddNewJobs.css'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AddUserRule = () => {

  

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
    navigate('/setting/access-controll')

  }

  return (

    <div className="w-full">
       <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={handleuseNavigate} className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Add User Rule</h1>
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
      <div className="w-[90%] sm:w-[80%] lg:w-[37%] shadow-md border py-4 rounded-md m-auto px-3">
      <h1 className="  text-[#737475] font-bold text-xl">
          Add User
        </h1>
        <div className="flex flex-col gap-y-3   px-12 mt-4">
        
            <input className="border rounded-lg py-1 px-2" type="text"  placeholder="First Name" />
            <input className="border rounded-lg py-1 px-2" type="text"  placeholder="Last Name" />
            <input className="border rounded-lg py-1 px-2" type="text"  placeholder="Email" />
            <input className="border rounded-lg py-1 px-2" type="text"  placeholder="User Name" />

          <div className="flex justify-between items-center border rounded-lg py-1 px-2">
            <input type="text" placeholder="Selecet Group" />
            <BsChevronDown />
          </div>
          <div className="flex justify-between items-center border rounded-lg py-1 px-2">
            <input type="text" placeholder="Selecet Rule" />
            <BsChevronDown />
          </div>
         
         
        </div>
        <div className="flex justify-between gap-x-3 mt-5">
         <button
            type="button"
            className="text-[#38bf67] w-1/2 border-2 border-[#38bf67] flex !outline-none justify-center items-center rounded-sm  py-1 font-semibold"
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-[#38bf67] w-1/2 text-white flex !outline-none justify-center items-center rounded-sm  py-1 font-semibold"
          >
            Save
          </button>
         </div>
      </div>
    </div>
    </div>
    
  );
};

export default AddUserRule;
