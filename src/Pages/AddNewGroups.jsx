import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AddNewGroups = () => {
  const navigate=useNavigate();
  const toGroups=()=>{
    navigate('/setting/group')
  }
  return (
    <div className="w-full">
     <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toGroups} className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Groups</h1>
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
     <div className="mt-5">
     <div className="flex flex-col w-[30%]  m-auto rounded-xl border shadow-md p-3">
        <div className="flex flex-col gap-y-8 px-3">
        <h1 className="text-[#737475] font-bold mt-2">Add New Group</h1>
        <input
          type="text"
          className=" rounded-md border  py-[3px] px-2"
          placeholder="Group Name"
        ></input>

        <button
          type="button"
          className="bg-[#38bf67] !outline-none text-sm px-2 py-2 rounded-sm font-semibold text-white"
        >
        Save
        </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default AddNewGroups;
