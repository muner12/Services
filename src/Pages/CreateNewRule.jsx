import React from "react";
import { ImgHTMLAttributes } from "react";
import createNewRule from "../Config/CreateNewRule";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CreateNewRule = () => {
  const navigate=useNavigate();
  const toAccess=()=>{
    navigate('/setting/access-controll')

  }
  return (
    <div className="w-full">
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toAccess}   className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Role Name</h1>
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
      <div className="px-5 py-8">
      <div className="border rounded-md m-auto ">
        {createNewRule.map((items, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "flex justify-between items-center border-b px-3 py-2 "
                : "flex justify-between px-3 py-2"
            }
          >
            <div>
              <div className="w-70%  flex flex-col ">
                <h3
                  key={index}
                  className={
                    index === 0 ? " font-bold" : "text-[#737475] font-semibold"
                  }
                >
                  {items.feature}
                </h3>
                <div className="flex flex-col px-4 gap-y-3">
                  <h4 className="text-sm text-[#737475]">{items.add}</h4>
                  <h4 className="text-sm text-[#737475]">{items.edit}</h4>
                </div>
              </div>
             
            </div>
            <div
              className={
                index === 0
                  ? "w-[30%]  font-bold px-4  items-center"
                  : "w-[30%] font-bold   px-10 flex flex-col gap-y-4 justify-between items-center"
              }
            >
              <div className="  flex w-full justify-between items-center">
                <h3>{items.read}</h3>
                <h3>{items.rw}</h3>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <div className="  flex w-full justify-between items-center">
                  <h3>{items.check1}</h3>
                  <h3>{items.check2}</h3>
                </div>
                <div className="  flex w-full justify-between items-center">
                  <h3>{items.check3}</h3>
                  <h3>{items.check4}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
       
      </div>
      </div>
    </div>
  );
};

export default CreateNewRule;
