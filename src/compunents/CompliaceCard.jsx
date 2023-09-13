import React from "react";
import complianceData from "../Config/Compliancedata";

const CompliaceCard = () => {
  return (
    <div className="flex justify-between w-full   ">
      {complianceData.map((items, index) => (
        <div className="border relative rounded-md shadow-sm w-36">
          <div className="absolute top-1 right-2 text-2xl text-[#b1b1b1]">{items.icon}</div>
          <h1  className={`text-[80px] font-[Roboto] font-bold text-center py-4 ${
              index === 0 ? "text-[#38bf67]" : index === 1 ? "text-[#fc5461]":index===2 ?"text-[#feda32]" : "text-[#b1b1b1] " 
            }`}>{items.heading}</h1>
          <p className={` font-[Roboto] font-semibold text-center py-1 ${
              index === 0 ? "text-[#38bf67] bg-green-100" : index === 1 ? "text-[#fc5461] bg-red-100":index===2 ?"text-[#feda32] bg-yellow-100"  : "text-[#b1b1b1] bg-gray-100 " 
            }`}>{items.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CompliaceCard;
