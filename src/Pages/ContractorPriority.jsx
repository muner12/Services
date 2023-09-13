


import React, { useState } from "react";
import dlt from '../images/delete.png'
import edit from '../images/edit.png'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ContractorPriority = () => {
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
                <BsChevronLeft onClick={toSetting}  className="cursor-pointer text-xl" />
                <h1 className="text-3xl font-bold">Priority</h1>
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
     <div className=" w-full px-3">
        <div className="py-">
        </div>
        <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-normal gap-y-2 gap-x-4 mt-3"></div>
        <div className=" flex flex-col sm:flex-row  justify-between items-center mt-3">
          <p className="text-[#737475] font-bold text-x px-2">Set the contractor priority level name</p>
        </div>
        
        <div className="py-4">
          <div className="flex items-center justify-end px-1 gap-x-1"></div>
          <div className="border cursor-pointer flex flex-col   items-center shadow-sm  rounded-lg">
            <div className="flex text-xs sm:text-base w-full hover:bg-blue-50  ">
              <div className="w-[33.333%] sm:py-4 flex items-center justify-center">
                <p className=" text-xs sm:text-base   text-center font-bold  flex items-center justify-center h-full">
                Level
                </p>
              </div>
              <div className=" w-[33.333%] ">
                <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                    Description
                </p>
              </div>
              <div className="w-[33.333%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                Action
                                </p>
              </div>
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[33.333%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
              <p>p1</p>
              </div>
              <div className=" border-r w-[33.333%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Use as first Choice
                </p>
              </div>
              <div className="w-[33.333%]  flex items-center justify-center">
                <div className="flex items-center gap-x-2 justify-center">
                    <img src={dlt} className="flex  w-5 h-5 items-center justify-center"/>
                    <img src={edit} className="flex  w-5 h-5  items-center justify-center"/>

                </div>
              </div>
              
             
              
              
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[33.333%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
              <p>p2</p>
              </div>
              <div className=" border-r w-[33.333%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Use as first Choice
                </p>
              </div>
              <div className="w-[33.333%]  flex items-center justify-center">
                <div className="flex items-center gap-x-2 justify-center">
                    <img src={dlt} className="flex  w-5 h-5 items-center justify-center"/>
                    <img src={edit} className="flex  w-5 h-5  items-center justify-center"/>

                </div>
              </div>
              
             
              
              
            </div>
            <div className="flex w-full  border-t hover:bg-blue-50  ">
              <div className="w-[33.333%] text-[#737475] border-r sm:py-2 flex justify-center items-center">
              <p>p3</p>
              </div>
              <div className=" border-r w-[33.333%]">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Use as first Choice
                </p>
              </div>
              <div className="w-[33.333%]  flex items-center justify-center">
                <div className="flex items-center gap-x-2 justify-center">
                    <img src={dlt} className="flex  w-5 h-5 items-center justify-center"/>
                    <img src={edit} className="flex  w-5 h-5  items-center justify-center"/>

                </div>
              </div>
              
             
              
              
            </div>
            
           
          </div>
         
        </div>
      </div>
      

      
    </div>
  );
};

export default ContractorPriority;
