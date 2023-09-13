import React from "react";
import SecondCardData from "../Config/ContracterSecondCardData";

const ContractorSecondCard = () => {
  return (
    <div className="flex flex-wrap gap-y-4 justify-center align-center gap-x-8 py-6 ">
      {SecondCardData.map((items) => (
        <div className="border rounded-md w-64">
          <div className="flex items-center gap-x-3 py-2 justify-center ">
            <img
              src={items.Image}
              className="bg-[#737475] h-6 w-6 flex justify-center items-center object-fill rounded-full p-1"
            ></img>
            <h2 className=" font-bold text-xl text-[#737475]">
              {items.heading}
            </h2>
          </div>
          <hr />
          <div className="flex flex-col gap-y-2 py-3">
            <div className="flex items-center justify-around">
              <img src={items.check} className="w-4 h-4" />
              <h2 className=" font-semibold w-8   text-center text-[#737475]">{items.zero}</h2>
              <h2 className="  w-20 text-sm font-semibold text-[#737475]">{items.active}</h2>
            </div>
            <div className="flex items-center justify-around">
              <img src={items.filled} className="w-4 h-4" />
              <h2 className=" font-semibold w-8   text-center text-[#737475]">{items.zero}</h2>
              <h2 className="  w-20 text-sm font-semibold  text-[#737475]">{items.pending}</h2>
            </div>
            <div className="flex items-center justify-around">
              <img src={items.prohibited} className="w-4 h-4" />
              <h2 className=" font-semibold  text-center  w-8 text-[#737475]">{items.zero}</h2>
              <h2 className="  w-20 text-sm font-semibold text-[#737475]">{items.suspended}</h2>
            </div>
          </div>
          <hr/>
          <div className="flex text-center gap-x-3 py-2 justify-center">
            <h2 className="text-sm font-semibold text-[#737475]">{items.total}</h2>
            <h1 className="text-[#38bf67] font-bold">{items.number}</h1>
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default ContractorSecondCard;
