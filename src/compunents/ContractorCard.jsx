import React from "react";
import data from "../Config/ContractorCardData";

const ContractorCard = () => {
  return (
    <div className="flex  py-0 mt-2 gap-x-5">
      {data.map((items, index) => (
        <div
          key={index}
          className=" w-44 cursor-pointer border-2 px-2 py-3 rounded-xl border-[#38bf67]"
        >
          <div className="">
            <img src={items.img} className="w-12 h-12" />
            <h1 className="text-3xl font-bold mt-2 text-[#737475] ">
              {items.text}
            </h1>
            <button
              type="button"
              className={`${index === 0 && "bg-[#38bf67] text-white"} ${
                index === 1 && "bg-[#feda32] text-black "
              } ${index === 2 && "bg-[#fc5461] text-white"} 
              mt-2 px-2  font-semibold  text-sm rounded-xl`}
            >
              {items.btn}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContractorCard;
