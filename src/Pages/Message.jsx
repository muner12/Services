import React, { useState } from "react";
import {
  
  BsSearch,
} from "react-icons/bs";
import dltEdit from '../images/dltEdit.png'
import AddNewMessage from "./AddNewMessage";

const Message = () => {
    const [message, setmessage] = useState(true)
    const [addNewMessage, setaddNewMessage] = useState(false)

  const handleAddNewMessage = () => {
    setmessage(false);
    setaddNewMessage(true)

  };

  

  return (
    <div>
      {
        message && <div className=" w-full px-3">
        <div className="py-3"></div>

        <div className=" flex flex-col sm:flex-row justify-between mt-3">
          <div className="flex flex-col sm:flex-row  justify-center sm:justify-normal items-center gap-x-6">
            <div className="flex w-[80%] sm:w-44   gap-x-3  items-center ">
              <p className="text-sm font-semibold text-[#737475]">Show:</p>
              <select className="border border-gray-700 outline-none  rounded-sm h-8 bg-transparent  w-12 px-0 text-sm">
                <option className="text-sm">25</option>
                <option>35</option>

                <option>45</option>

                <option>55</option>
              </select>
            </div>

            <div className="flex w-[80%] sm:w-full   gap-x-3">
              <label className="text-xs   sm:text-sm mt-1 font-semibold text-[#737475]">
                Entries Search:
              </label>

              <div className="input-container relative">
                <input
                  type="text"
                  className="pl-10 outline-none border rounded-md p-[2px]"
                />
                <BsSearch className="h-5 w-5 absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
          <div className=" flex  w-[80%] sm:w-auto  justify-center  mt-2 sm:mt-0  sm:justify-normal gap-x-4">
            <button
            onClick={handleAddNewMessage}
              type="button"
              className="bg-[#38bf67] font-semibold  px-2 rounded-sm text-sm h-8 text-white"
            >
              Add New Message
            </button>

           
          </div>
        </div>
        <div className="w-[80%] sm:w-auto  flex justify-center sm:justify-normal items-center  mt-2">
          <p className="text-sm font-semibold text-[#737475] ">
            Show 1 to 12 entries
          </p>
        </div>
        <div className="py-4">
          <div className="border cursor-pointer flex flex-col   items-center  rounded-lg">
            <div className="flex text-xs sm:text-base w-full hover:bg-blue-50  ">
              <div className="w-[7%] sm:py-2 border-r flex items-center justify-center">
              <p className=" text-xs sm:text-base sm:py text-center font-bold  flex items-center justify-center h-full">
                  No#
                </p>
              </div>
              <div className=" w-[14%] ">
                <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                  Name
                </p>
              </div>
              <div className="w-[31%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                  Description
                </p>
              </div>
              <div className="w-[31%] ">
                <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                  Message
                </p>
              </div>
              <div className="w-[17%] ">
                <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                  Action
                </p>
              </div>
           
            </div>
            <div className="flex w-full border-t hover:bg-blue-50  ">
              <div className="w-[7%] border-r text-[#737475] sm:py-2 flex justify-center items-center">
              01
              </div>
              <div className=" border-r w-[14%]">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                No Electricity              
                  </p>
              </div>
              <div className="w-[31%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Lorem ipsum dolor sit amet, consetetur sadipscing
                </p>
              </div>
              <div className="w-[31%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Lorem ipsum dolor sit amet, consetetur sadipscing
                </p>
              </div>
              <div className="w-[17%] border-r flex items-center justify-center object-fill">
              <img src={dltEdit} className="h-7 object-fill w-28"/>

              </div>
           
             
            </div>
            <div className="flex w-full border-t hover:bg-blue-50  ">
              <div className="w-[7%] border-r text-[#737475] sm:py-2 flex justify-center items-center">
              02
              </div>
              <div className=" border-r w-[14%]">
                <p className="text-xs text-[#737475] sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                No Heating              
                  </p>
              </div>
              <div className="w-[31%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Lorem ipsum dolor sit amet, consetetur sadipscing
                </p>
              </div>
              <div className="w-[31%] border-r">
                <p className="text-xs sm:text-sm text-[#737475] sm:py-2 text-center  flex items-center justify-center h-full">
                Lorem ipsum dolor sit amet, consetetur sadipscing
                </p>
              </div>
              <div className="w-[17%] border-r flex object-fill items-center justify-center">
               <img src={dltEdit} className="h-7 object-fill w-28"/>
              </div>
           
             
            </div>
            
           
          
          </div>
          <div className="flex border rounded-sm w-44 mt-4 ">
            <button className="border-r text-sm w-11 p-1">Excel</button>
            <button className="border-r text-sm w-11 p-1">CSV</button>

            <button className="border-r text-sm w-11 p-1">PDF</button>

            <button className="border-r text-sm w-11 p-1">Print</button>
          </div>
          <div className="flex items-center gap-x-3 mt-4 ">
            <button className="text-sm font-semibold">Previous</button>
            <p className="border text-sm  flex rounded items-center justify-center w-7 h-7">
              1
            </p>
            <button className="text-sm font-semibold">Next</button>
          </div>
        </div>
      </div>
      }
      {
        addNewMessage && <AddNewMessage/>
      }
    </div>
  );
};

export default Message;
