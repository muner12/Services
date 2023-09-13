import React, { useState } from "react";
import accessData from "../Config/AccessCardData";
import {GrAddCircle} from 'react-icons/gr'
import CreateNewRule from "./CreateNewRule";
import UserDetail from "./UserDetail";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AccessControl = () => {
  const [access, setaccess] = useState(true);
  const [createNewRule, setCreateNewRule] = useState(false)
  const [userDetail, setUserDetail] = useState(false)


 
  const handleUserDetail=()=>{
    setaccess(false)
    setCreateNewRule(false)
    setUserDetail(true)

  }
  const navigate=useNavigate()
  const toSetting=()=>{
    navigate('/setting')
  }
  const handleAccess=()=>{
    navigate('/setting/create-rule')

  }
  const handleUser=()=>{
    navigate('/setting/user-detail')

  }

  return (
    <div className="w-full">
      <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toSetting}   className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Access Control</h1>
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
     
        <div>
        <div className=" flex px-8 justify-end gap-x-3 mt-4">
          <button
          onClick={handleAccess}
            class="text-[#38bf67] font-semibold   !outline-none border-[2px] text-sm border-[#38bf67] px-2 w-32  justify-center   py-1 flex text-center items-center rounded-sm"
            fdprocessedid="xwgfij"
          >
            Create New rule
          </button>

          <button
          onClick={handleUser}
            class="bg-[#38bf67] font-semibold  !outline-none text-white        text-sm justify-center px-2 w-32  py-1 flex text-center items-center rounded-sm"
            fdprocessedid="xwgfij"
          >
            User Details
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-y-4 px-24 mt-4">
      {
        accessData.map((items)=>(
        <>
            <div className="w-52 h-52 cursor-pointer text-center border p-4 rounded-md shadow-md">
            <img src={items.img} className="w-28 h-28 object-fill m-auto"/>
            <p className="text-[#737475] mt-3 font-semibold">{items.text}</p>
            <p className="text-[#38bf67] tem font-semibold">{items.number}</p>

          </div>
         
        </>
        ))
      }
      <div className="w-20 flex justify-center text-[#38bf67] items-center h-52 cursor-pointer text-center border-[1px] border-[#38bf67] p-4 rounded-md shadow-">
          <GrAddCircle className="text-3xl "/>

          </div>
      </div>
    </div>
  );
};

export default AccessControl;
