import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LiecenseAndText = () => {
  const navigate=useNavigate();
  const toSetting=()=>{
    navigate('/setting')
  }
  return (
    <div className="w-full">
       <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <BsChevronLeft  onClick={toSetting}   className="cursor-pointer text-xl" />
                <h1 className="text-3xl font-bold">Licences & Text </h1>
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
        <div className="py-4 px-4">
      <h1 className="text-[#737475] font-bold text-xl">Licences</h1>
      <div className="px-24 py-4 ">
        <table className=" border  w-full shadow-sm">
          <tr className="border  border-b rounded-xl  ">
            <th className=" w-[25%] "></th>
            <th className=" text-center w-[25%] py-3">Total</th>
            <th className=" text-center  w-[25%] py-3">Active</th>
            <th className=" text-center  w-[25%]   rounded-tr-lg">In-Active</th>
          </tr>
          <tr className="border border-b ">
            <td className=" text- w-[25%] border border-r py-2 px-4 font-bold text-[#737475]">
              Total
            </td>
            <td className=" text-center w-[25%] border border-r ">350</td>
            <td className=" text-center w-[25%] border border-r "></td>
            <td className=" text-center w-[25%] border border-r "></td>
          </tr>
          <tr className="border border-b ">
            <td className=" text- w-[25%] border border-r py-2 px-4 font-bold text-[#737475] ">
              Used
            </td>
            <td className=" text-center w-[25%] border border-r">50</td>
            <td className=" text-center w-[25%] border border-r">25</td>
            <td className=" text-center w-[25%] border border-r">25</td>
          </tr>
          <tr>
            <td className=" text- w-[25%] border border-r py-2 px-4 font-bold text-[#737475] ">
              Available
            </td>
            <td className=" text-center w-[25%] border border-r">350</td>
            <td className=" text-center w-[25%] border border-r"></td>
            <td className=" text-center w-[25%] border border-r"></td>
          </tr>
          <tr>
            <td className=" text- w-[25%] border border-r py-2 px-4 font-bold text-[#737475] ">
              Expiry Date
            </td>
            <td className=" text-center w-[25%] ">23-12-2022</td>
            <td className=" text-center w-[25%] border border-r"></td>
            <td className=" text-center w-[25%] border border-r"></td>
          </tr>
        </table>
      </div>
      <h1 className="text-[#737475] font-bold text-xl">Text Usage</h1>
      <div className="px-24 mt-4">
      <table className="w-[40%] border shadow-sm ">
        <tr className="">
          <td className=" border-b border-r  font-bold text-[#737475] w-1/2 py-[10px] px-3">Total Text</td>
          <td className="w-1/2 text-center border-b font-semibold text-[#737475] ">600</td>
        </tr>
        <tr className="">
          <td className=" w-1/2 border-b border-r  font-bold text-[#737475] py-[10px] px-3">Available Text </td>
          <td className="w-1/2 text-center border-b font-semibold text-[#737475]">300</td>
        </tr>
        <tr className="">
          <td className=" w-1/2 border-b border-r  font-bold text-[#737475] py-[10px] px-3">Consumed Text </td>
          <td className="w-1/2 text-center border-r font-semibold text-[#737475]">300</td>
        </tr>
      </table>
      </div>
    </div>
    </div>
   
  );
};

export default LiecenseAndText;
