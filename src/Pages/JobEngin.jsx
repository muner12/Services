import React, { useState } from "react";
import jobass from "../images/jobAss.png";
import message from "../images/messageJ.png";

import auto from "../images/auto.png";
import jobnot from "../images/jobnot.png";

import btntop from "../images/btntop.png";
import JobAssignment from "./JobAssignment";
import AutoRespond from "./AutoRespond";
import JobNotification from "./JobNotification";
import Message from "./Message";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const JobEngin = () => {
  const [jobAssign, setjobAssign] = useState(false);
  const [jobEngin, setjobEngin] = useState(true);
  const [autoRes, setautoRes] = useState(false);
  const [showJobNoti, setshowJobNoti] = useState(false);
  const [showMessage, setshowMessage] = useState(false);
  const [heading, setHeading] = useState("Job Engine");


 
  const handleAutoRespond = () => {
    setHeading("Auto Responder");
    setjobEngin(false);
    setjobAssign(false);
    setautoRes(true)
  };
const handleJobNot=()=>{
  setHeading("Job Notification");
  setjobEngin(false);
  setjobAssign(false);
  setautoRes(false)
  setshowJobNoti(true)

}
const handleMessage=()=>{
  setHeading("Message");
  setjobEngin(false);
  setjobAssign(false);
  setautoRes(false)
  setshowJobNoti(false)
  setshowMessage(true)

}
const navigate=useNavigate()
const toSetting=()=>{
  navigate('/setting')
}
const handleJobAssingment = () => {
  navigate('/setting/job-assign')

};
const handleJobEngine=()=>{
  setHeading("Job Engine");
  setautoRes(false);
  setjobEngin(true);
  
  setshowJobNoti(false);
  setshowMessage(false);
}


  return (
    <>
   
       <div className="w-full">
       <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <BsChevronLeft onClick={handleJobEngine}  className="cursor-pointer text-xl" />
                <h1 className="text-3xl font-bold"> {heading}</h1>
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
        { jobEngin &&
       <div className="flex justify-between px-40 py-4">
          <div
            onClick={handleJobAssingment}
            className="w-44  flex p-2 flex-col rounded-md shadow-md border cursor-pointer h-48 gap-y-3"
          >
            <div className="flex justify-end  ">
              <img src={btntop} className="h-6 w-10" />
            </div>
            <div>
              <img src={jobass} className="w-24 h-24 object-fill m-auto" />
            </div>
            <div>
              <h3 className="font-bold text-[#737475] text-center">
                Job Assignment
              </h3>
            </div>
          </div>
          <div onClick={handleAutoRespond} className="w-44 object-fill flex p-2 flex-col rounded-md shadow-md border cursor-pointer h-48 gap-y-3">
            <div className="flex justify-end  ">
              <img src={btntop} className="h-6 w-10" />
            </div>
            <div>
              <img src={auto} className="w-24 h-24 object-fill m-auto" />
            </div>
            <div>
              <h3 className="font-bold text-[#737475] text-center">
              Auto Responder
              </h3>
            </div>
          </div>
          <div onClick={handleJobNot} className="w-44 object-fill flex p-2 flex-col rounded-md shadow-md border cursor-pointer h-48 gap-y-3">
            <div className="flex justify-end  ">
              <img src={btntop} className="h-6 w-10" />
            </div>
            <div>
              <img src={jobnot} className="w-24 h-24 object-fill m-auto" />
            </div>
            <div>
              <h3 className="font-bold text-[#737475] text-center">
                Job Notification
              </h3>
            </div>
          </div>
          <div onClick={handleMessage} className="w-44 object-fill flex p-2 flex-col rounded-md shadow-md border cursor-pointer h-48 gap-y-3">
            <div className="flex justify-end  ">
              <img src={btntop} className="h-6 w-10" />
            </div>
            <div>
              <img src={message} className="w-24 h-24 object-fill m-auto" />
            </div>
            <div>
              <h3 className="font-bold text-[#737475] text-center">
                Message
              </h3>
            </div>
          </div>
        </div>
}
       

      {
        autoRes && <AutoRespond/>
      }
      {
        showJobNoti && <JobNotification/>
      }
      {
        showMessage && <Message/>
      }
      </div>
    </>
  );
};

export default JobEngin;
