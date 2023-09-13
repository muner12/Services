import React, { useState } from "react";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const SetOpeningHour = () => {
  const [isChecked, setIsChecked] = useState(false);
  // Our States
  const [state, setState] = React.useState({ status: true });

  // Change State Function
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
const navigate=useNavigate()
  const toOpen=()=>{
    navigate('/setting/opening-hours')
  }


  return (
    <div className="w-full">
      <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toOpen}   className="cursor-pointer text-xl"/>

                <h1 className="text-3xl font-bold">Opening Hours</h1>
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
     <div className="mt-4">
     <div className="flex flex-col w-[30%] m-auto rounded-md border shadow-md p-3">
        <div className="flex flex-col gap-y-8 px-3">
          <h1 className="text-[#737475] text-lg font-bold mt-2">
            Set Your Opening Hours
          </h1>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between border rounded-md items-center  py-[4px] px-2">
              <input type="text" placeholder="Same Every Day" />
             
             
            </div>
            <div className="flex items-center gap-x-2 justify-center">
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Mon</p>
              </div>
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Tue</p>
              </div>
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Wed</p>
              </div>
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Thur</p>
              </div>
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Fri</p>
              </div>
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Sat</p>
              </div>

              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Sun</p>
              </div>
            </div>
            <input
              type="text"
              className=" rounded-md border  w-full py-[4px] px-2"
              placeholder="8:00 to 2:00"
            ></input>
          </div>

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

export default SetOpeningHour;
