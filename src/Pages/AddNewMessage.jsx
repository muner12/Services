import React from "react";
import { BsChevronDown } from "react-icons/bs";

const AddNewMessage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[40%]  px-12">
        <div className="border shadow-sm mt-4 rounded-md flex flex-col gap-y-3 p-3 ">
          <h2 className="text-[#737475] font-bold">Select Action</h2>
          <div className="flex border-[1px] border-[#afaeae]  rounded-md py-[6px] mt-[]    bg-[#] items-center px-3">
            <input type="text" placeholder="Template" className="bg-[#]" />
            <BsChevronDown className="text-xl" />
          </div>
          <textarea
            cols=""
            rows="5"
            className="p-2 border rounded-md w-full !outline-none"
            placeholder="Message"
          ></textarea>
         <div className="flex gap-x-3">
         <button
            type="button"
            className="text- mt-2 font-bold !outline-none border text-[#737475] text-sm bg-[#] py-2 rounded-sm w-full"
          >
            Cancel
          </button>
          <button
            type="button"
            className="text-white mt-2 !outline-none font-semibold text-sm bg-[#38bf67] py-2 rounded-sm w-full"
          >
            Save
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewMessage;
