import React, { useEffect, useRef, useState } from "react";
import { AiFillCopy, AiOutlineCaretDown, AiOutlineExclamationCircle } from "react-icons/ai";
// import { IoCopy } from "react-icons/io";
import "../../src/Style/PropertyDetail.css";
import AddNewJob from "./AddNewJob";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import kitchen from "../images/kitchen.png";
import cooker from "../images/cooker.png";
import fan from "../images/fan.png";
import { MdArrowForwardIos } from "react-icons/md";
import LandLordApproval from "./LandLordApproval";
import GetQoute from "./GetQoute";
import JobAss from "./JobAss";
import { useNavigate } from "react-router-dom";

const JobDetail = () => {
  const [jobDetail, setjobDetail] = useState(true);
  const [Landlord, setLandlord] = useState(false);

  const [AddNewsJobs, setAddNewsJobs] = useState(false);
  const [assignEngineer, setAssignEngineer] = useState(false);
  // const navigate=useNavigate();

 



 
 

  // signUp Modal
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files); // Do something with the selected files
  };
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger click on file input when button is clicked
  };

 

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


  //Select
  const [showSelect, setShowSelect] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const divSelect = useRef(null);

  const handleSelect = (address) => {
    setSelectedAddress(address);
    setShowSelect(false);
  };

  const handleClickOutside = (event) => {
    if (divSelect.current && !divSelect.current.contains(event.target)) {
      setShowSelect(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };

  const navigate=useNavigate();

  const toJob=()=>{
    navigate('/job')
  }
  const handleLandlord = () => {
   navigate('/job/landlord-approval')
  };
  
  const handleGetQoute = () => {
    navigate('/job/get-qoute')
  };
  const handleAssignEngineer=()=>{
navigate('/job/assign-engineer')

   
  }




  return (
    <div>
      <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toJob} className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Job Details</h1>
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
        <div className="px-14 py-3">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold text-[#737475]">Job Details</h1>
            <div className="flex gap-x-3 relative">
              <button
                onClick={handleLandlord}
                className="bg-green-100 text-[#38bf67] font-semibold !outline-none  text-xs py-2 w-28  text-center rounded-md"
              >
                Landlord Approval
              </button>
              <button
                onClick={handleGetQoute}
                className="text-[#38bf67] !outline-none font-semibold border-[2px] border-[#38bf67]  text-xs py-2 w-28  text-center rounded-md"
              >
                Get Quote
              </button>

              <button
                 onClick={toJob}
                className="text-white bg-[#38bf67] !outline-none font-semibold text-xs py-2 w-28 rounded-md"
              >
                Close Job
              </button>

              <button
              onClick={handleSort}
                className="bg-[#38bf67] text-white px-2 !outline-none  flex text-sm py-1 text-center items-center rounded-md"
                type="button"
              >
                <AiOutlineCaretDown className="text-xl" />
              </button>
              {showSort && (
                    <div
                      ref={divSort}
                      className="absolute flex flex-col gap-y-1 px-4 right-0 bg-slate-50  rounded-xl  py-2 border-2 border-[#737475] top-8"
                    >
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Duplicate
                      </p>
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Job Summary
                      </p>
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Print
                      </p>
                      
                    </div>
                  )}
            </div>
          </div>
          <div className="flex justify-center gap-y-4 flex-col py-3 lg:flex-row gap-x-7">
            <div className="lg:w-1/2 p-4 flex flex-col gap-y-3 border rounded-md shadow-md">
              <div className="flex justify-end text-xs gap-x-2 text-[#b1b1b1]">
                <p>24 Sep, 2022</p>
                <p>02:44 pm</p>
              </div>
              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">Case Number:</p>
                <p className="text-sm text-[#737475]">100070</p>
              </div>

              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">
                  Property Address:
                </p>
                <p className="text-sm text-[#737475]">
                  124 Broad Street, Swindon, SN1 2AB
                </p>
              </div>

              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">Reported By:</p>
                <p className="text-sm text-[#38bf67]">Andrew</p>
              </div>

              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">Mobile No:</p>
                <p className="text-sm text-[#737475]">0212101323213</p>
              </div>

              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">
                  Email Address:
                </p>
                <p className="text-sm text-[#737475]">andrew@gmail.com</p>
              </div>

              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">
                  Job reported through:
                </p>
                <p className="text-sm text-[#737475]">Mobile</p>
              </div>
            </div>
            <div className="lg:w-1/2 p-4 flex flex-col gap-y-5 shadow-md border rounded-md">
              <div className="flex items-center justify-between ">
                <label className="font-bold text-sm text-[#737475] mt-1">
                  Severity:
                </label>
                <div className="flex justify-between px-2 border items-center rounded-md py-[3px]  w-[70%]">
                  <input type="search" placeholder="None-Emergency" />
                  <BsChevronDown />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <label className="font-bold text-sm text-[#737475] mt-1">
                  Status:
                </label>
                <div className="flex justify-between px-2 border items-center rounded-md py-[3px]  w-[70%]">
                  <input type="search" placeholder="New" />
                  <BsChevronDown />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <label className="font-bold text-sm text-[#737475] mt-1">
                  Assignment:
                </label>
                <div className="flex items-center rounded-md px-1 w-[70%]  py-[2px] border ">
                  <input
                    className="  w-1/2 focus:outline-none py-[4px] "
                    type="text"
                    placeholder="1000001"
                  />
                  <button onClick={ handleAssignEngineer} className="bg-[#38bf67] !outline-none px-2 rounded-md py-2  text-xs  text-white font-semibold  ">
                    Assign Engineer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border   shadow-md flex flex-col gap-y-6  p-4 rounded-lg">
              <div>
                <h1 className="text-lg font-bold text-[#737475]">
                  Issue Report:
                </h1>
                <div className="flex gap-x-2 py-3">
                  <div className="w-20 h-20">
                    <img
                      src={kitchen}
                      className="w-full h-full object-fill"
                    ></img>
                  </div>
                  <div className=" flex justify-center items-center">
                    <MdArrowForwardIos className="text-[#737475] text-xl" />
                  </div>
                  <div className="w-20 h-20">
                    <img
                      src={cooker}
                      className="w-full h-full object-fill"
                    ></img>
                  </div>
                  <div className=" flex justify-center items-center">
                    <MdArrowForwardIos className="text-[#737475] text-xl" />
                  </div>
                  <div className="w-20 h-20">
                    <img src={fan} className="w-full h-full object-fill"></img>
                  </div>
                </div>
              </div>
              <div>
                <h1 className=" font-bold text-[#737475]">Description:</h1>
                <p className="text-[#737475] text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et.
                </p>
              </div>
              <div>
                <h1 className=" font-bold text-[#737475]">Reported Issue:</h1>
                <p className="text-[#737475] text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et.
                </p>
              </div>
              <div>
                <div>
                  <h1 className=" font-bold text-[#737475]">Attachment:</h1>
                </div>
                <div className="flex gap-x-3 py-2 px-3">
                  <div className="h-14 w-16 border rounded-xl"></div>
                  <div className="h-14 w-16 border rounded-xl"></div>

                  <div className="h-14 w-16 border rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-4 py-4 mt-8">
              <div className="w-1/2 flex gap-x-4 items-center">
                <div className=" ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white h-8 w-24 rounded-lg text-sm font-semibold "
                  >
                    To
                  </button>
                </div>
                <div    onClick={toggleSelect} className="input-field1 relative  flex border w-full  h-8 items-center rounded-lg px-2">
                  <input type="search"    value={selectedAddress} readOnly placeholder="Text" />
                  <BsChevronDown />
                  {showSelect && (
                    <div
                      ref={divSelect}
                      className="absolute flex flex-col gap-y-1 w-1/2 px-4 right-0 bg-slate-50 rounded-xl py-2 border-2 border-[#737475] top-8"
                    >
                      <p
                        className="text-sm text-[#737475] flex gap-x-8 hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white"
                        onClick={() => handleSelect("  1.Contractor")}
                      >
                        <span>1.</span><span>Contractor</span>
                      </p>
                      <p
                        className="text-sm text-[#737475] flex gap-x-8 hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white"
                        onClick={() => handleSelect("2.Tenant")}
                      >
                        <span>2.</span><span>Tenant</span>
                      </p>
                      <p
                        className="text-sm text-[#737475] flex gap-x-8 hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white"
                        onClick={() => handleSelect("3.Lanlord")}
                      >
                        <span>3.</span><span>Landlord</span>
                      </p>
                      <p
                        className="text-sm text-[#737475] flex gap-x-8 hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white"
                        onClick={() => handleSelect("Swat")}
                      >
                        <span>4.</span><span>internal</span>
                      </p>
                      
                    </div>
                  )}
                </div>
                
              </div>
              <div className="w-1/2 flex gap-x-4 items-center">
                <div className=" ">
                  <p className="text-[#737475] font-semibold">Recipient:</p>
                </div>
                <div className="input-field1 flex border w-full  h-8 items-center rounded-lg px-2">
                  <input type="search" placeholder="Recipient Name *" />
                  {/* <BsChevronDown /> */}
                </div>
              </div>
            </div>
            <div className="border   shadow-md p-10 flex flex-col  items-center  rounded-lg">
              <textarea
                class="w-full !outline-none border rounded-lg p-2"
                placeholder="Notes *"
                rows="4"
              ></textarea>
              <div className="py-3 w-full">
                <div className="input-field1 border w-full rounded-lg px-2 py-1  flex justify-between">
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    placeholder=""
                  />
                  <p className="text- text-[#b1b1b1]"> Upload Attachment</p>

                  <button
                    onClick={handleButtonClick}
                    className="border text-[#407c1e]  px-1 rounded-sm !outline-none  text-sm font-bold "
                  >
                    Choose File
                  </button>
                </div>
              </div>
              <div className=" w-full flex justify-end">
                <button
                  type="button"
                  className="bg-[#38bf67] text-white h-6 w-24 rounded-lg text-sm font-semibold "
                >
                  Save
                </button>
              </div>
            </div>
            {/* Associate Jobs */}
            {/* Chat History */}
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">Activity</h1>
            </div>
            <div className="border p-3  shadow-md  flex flex-col gap-y-4  items-center  rounded-lg">
              <div className="border-[2px] rounded-lg p-2 border-[#407c1e]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[#737475]">Contractor</h1>
                  <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>

                <p className="text-sm py-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>

              <div className=" rounded-lg p-2 text-white bg-[#38bf67]">
                <div className="flex justify-between">
                  <h1 className="font-bold ">You</h1>
                  <div className=" flex gap-x-10 lg:gap-x-24 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>

                <p className="text-sm py-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
              <div className="border-[2px] rounded-lg p-2 border-[#407c1e]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[#737475]">Email</h1>
                  <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>

                <p className="text-sm py-2 text-[#737475]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
              <div className="border-[2px] rounded-lg p-2 border-[#407c1e]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[#737475]">Email</h1>
                  <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>

                <p className="text-sm py-2 text-[#737475]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
              <div className="border-[2px] rounded-lg p-2 border-[#407c1e]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[#737475]">Resolution Notes</h1>
                  <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>

                <p className="text-sm py-2 text-[#737475]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>

                <div className="flex items-center  gap-x-3">
                  <p className="w-20 h-8 flex items-center text-sm text-[#737475] font-semibold">
                    Attachment:
                  </p>
                  <div className="w-20 h-8 border rounded-lg"></div>
                  <div className="w-20 h-8 border rounded-lg"></div>
                  <div className="w-20 h-8 border rounded-lg"></div>
                  <div className="w-20 h-8 border rounded-lg"></div>
                </div>
              </div>
              <div className="border-[2px] rounded-lg w-full p-2 border-[#407c1e]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[#737475]">Job Status</h1>
                  <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>
                <div className="py-1">
                  <button
                    type="button"
                    className="w-full bg-[#fc5461] text-white rounded-lg py-1"
                  >
                    Pending
                  </button>
                </div>
              </div>
            </div>
            <div className="px-6 m-8">
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="text-[#407c1e] border-[2px] w-36 rounded-sm py-2 border-[#407c1e]  font-bold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-[#407c1e] text-white border-[2px] w-36 rounded-sm py-2 border-[#407c1e] font-bold"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
     
     
    </div>
  );
};

export default JobDetail;
