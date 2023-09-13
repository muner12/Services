import React from "react";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import cross from "../images/crossx.png";
import { BsChevronDown } from "react-icons/bs";

const SelectAction = () => {
  return (
    <div>
      <div className="flex gap-x-4">
        <div className="px-12 w-1/2">
          <h2 className="text-[#737475] font-bold">Select Action</h2>
          <div className="flex gap-x-4 py-4">
            <div className="w-1/2 border rounded-md  bg-gray-100 flex justify-center items-center py-3">
              <p className="text-[#38bf67] text-sm">
                Notify Landlord on New Jobs
              </p>
            </div>
            <div className="w-1/2 border rounded-md flex justify-center items-center py-3">
              <p className="text-[#] text-sm">Notify Landlord on New Jobs</p>
            </div>
          </div>
          <h2 className="text-[#737475] font-bold">Select Recipient</h2>
          <div className="flex gap-x-4 py-4">
            <div className="w-16 h-12 border rounded-md  bg-gray-100 flex justify-center items-center py-3">
              <p className="text-[#38bf67] text-sm font-semibold">All</p>
            </div>
            <div className="w-16 h-12 border rounded-md flex justify-center items-center py-3">
              <p className="text-[#] text-sm font-semibold">Primary</p>
            </div>
          </div>
          <h2 className="text-[#737475] font-bold">Delivery Method</h2>
          <div className="flex gap-x-4 py-4">
            <div className="w-16 h-12 border rounded-md  bg-gray-100 flex justify-center items-center py-3">
              <p className="text-[#38bf67] text-sm font-semibold">email</p>
            </div>
            <div className="w-16 h-12 border rounded-md flex justify-center items-center py-3">
              <p className="text-[#] text-sm font-semibold">Text</p>
            </div>
            <div className="w-16 h-12 border rounded-md flex justify-center items-center py-3">
              <p className="text-[#] text-sm font-semibold">Both</p>
            </div>
          </div>
          <h2 className="text-[#737475] font-bold ">Select Group</h2>

          <div className="  mt-4 ">

            <div className="flex border rounded-md shadow-sm py-1 border-b bg-[#e0e1e2] items-center px-3">
              <input
                type="text"
                placeholder="Goup B"
                className="bg-[#e0e1e2]"
              />
              <img src={cross} className="w-3 h-3" />
            </div>
            <div className="flex border-[1px] rounded-md py-1 border-t-[#afaeae] shadow-sm   bg-[#e0e1e2] items-center px-3">
              <input
                type="text"
                placeholder="Goup A"
                className="bg-[#e0e1e2]"
              />
              <img src={cross} className="w-3 h-3" />
            </div>
            <div className="flex border-[1px] border-[#afaeae]  rounded-md py-[6px] mt-[] shadow-sm   bg-[#] items-center px-3">
              <input
                type="text"
                placeholder="Select Group"
                className="bg-[#]"
              />
              <BiSearch className="text-xl" />
            </div>
          </div>
        </div>
        <div className="w-1/2 px-12">
          <h2 className="text-[#737475] font-bold">Select Action</h2>
          <div className="border shadow-sm mt-4 rounded-md flex flex-col gap-y-3 px-5 py-8">
          <div className="flex border-[1px] border-[#afaeae]  rounded-md py-[6px] mt-[]    bg-[#] items-center px-3">
              <input
                type="text"
                placeholder="Template"
                className="bg-[#]"
              />
              <BsChevronDown className="text-xl" />
            </div>
            <textarea cols='' rows='5' className="p-2 border rounded-md w-full !outline-none" placeholder="Message"></textarea>
<button type="button" className="text-white mt-4 font-semibold text-sm bg-[#38bf67] py-2 rounded-sm w-full">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAction;
