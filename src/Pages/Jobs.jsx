import React, { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { BsChevronDown, BsFillCaretDownFill, BsFillCaretUpFill, BsFillSunsetFill, BsSearch } from "react-icons/bs";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import AddNewJob from "./AddNewJob";
import JobsDetail from "./JobsDetail";
import JobDetail from "./JobsDetail";
import Sidebar from "../Sidebar";
import notification from "../images/notifi.png";
import threedot from "../images/threedot.png";
import suitcase from "../images/suitcaseNav.png";
import { useNavigate } from "react-router-dom";
import jobData from "../Config/JobData";




const Jobs = () => {
  const [addJob, setaddJob] = useState(false)
  const [jobs, setjobs] = useState(true)
  const [JobsDetail, setJobsDetail] = useState(false)
  const [lanlord, setlanlord] = useState(false)

  const usenavigate=useNavigate();
const handleAddJobs=()=>{
  usenavigate('/job/add-jobs')
}
const handleJobsDetail=()=>{
  usenavigate('/job/job-detail')
}


  
  const [showNotification, setShowNotification] = useState(false);
  const divNotification = useRef(null);

  const handlenotification = () => {
    setShowNotification(!showNotification);
  };

  const handleClickOutsideNotification = (event) => {
    if (
      divNotification.current &&
      !divNotification.current.contains(event.target)
    ) {
      setShowNotification(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNotification);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNotification);
    };
  }, []);

  //Sort
  const [showSort, setShowSort] = useState(false);
  const divSort = useRef(null);

  const handleSort = () => {
    setShowSort(!showSort);
  };

  const handleClickOutsideSort = (event) => {
    if (divSort.current && !divSort.current.contains(event.target)) {
      setShowSort(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideSort);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSort);
    };
  }, []);


  return (
   <div className="flex w-full">
   {/* <Sidebar/> */}
    <div className="w-full">
       {/* Navbar */}
       <div className="bg-green-100 px-10 flex items-center justify-between py-8">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <div className="w-6 h-6 border-[2px] p-[2px] rounded-md border-black">
                  <img src={suitcase} />
                </div>

                <h1 className="text-3xl font-bold">Jobs</h1>
              </div>
              {/* <span className="text-center text-xl font-semibold ml-[20%] text-[#737475]  w-full">
                Over view
              </span> */}
            </div>
          </div>
          <div className="flex gap-x-8">
           
            <div className="w-6 h-6 relative">
              <img src={notification} onClick={handlenotification} className="w-full cursor-pointer h-full object-fill" />
              {showNotification && (
                <div
                  ref={divNotification}
                  className="absolute flex flex-col gap-y-1   rounded-xl px-3 w-44 right-0 -left-20   py-[10px] border-2 border-[#737475] top-8"
                >
                  <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                    Setting
                  </p>
                  <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                    Logout
                  </p>
                </div>
              )}
            </div>
            <div className="w-2 h-5">
              <img src={threedot} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Nanbar */}
        <div className=" w-full px-3">
   {jobs &&

   <>

   <div className="py-8">
    <div className=" flex items-center justify-between   ">
      <h1 className="text-xl font-bold">Home/Jobs</h1>

       <div className="flex gap-x-4 items-center">
       <p className="text-xl">
          <IoIosArrowUp className="text-4xl text-[#407c1e]" />
        </p>
        <p>
          <ImCross />
        </p>
       </div>
      </div>
      <div className="w-full h-[1px] bg-gray-400"></div>
    </div>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-normal gap-y-2 gap-x-4 mt-3">
        <div className="border w-[80%] sm:w-44  flex justify-between rounded-md py-1 px-2 text-sm">
          <button>New Jobs </button>
          <span className="h-6 w-6 text-white p-1 text-xs bg-red-500 rounded-full flex justify-center items-center">
            05
          </span>
        </div>
        <div className="border w-[80%] sm:w-44  flex justify-between rounded-md py-1 px-2 text-sm">
          <button>In Progress Jobs </button>
          <span className="h-6 w-6 text-white p-1 text-xs bg-red-500 rounded-full flex justify-center items-center">
            05
          </span>
        </div>
        <div className="border w-[80%] sm:w-44  flex justify-between rounded-md py-1 px-2 text-sm">
          <button>Close Jobs</button>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row justify-between mt-3">
        <div className="flex flex-col sm:flex-row  justify-center sm:justify-normal items-center gap-x-6">
          <div className="flex w-[80%] sm:w-44   gap-x-3 justify-center items-center ">
            <p className="text-sm">Show:</p>
            <select className="border border-gray-700 outline-none  rounded-sm h-8 bg-transparent  w-12 px-0 text-sm">
              <option className="text-sm">25</option>
              <option>35</option>

              <option>45</option>

              <option>55</option>
            </select>
          </div>

          <div className="flex w-[80%] sm:w-full   gap-x-3">
            <label className="text-xs   sm:text-sm mt-1">Entries Search:</label>

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
            type="button"
            onClick={handleAddJobs}

            className="bg-[#38bf67]  !outline-none px-4 rounded-sm text-sm h-8 text-white"
          >
            Add Jobs
          </button>

       
        </div>
      </div>
      <div className="w-[80%] sm:w-auto  flex justify-center sm:justify-normal items-center  mt-2">
        <p className="text-sm ">Show 1 to 12 entries</p>
      </div>
      <div className="flex items-center justify-end relative px-1 gap-x-1">
        <p className="text-end px-2 py-[10px]">Sort</p>
        <div onClick={handleSort} className="  flex flex-col !outline-none ">
          <button  className="border-none !outline-none">
            <BsFillCaretUpFill className="text-xl  !outline-none mt-1" />
          </button>
          <button  className=" border-none !outline-none">
            <BsFillCaretDownFill className="text-xl !outline-none -mt-2" />
          </button>
        </div>
        {showSort && (
                    <div
                      ref={divSort}
                      className="absolute flex flex-col gap-y-1 px-4 right-0 bg-slate-50  rounded-xl  py-[10px] border-2 border-[#737475] top-8"
                    >
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Recently updated (default)
                      </p>
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Oldest
                      </p>
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Newest
                      </p>
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Emergency only

                      </p>
                    </div>
                  )}
      </div>
      <div onClick={handleJobsDetail} className="border flex flex-col cursor-pointer  items-center  rounded-lg">
        {
          jobData.map((items,index)=>(
            <div  className={`flex text-xs sm:text-base w-full hover:bg-blue-50 border-b ${
                    index === 5 ? "border-none" : ""
                  }`}>
          <div className="w-[13%]  flex items-center justify-center">
            <p   className={`flex text-xs sm:text-base justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm border-r py-[10px]  text-center text-[#737475]"
                      }`}>
              {items.cNumber}
            </p>
          </div>
          <div className=" w-[22%] flex items-center justify-center ">
            <p   className={`flex text-xs sm:text-base py-[10px] justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm border-r py-[10px]  text-center text-[#737475]"
                      }`}>
            {items.pId}
            </p>
          </div>
          <div className="w-[20%] flex items-center justify-center ">
            <p   className={`flex text-xs sm:text-base py-[10px] justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm border-r py-[10px]  text-center text-[#737475]"
                      }`}>
            {items.subject}
            </p>
          </div>
          <div className="w-[10%] flex items-center justify-center ">
            <p   className={`flex text-xs sm:text-base py-[10px]  justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm border-r py-[10px]  text-center text-[#737475]"
                      }`}>
              {items.report}
            </p>
          </div>
          <div className={`w-[8%] flex items-center justify-center ${index===0? "":"border-r"} `}>
          {index===0 ?    (  <p className="text-xs sm:text-base  text-center font-bold  flex items-center justify-center h-full">
           {items.severity}
            </p>):(<img src={items.severity} className="h-7 w-7"/>) }
         
          </div>
          <div className="w-[16%] flex items-center justify-center ">
            <p  className={`flex text-xs sm:text-base py-[10px] justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm border-r py-[10px]  text-center text-[#737475]"
                      }`}>
           {items.status}
            </p>
          </div>
          <div className={`w-[11%] flex items-center justify-center `}>
            <p  className={`flex text-xs sm:text-base  justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm   text-center text-[#737475]"
                      }`}>
              {items.duration}
            </p>
          </div>
        </div>
          ))
        }
        {/* <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[13%] sm:py-[10px] border-r flex items-center justify-center">
          <p className="text-xs sm:text-sm sm:py-[10px] text-center  flex items-center justify-center h-full">

            10000010
            </p>
          </div>
          <div className=" w-[22%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] text-center border-r  flex items-center justify-center h-full">
              124 Broad Street, SN1 2AB
            </p>
          </div>
          <div className="w-[20%] ">
          <p className="text-xs sm:text-sm border-r sm:py-[10px] text-center  flex items-center justify-center h-full">
              Bathroom tap not working
            </p>
          </div>
          <div className="w-[10%] ">
          <p className="text-xs sm:text-sm border-r sm:py-[10px] text-center  flex items-center justify-center h-full">
              Zahid
            </p>
          </div>
          <div className="w-[8%] ">
            <p className="text-xs sm:text-base border-r sm:py-[10px] text-center font-bold  flex items-center justify-center h-full">
              <BsFillSunsetFill className="text-[#feda32] text-2xl" />
            </p>
          </div>
          <div className="w-[16%] ">
            <p className="text-xs sm:text-base border-r sm:py-[10px] text-center   flex items-center justify-center h-full">
              <span className="bg-[#5822d5] text-white text-sm rounded-full px-2">
                Active
              </span>
            </p>
          </div>
          <div className="w-[11%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] text-center  flex items-center justify-center h-full">
          2 hrs ago
            </p>
          </div>
        </div>
        <div className="flex text-xs sm:text-base hover:bg-blue-50 border-t w-full  ">
          <div className="w-[13%] sm:py-[10px] border-r flex items-center justify-center">
          <p className="text-xs sm:text-sm sm:py-[10px] text-center  flex items-center justify-center h-full">

            10000010
            </p>
          </div>
          <div className=" w-[22%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r text-center  flex items-center justify-center h-full">
              124 Broad Street, SN1 2AB
            </p>
          </div>
          <div className="w-[20%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r text-center  flex items-center justify-center h-full">
              Bathroom tap not working
            </p>
          </div>
          <div className="w-[10%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r text-center  flex items-center justify-center h-full">
              Shahid
            </p>
          </div>
          <div className="w-[8%] ">
            <p className="text-xs sm:text-base border-r sm:py-[10px] text-center font-bold  flex items-center justify-center h-full">
              <BsFillSunsetFill className="text-[#b1b1b1] text-2xl" />
            </p>
          </div>
          <div className="w-[16%] ">
            <p className="text-xs sm:text-base border-r sm:py-[10px] text-center   flex items-center justify-center h-full">
            <span className="bg-[#5822d5] text-white text-sm rounded-full px-2">
                Active
              </span>
            </p>
          </div>
          <div className="w-[11%] ">
          <p className="text-xs sm:text-sm sm:py-[10px]  text-center  flex items-center justify-center h-full">
          2 hrs ago
            </p>
          </div>
        </div>
        <div className="flex text-xs sm:text-base hover:bg-blue-50 border-t w-full  ">
          <div className="w-[13%] sm:py-[10px] border-r flex items-center justify-center">
          <p className="text-xs sm:text-sm sm:py-[10px]  text-center  flex items-center justify-center h-full">

            10000010
            </p>
          </div>
          <div className=" w-[22%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r  text-center  flex items-center justify-center h-full">
              124 Broad Street, SN1 2AB
            </p>
          </div>
          <div className="w-[20%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r  text-center  flex items-center justify-center h-full">
              Bathroom tap not working
            </p>
          </div>
          <div className="w-[10%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r  text-center  flex items-center justify-center h-full">
              Adil
            </p>
          </div>
          <div className="w-[8%] ">
            <p className="text-xs sm:text-base border-r sm:py-[10px] text-center font-bold  flex items-center justify-center h-full">
              <BsFillSunsetFill className="text-[#feda32] text-2xl" />
            </p>
          </div>
          <div className="w-[16%] ">
            <p className="text-xs sm:text-base border-r sm:py-[10px] text-center   flex items-center justify-center h-full">
            <span className="bg-[#5822d5] text-white text-sm rounded-full px-2">
                Active
              </span>
            </p>
          </div>
          <div className="w-[11%] ">
          <p className="text-xs sm:text-sm sm:py-[10px]  text-center  flex items-center justify-center h-full">
          2 hrs ago
            </p>
          </div>
        </div>
        <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[13%] sm:py-[10px] border-r flex items-center justify-center">
          <p className="text-xs sm:text-sm sm:py-[10px]  text-center  flex items-center justify-center h-full">

            10000010
            </p>
          </div>
          <div className=" w-[22%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r text-center  flex items-center justify-center h-full">
              124 Broad Street, SN1 2AB
            </p>
          </div>
          <div className="w-[20%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r text-center  flex items-center justify-center h-full">
              Bathroom tap not working
            </p>
          </div>
          <div className="w-[10%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r text-center  flex items-center justify-center h-full">
              Azam khan
            </p>
          </div>
          <div className="w-[8%] ">
            <p className="text-xs sm:text-base border-r sm:py-[10px] text-center font-bold  flex items-center justify-center h-full">
              <BsFillSunsetFill className="text-[#b1b1b1] text-2xl" />
            </p>
          </div>
          <div className="w-[16%] ">
            <p className="text-xs sm:text-base border-r sm:py-[10px] text-center   flex items-center justify-center h-full">
            <span className="bg-[#5822d5] text-white text-sm rounded-full px-2">
                Active
              </span>
            </p>
          </div>
          <div className="w-[11%] ">
          <p className="text-xs sm:text-sm sm:py-[10px]  text-center  flex items-center justify-center h-full">
          2 hrs ago
            </p>
          </div>
        </div>
        <div className="flex hover:bg-blue-50 text-xs sm:text-base border-t w-full  ">
          <div className="w-[13%] sm:py-[10px] border-r flex items-center justify-center">
          <p className="text-xs sm:text-sm sm:py-[10px]  text-center  flex items-center justify-center h-full">

            10000010
            </p>
          </div>
          <div className=" w-[22%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r  text-center  flex items-center justify-center h-full">
              124 Broad Street, SN1 2AB
            </p>
          </div>
          <div className="w-[20%] ">
          <p className="text-xs sm:text-sm sm:py-[10px] border-r  text-center  flex items-center justify-center h-full">
              Bathroom tap not working
            </p>
          </div>
          <div className="w-[10%] ">
          <p className="text-xs sm:text-sm sm:py-[10px]  border-r text-center  flex items-center justify-center h-full">
              Asad
            </p>
          </div>
          <div className="w-[8%] ">
            <p className="text-xs sm:text-base border-r sm:py-[10px] text-center font-bold  flex items-center justify-center h-full">
              <BsFillSunsetFill className="text-[#feda32] text-2xl" />
            </p>
          </div>
          <div className="w-[16%] ">
            <p className="text-xs sm:text-base border-r sm:py-[10px] text-center   flex items-center justify-center h-full">
            <span className="bg-[#5822d5] text-white text-sm rounded-full px-2">
                Active
              </span>
            </p>
          </div>
          <div className="w-[11%] ">
          <p className="text-xs sm:text-sm sm:py-[10px]  text-center  flex items-center justify-center h-full">
              2 hrs ago
            </p>
          </div>
        </div> */}
      </div>
      <div className="flex border rounded-sm w-44 mt-4 ">
        <button className="border-r text-sm w-11 p-1">Excel</button>
        <button className="border-r text-sm w-11 p-1">CSV</button>

        <button className="border-r text-sm w-11 p-1">PDF</button>

        <button className="border-r text-sm w-11 p-1">Print</button>
      </div>
      <div className="flex items-center gap-x-3 py-4 ">
        <button className="text-sm font-semibold">Previous</button>
        <p className="border text-sm  flex rounded items-center justify-center w-7 h-7">
          1
        </p>
        <button className="text-sm font-semibold">Next</button>
      </div>
   </>
    } 

   
 
    
    </div>
    </div>

   
   </div>
  );
};

export default Jobs;
