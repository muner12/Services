import React from "react";
import mbl from "../images/mbl.png";
import check from "../images/checkwhite.png";
import cross from "../images/cross.png";
import { BsChevronDown } from "react-icons/bs";

const EngineerResponse = () => {
  return (
    <div className="py-8">
      <div
        className="  border flex flex-col cursor-pointer  items-center  rounded-lg"
      >
        <div className="flex text-xs hover:bg-blue-50 sm:text-base w-full  ">
        <div className="w-[10%] sm:py-2  flex items-center justify-center">
            
          </div>
          <div className="w-[30%] sm:py-2  flex items-center justify-center">
            <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
Contarctor Name    
        </p>
          </div>
          <div className=" w-[30%] ">
            <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
              Date Time
            </p>
          </div>
          <div className="w-[30%] ">
            <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
              Status
            </p>
          </div>
          
          
         
         
          
        </div>
        <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[10%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
            <img src={mbl} className="w-4 object-fill h-6" />
          </div>
          <div className=" w-[30%] border-r ">
          <div className="flex items-center gap-x-4 justify-center ">
          <p className="bg-[#38bf67] px-1 py-[2px] text-white w-[20px] h-[20px] text-xs rounded-sm">p1</p>
            <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  h-full">
              Hazrat Zahid
            </p>
          </div>
          </div>
          <div className="w-[30%] ">
            <p className="text-xs text-[#737475] sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
            16 July 2023 2:40
            </p>
          </div>
          <div className="w-[30%] flex items-center justify-center ">
            <button type="button" className="bg-[#1db4c9] w-28 py-1 rounded-3xl text-white">Requested</button>
          </div>
        
          
        
          
        </div>
        <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[10%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
            <img src={mbl} className="w-4 object-fill h-6" />
          </div>
          <div className=" w-[30%] border-r ">
          <div className="flex items-center gap-x-4 justify-center ">
          <p className="bg-[#38bf67] hidden px-1 py-[2px] text-white w-[20px] h-[20px] text-xs rounded-sm">p1</p>
            <p className="text-xs text-[#737475] sm:text-sm ml-8 sm:py-2 text-center  h-full">
              Hazrat Zahid
            </p>
          </div>
          </div>
          <div className="w-[30%] ">
            <p className="text-xs text-[#737475] sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
            16 July 2023 2:40
            </p>
          </div>
          <div className="w-[30%] flex items-center justify-center ">
            <button type="button" className="bg-[#5869c1] w-28 py-1 rounded-3xl text-white">Recieved</button>
          </div>
        
          
        
          
        </div>
        <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[10%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
            <img src={mbl} className="w-4 object-fill h-6" />
          </div>
          <div className=" w-[30%] border-r ">
          <div className="flex items-center gap-x-4 justify-center ">
            <p className="text-xs text-[#737475] ml-8 sm:text-sm sm:py-2 text-center  h-full">
              Hazrat Zahid
            </p>
          </div>
          </div>
          <div className="w-[30%] ">
            <p className="text-xs text-[#737475] sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
            16 July 2023 2:40
            </p>
          </div>
          <div className="w-[30%] flex items-center justify-center ">
            <button type="button" className="bg-[#fc5461] w-28 py-1 rounded-3xl text-white">Decline</button>
          </div>
        
          
        
          
        </div>
        <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[10%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
            <img src={mbl} className="w-4 object-fill h-6" />
          </div>
          <div className=" w-[30%] border-r ">
          <div className="flex items-center gap-x-4 justify-center ">
          <p className="bg-[#38bf67] px-1 py-[2px] text-white w-[20px] h-[20px] text-xs rounded-sm">p1</p>
            <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  h-full">
              Hazrat Zahid
            </p>
          </div>
          </div>
          <div className="w-[30%] ">
            <p className="text-xs text-[#737475] sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
            16 July 2023 2:40
            </p>
          </div>
          <div className="w-[30%] flex items-center justify-center ">
            <button type="button" className="bg-[#38bf67] w-28 py-1 rounded-3xl text-white">Requested</button>
          </div>
        
          
        
          
        </div>
        
      </div>
      <div className="px-8 py-8">
        <div className=" flex flex-col gap-y-4">
            <h2 className="text-lg text-[#737475] font-semibold">Response:</h2>
            <div className="flex gap-x-5 px-4">
                <p className="text-base font-semibold">Contarctor Name:</p>
                <p className="text-[#737475]"> Akbar Ali</p>
          <p className="bg-[#38bf67] px-1 py-[2px] text-white w-[20px] h-[20px] text-xs rounded-sm">p1</p>

                <></>
            </div>
            <div className="flex gap-x-6 px-4">
                <p className="text-base font-semibold">Date Time:</p>
                <p className="text-[#737475]"> 02 Sep 2022</p>
          <p className="  text-[#737475]">02:30</p>

                <></>
            </div>
            <div className="flex gap-x-6 px-4">
                <p className="text-base font-semibold">Status:</p>
                <p  className="bg-[#38bf67] rounded-3xl w-[162px] text-center py-1 text-white">Accepted</p>

                <></>
            </div>
            <div className=" px-4">
                <p className="text-base font-semibold">Description:</p>
                <p  className="text-[#737475] text-sm px-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
            </div>
            <div className=" px-4 mt-4 flex justify-between">
                <button type="button" className="w-[150px] font-semibold border-[2px] !outline-none rounded-sm py-1 px-3 border-[#fc5461] text-[#fc5461]">Decline</button>
                <button type="button" className="w-[150px] font-semibold border-[2px] !outline-none rounded-sm py-1 px-3 border-[#737475] text-[#737475]">Cancel</button>
                <button type="button" className="w-[150px] font-semibold border-[2px] !outline-none rounded-sm py-1 px-3 text-white  bg-[#407c1e] border-[#407c1e]">Decline</button>


            </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerResponse;
