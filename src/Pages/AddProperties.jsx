import React, { useEffect, useRef, useState } from "react";
import AddCertificate from "./AddCertificate";
import { FaCalendarAlt, FaKaaba } from "react-icons/fa";
import "../Style/inputField.css";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import { AiOutlineExclamationCircle, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker"

const AddProperties = () => {


  const [showSelect, setShowSelect] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const divSelect = useRef(null);
  
  const handleSelect = (address) => {
    setSelectedAddress(address);
    setShowSelect(false);
  };

  const handleClickOutside = (event) => {
    if (divSelect.current && !divSelect.current.contains(event.target)) {
      setShowSelect(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };
  const navigate = useNavigate();
  // const navi = useNavigate();


  const handleuseNavigate=()=>{
    navigate('/properties')

  }
  const handleAddcertificate=()=>{
    navigate('/property/add-certificate')

  }

  return (
    <div className="w-100">
    <div className="bg-green-100  px-5 flex items-center justify-between py-12 ">
          <div className="flex gap-x-4 items-center w-100 ">
            <div>
              <div className="flex items-center gap-x-4">
                <BsChevronLeft onClick={handleuseNavigate} className="text-xl"/>

                <h1 className="text-3xl font-bold">Add Properties</h1>
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
          </div>
        </div>
    
        
        <div className="px-3 ">
          <div className="flex py-6 justify-between ">
            <h1 className="text-xl font-bold">
              Home /Properties /Add Property
            </h1>
            <button
              type="button"
              className="bg-[#38bf67] px-3 py-2 !outline-none text-white rounded-md"
              onClick={handleAddcertificate}
            >
              Add Certificates
            </button>
          </div>
          <div className="  flex-wrap sm:grid grid-cols-2 gap-y-6 gap-x-6 justify-between">
            <div className="flex flex-col shadow-sm border w-full rounded-md gap-y-4 px-12 py-8">
              <h1 className=" text-xl font-bold text-[#737475]">
                Enter Property Details
              </h1>
              <div className="flex flex-col gap-y-4">
                <input
                  type="text"
                  className="    border  rounded-lg px-2 py-1"
                  placeholder="Post code *"
                ></input>
                <div className="relative">
                  <div
                    onClick={toggleSelect}
                    className="flex border px-2 py-1 rounded-lg items-center"
                  >
                    <input
                      type="text"
                      placeholder="Select Address"
                      value={selectedAddress}
                      readOnly
                      className="w-full"
                    />
                    <BsChevronDown />
                  </div>
                  {showSelect && (
                    <div
                      ref={divSelect}
                      className="absolute flex flex-col gap-y-1 w-full px-4 right-0 bg-slate-50 rounded-xl py-2 border-2 border-[#737475] top-8"
                    >
                      <p
                        className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white"
                        onClick={() => handleSelect("Mardan")}
                      >
                        Mardan
                      </p>
                      <p
                        className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white"
                        onClick={() => handleSelect("Peshawar")}
                      >
                        Peshawar
                      </p>
                      <p
                        className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white"
                        onClick={() => handleSelect("Buner")}
                      >
                        Buner
                      </p>
                      <p
                        className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white"
                        onClick={() => handleSelect("Swat")}
                      >
                        Swat
                      </p>
                      <p
                        className="text-sm text-[rgb(115,116,117)] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white"
                        onClick={() => handleSelect("Sawabi")}
                      >
                        Sawabi
                      </p>
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  className=" border  rounded-lg px-2 py-1"
                  placeholder="Managed By *"
                ></input>
                <textarea
                  id="notes"
                  className="outline-none border rounded-lg px-2 py-2"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="Notes*"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col relative w-full border rounded-md shadow-sm gap-y-4 px-12 py-8">
              <h1 className=" text-xl font-bold text-[#737475]">
                Enter Landlord Info
              </h1>
              <div className="flex flex-col gap-y-4">
                <input
                  type="text"
                  className=" border  rounded-lg px-2 py-1"
                  placeholder="Full Name *"
                ></input>
                <input
                  type="text"
                  className=" border  rounded-lg px-2 py-1"
                  placeholder="Email Address*"
                ></input>
                <input
                  type="text"
                  className=" border  rounded-lg px-2 py-1"
                  placeholder="Contact Number *"
                ></input>
              </div>
              <div className="flex justify-end ">
                <button
                  type="button"
                  className="bg-[#407c1e]  text-white px-2 py-1 rounded-sm absolute left-[75%] top-[85%]"
                >
                  Add Another
                </button>
              </div>
            </div>
            <div className=" w-full border py-4 rounded-md shadow-md ">
              <di className=" flex flex-col gap-y-4 px-12 py-8">
                <h1 className=" text-xl font-bold text-[#737475]">
                  Enter Tenant Details
                </h1>
                <input
                  type="text"
                  className=" border  rounded-lg px-2 py-1"
                  placeholder="Full Name *"
                ></input>
                <input
                  type="text"
                  className=" border  rounded-lg px-2 py-1"
                  placeholder="Email *"
                ></input>
                <input
                  type="text"
                  className=" border  rounded-lg px-2 py-1"
                  placeholder="Contact *"
                ></input>
                
                <div className="flex justify-between border  rounded-lg px-2 py-1 items-center">
                  {/* <input   placeholder="Move in Date" className="appearance-none" /> */}
                  <DatePicker placeholderText="Move In"/>
                  <FaCalendarAlt className="calendar-icon text-[#407c1e]" />
               
                </div>
                <div className="flex justify-between border  rounded-lg px-2 py-1 items-center">
                <DatePicker placeholderText="Move In" />
                  <FaCalendarAlt className="calendar-icon text-[#407c1e]" />
                </div>
              </di>
              <div className="flex justify-end px-4">
                <button
                  type="button"
                  className="bg-[#407c1e]  text-white px-2 py-1 rounded-sm"
                >
                  Add Another
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between md:px-32 py-6">
            <div className="flex items-center gap-x-2 ">
              <input type="checkbox" />
              <label className="text-sm mt-2  ">Send Sign Up Info.</label>
            </div>
           
          </div>
          <div className="flex justify-between md:px-32 py-6">
          <button
              type="button"
              className="border-2 font-semibold !outline-none border-[#407c1e] text-[#407c1e] px-12 rounded-sm py-1 "
            >
              Cancel
            </button>
            
            <button
              type="button"
              className="bg-[#407c1e] !outline-none px-12 rounded-sm py-1 text-white"
            >
              Save
            </button>
          </div>
        </div>
      
    

     
    </div>
  );
};

export default AddProperties;
