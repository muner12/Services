import React, { useEffect, useRef, useState } from "react";
import { AiFillCopy, AiFillDelete, AiOutlineBorder, AiOutlineCaretDown, AiOutlineExclamationCircle } from "react-icons/ai";
// import { IoCopy } from "react-icons/io";
//import {FaSquareXmark} from 'react-icons/fa6';
import {MdCheckBoxOutlineBlank} from "react-icons/md"
import copy from "../images/copy.png";
import "../../src/Style/PropertyDetail.css";
import mbl from "../images/mbl.png";
import AddNewJob from "./AddNewJob";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QR from "../images/logo.png";
import EditProperty from "./EditPropertyDetail";
import EditPropertyDetail from "./EditPropertyDetail";
import AddCertificate from "./AddCertificate";
import { ImFolderDownload } from "react-icons/im";
import upword from "../images/uppword.png";
import {RxCross1} from "react-icons/rx"
import { BsCheckSquare, BsChevronDown,BsChevronLeft, BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const styleSignUp = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const PropertyDetail = () => {
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // signUp Modal
  const [openSignUp, setopenSignUp] = React.useState(false);
  const handlePopOver = () => setopenSignUp(true);
  const handleCloseSignUp = () => setopenSignUp(false);
 

 

  //DropDown
  const [showDiv, setShowDiv] = useState(false);
  const divRef = useRef(null);

  const handleDropDown = () => {
    setShowDiv(!showDiv);
  };

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setShowDiv(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };


  //first
  const [showglobal, setShowglobal] = useState(false);
  const divglobal = useRef(null);

  const handleGlobal = () => {
    setShowglobal(!showglobal);
  };

  const handleClickOutsideglobal = (event) => {
    if (divglobal.current && !divglobal.current.contains(event.target)) {
      setShowglobal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideglobal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideglobal);
    };
  }, []);

  //Second
  const [showTenant, setshowTenant] = useState(false);
  const divTenant = useRef(null);

  const handleTenant = () => {
    setshowTenant(!showTenant);
  };

  const handleClickOutsideTenant = (event) => {
    if (divTenant.current && !divTenant.current.contains(event.target)) {
      setshowTenant(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideTenant);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideTenant);
    };
  }, []);

  //Third
  const [showAdditional, setshowAdditional] = useState(false);
  const divAdditional = useRef(null);

  const handleAdditional = () => {
    setshowAdditional(!showAdditional);
  };

  const handleClickOutsideadditional = (event) => {
    if (divAdditional.current && !divAdditional.current.contains(event.target)) {
      setshowAdditional(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideadditional);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideadditional);
    };
  }, []);

  const [showSort, setShowSort] = useState(false);
  const divSort = useRef(null);

  const handleSort = () => {
    setShowSort(!showSort);
  };

  const handleClickOutsideSort = (event) => {
    if (divSort.current && !divSort.current.contains(event.target)) {
      setShowSort(!showSort);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideSort);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSort);
    };
  }, []);

  const navigate = useNavigate();
  // const navi = useNavigate();


  const handleuseNavigate=()=>{
    navigate('/properties')

  }
  const handleNewJobs=()=>{
    navigate('/property/add-jobs')

  }


   const handleEditProperty=()=>{
    navigate('/property/edit-property-detail')

  }
  const handleAddCertificate=()=>{
    navigate('/property/add-certificate')

  }

 //addTenant button
 const [addTenant,setAddTenant]=useState(false);
 const addDivTenant=useRef(null);

  const handleAddTenant=()=>{
   
    setAddTenant(!addTenant);
  }
  const handleAddTenantOutSideClick = (event) => {
    if (addDivTenant.current && !addDivTenant.current.contains(event.target)) {
      setAddTenant(!addTenant);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleAddTenantOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleAddTenantOutSideClick);
    };
  }, []);
  



  return (
    <div>
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={handleuseNavigate} className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Property Details</h1>
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
            <h1 className="text-xl font-bold text-[#737475]">
              Property Details
            </h1>
            <div className="flex gap-x-3 relative">
              <button
                className="bg-[#38bf67] font-semibold !outline-none text-white px-2 text-sm py-1 flex text-center items-center rounded-md"
                onClick={handleNewJobs}
              >
                Add New Job
              </button>
              <button
                onClick={handleOpen}
                className="text-[#38bf67] !outline-none font-semibold bg-green-100 px-2 text-sm py-1  flex text-center items-center rounded-md"
              >
                Get Link
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <h2 className="text-center text-xl text-[#333333] font-bold">
                      {" "}
                      Get Link
                    </h2>
                  </Typography>
                  <div>
                    <div className="py-2 flex justify-center items-start  w-auto flex-col">
                      <div className="m-auto">
                        <p className="flex gap-x-7">
                          <span className="font-semibold text-sm">Name:</span>{" "}
                          <span className="text-sm text-[#737475]">
                            Hazrat Zahid
                          </span>
                        </p>
                        <p className="flex gap-x-4">
                          <span className="font-semibold text-sm">
                            Contact:
                          </span>
                          <span className="text-sm text-[#737475]">
                            03369454688
                          </span>{" "}
                        </p>
                        <p className="flex gap-x-8">
                          <span className="font-semibold text-sm">Email:</span>
                          <span className="text-sm text-[#737475]">
                            zahid11@gmail.com
                          </span>{" "}
                        </p>
                        <p className="flex gap-x-7">
                          <span className="font-semibold text-sm">
                            Tenancy Expiry Date:{" "}
                          </span>
                          <span className="text-sm text-[#737475]">
                            22 December 2022
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="w-44  h-44  m-auto">
                      <img src={QR} className="w-full h-full object-fill" />
                    </div>
                    <div className="flex justify-between py-2">
                      <button
                        type="button"
                        className="border-[2px] border-[#407c1e] px-4 rounded-sm font-semibold text-[#407c1e] py-[1px]"
                      >
                        Cancel
                      </button>
                      <button className=" bg-[#407c1e] px-3  font-semibold text-white rounded-sm py-[1px]">
                        Download
                      </button>
                    </div>
                  </div>
                </Box>
              </Modal>
{/*  */}
              <button
                onClick={handlePopOver}
                className="bg-white text-[#38bf67] !outline-none font-semibold border-[2px] text-sm py-1 border-[#38bf67] px-2  flex text-center items-center rounded-md"
              >
                Sign Up Info
              </button>
              <Modal
                open={openSignUp}
                onClose={handleCloseSignUp}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={styleSignUp}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <h1 className="text-2xl text-center font-bold">
                      Sign Up Info
                    </h1>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 5 }}>
                    <div className="py-2 flex justify-between items-start   w-full ">
                      <div className="text-[#737475] flex flex-col gap-y-2 ">
                        <p className="font-semibold text-sm">Name:</p>
                        <p className="font-semibold text-sm">Contact:</p>
                        <p className="font-semibold text-sm">Email:</p>
                        <p className="font-semibold text-sm">
                          Tenancy Expiry Date:{" "}
                        </p>
                      </div>
                      <div className=" flex flex-col justify-end  gap-y-2  ">
                        <p className="text-sm text-[#737475] ">Hazrat Zahid</p>
                        <p className="text-sm text-[#737475]">03369454688</p>
                        <p className="text-sm text-[#737475]">
                          zahid11@gmail.com
                        </p>
                        <p className="text-sm text-[#737475]">
                          22 December 2022
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3 mt-3">
                      <div>
                        <h4 className="text-sm font-semibold text-[#737475] ">
                          Sent Info as:
                        </h4>
                        <div className="px-2 flex gap-x-6 ">
                          <div className=" gap-x-3">
                            <input type="checkbox" />
                            <label className="text-sm ml-3 font-bold text-[#737475]  ">
                              Email
                            </label>
                          </div>
                          <div>
                            <input type="checkbox" />
                            <label className="text-sm ml-3 font-bold text-[#737475] ">
                              Message
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between py-2">
                        <button
                          type="button"
                          className="border-[2px] w-28 border-[#407c1e] px-4 rounded-sm font-semibold text-[#407c1e] py-[1px]"
                        >
                          Cancel
                        </button>
                        <button className=" bg-[#407c1e] px-4 w-28  font-semibold text-white rounded-sm py-[1px]">
                          Send
                        </button>
                      </div>
                    </div>
                  </Typography>
                </Box>
              </Modal>
              <button
                onClick={handleDropDown}
                className="bg-[#38bf67] !outline-none text-white px-2  flex text-sm py-1 text-center items-center rounded-md"
                type="button"
              >
                <AiOutlineCaretDown className="text-xl" />
              </button>
              {showDiv && (
                <div
                  ref={divRef}
                  className="absolute flex flex-col gap-y-1 top-10  right-0 border-2 border-[#737475] py-2 px-4 rounded-xl bg-slate-50"
                >
                  <p
                    className={`text-sm flex items-center gap-x-2 px-1 rounded-sm cursor-pointer ${
                      isHovered ? "text-[#737475]" : "bg-[#38bf67] text-white"
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={upword}
                      className={`w-4 object-fill h-4 ${
                        isHovered ? "filter invert " : ""
                      }`}
                      alt="Upword"
                    />
                    Release Property
                  </p>
                  <p className="text-sm flex items-center gap-x-2 hover:bg-[#38bf67] hover:text-white px-1 rounded-sm cursor-pointer text-[#737475]">
                    <ImFolderDownload /> Archive Property
                  </p>
                  <p className="text-sm flex items-center gap-x-2 hover:bg-[#38bf67] hover:text-white px-1 rounded-sm cursor-pointer text-[#737475]">
                    <AiFillDelete /> Delete Property
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-y-4 flex-col py-3 lg:flex-row gap-x-7">
            <div className="lg:w-1/2 p-4 flex flex-col gap-y-3 border rounded-md shadow-md">
              <div>
                <h2 className="font-bold text-[#737475]">Address</h2>
                <p className="text-sm text-[#737475]">
                  Peshawar KP Pakistan Mardan
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-[#737475]">Unique Code</h2>
                  <p className="text-sm text-[#737475]">102020</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center border-[1px] rounded-sm px-2 gap-x-2 border-[#38bf67] text-sm font-semibold text-[#38bf67] py-[1px] mt-1"
                  >
                    <img src={copy} className="w-4 h-4" /> Copy
                  </button>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-[#737475]">Managed By</h2>
                <p className="text-sm text-[#737475]">Saqib Hussain</p>
              </div>
              <div className="">
                <div>
                  <h2 className="font-bold text-[#737475]">Notes</h2>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-[#737475]">
                      lorem ipsum ojsodjsnsnovs
                    </p>
                    <div className="flex justify-end">
                      <button
                        onClick={handleEditProperty}
                        type="button"
                        className="flex items-center !outline-none justify-center  rounded-sm px-2 gap-x-2 bg-[#38bf67] text-sm font-semibold text-white py-[6px] "
                      >
                        Edit Property
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-4 shadow-md border rounded-md">
              <h2 className="font-bold text-[#737475]">Compliance Reports</h2>
              <div className="ml-2  flex flex-col gap-y-0">
                <div className="flex flex-row align-items-center ">
                  <MdCheckBoxOutlineBlank size={20} style={{borderRadius:"6px"}}/>
                  <label for="vehicle1" className="text-sm m-2  ">
                    Electrical Safety Check
                  </label>
                </div>
                <div className="flex flex-row align-items-center mt-0">
                  <BsCheckSquare style={{color:"green"}}/>
                  <label for="vehicle1" className="text-sm m-2 ">
                    Electrical Safety Check
                  </label>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-row align-items-center"> 
                 <span className="text-danger" style={{borderStyle:"solid",borderWidth:"1px",borderColor:"black",borderRadius:"3px"}}>  <RxCross1 size={14}/></span> 
                    <label for="vehicle1" className="text-sm m-2 ">
                      Fire Safety Check
                    </label>
                  </div>
                  <p className="text-[#fc5461] text-sm font-semibold">
                    Not Compliance
                  </p>
                </div>
              </div>
              <h2 className="font-bold text-[#737475]">Additional Reports</h2>
              <div className="ml-2  flex flex-col gap-y-0">
                <div className="">
                  <input type="checkbox" />
                  <label for="vehicle1" className="text-sm m-2 ">
                    Energy Performance Check
                  </label>
                </div>
                <div className="mt-0">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1" className="text-sm m-2 ">
                    Inspection Report
                  </label>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleAddCertificate}
                    className="text-[#38bf67] !outline-none font-semibold bg-green-100 px-3 text-sm py-1  flex text-center items-center rounded-md"
                  >
                    Add Certificates
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">
                Landlord Info. *
              </h1>
            </div>
            <div className="border bg-red-500]  shadow-md  flex flex-col  items-center  rounded-lg">
              <div className="flex text-xs sm:text-base w-full relative ">
                <div className=" w-[30%] ">
                  <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                    Name
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Contact
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Email
                  </p>
                </div>
                <div onClick={handleGlobal}  className="relative w-[10%] ">
                  <p className="text-xs cursor-pointer sm:text-base sm:py-2 text-center font-bold right-0   flex items-center justify-center h-full">
                    Action <BsChevronDown className="text-md ml-2 font-bold" />
                  </p>
                  {showglobal && (
                    <div
                      ref={divglobal}
                      className="absolute flex flex-col gap-y-1 w-44 right-1  bg-slate-50 rounded-xl px-4 py-2 border-2 border-[#737475] top-8 "
                    >
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Send Message
                      </p>
                      
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Delete
                      </p>
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        set Primary
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className=" border-r w-[30%]">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Muneer Ahmad
                  </p>
                </div>
                <div className="w-[30%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009
                  </p>
                </div>
                <div className="w-[30%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    muneer100@gamil.com
                  </p>
                </div>
                <div className="w-[10%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    select  <BsChevronDown className="text-xs ml-2  " />
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className=" border-r w-[30%]">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[30%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[30%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[10%] ">
                  <div className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    <button className="bg-white text-[#38bf67] font-semibold border-[1px] text-xs py-[2px]  border-[#38bf67] px-2  flex text-center items-center rounded-md">
                      Add Landlord
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">
                Tenant Info. *
              </h1>
            </div>{" "}
            <div className="border   shadow-md  flex flex-col  items-center  rounded-lg">
              <div className="flex text-xs sm:text-base w-full  ">
                <div className=" w-[5%] ">
                  <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Name
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Contact
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2 font-bold  flex items-center justify-center text-center px-4 h-full">
                    <span>Email</span>
                    {/* <span>Tenancy Expiry Date</span> */}
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2 font-bold  flex items-center justify-center text-center px-4 h-full">
                    <span>Tenancy Expiry Date</span>
                    {/* <span>Tenancy Expiry Date</span> */}
                  </p>
                </div>
                <div className="w-[15%] relative ">
                  <p onClick={handleTenant} className="text-xs cursor-pointer sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Action <BsChevronDown className="text-md ml-2 font-bold" />
                  </p>
                  {showTenant && (
                    <div
                      ref={divTenant}
                      className="absolute flex flex-col gap-y-1 w-40   bg-slate-50 rounded-xl px-2 py-2 border-2 border-[#737475] top-10 -left-"
                    >
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Send Message
                      </p>
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        status
                      </p>
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Delete
                      </p>
                      
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className=" border-r w-[5%] flex items-center justify-center">
                  <img src={mbl} className="h-6 w-4"></img>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Muneer Ahmad{" "}
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009{" "}
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    muneer100@gamil.com
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    02/07/2022
                  </p>
                </div>
                <div className="w-[15%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    select <BsChevronDown className="text-xs ml-2 " />
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className=" border-r w-[5%] flex items-center justify-center">
                  <img src={mbl} className="h-6 w-4"></img>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Hazrat Zahid
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    099887887
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    zahid11@gmail.com
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    02/07/2022
                  </p>
                </div>
                <div className="w-[15%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    select <BsChevronDown className="text-xs ml-2 font-bold" />
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className=" border-r w-[5%] flex items-center justify-center"></div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[15%]">
                  <div className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    <button onClick={handleAddTenant} className="bg-white text-[#38bf67] font-semibold border-[1px] text-xs py-[2px]  border-[#38bf67] px-2  flex text-center items-center rounded-md">
                      Add Tenant
                    </button>
                    
                  </div>
                  { addTenant && (<div
                      ref={addDivTenant}
                      className="absolute flex flex-col gap-y-1  w-40 ml-4  bg-slate-50 rounded-xl  items-center py-2 border-2 border-[#737475] top-50 "
                    >
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                       Add Single
                      </p>
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Add in bulk
                      </p>
                     
                      
                    </div>)
                    }
                </div>
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">
                Additional Tenant Info. *
              </h1>
            </div>{" "}
            <div className="border bg-red-500]  shadow-md  flex flex-col  items-center  rounded-lg">
              <div className="flex text-xs sm:text-base w-full  ">
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Name
                  </p>
                </div>
                <div className="w-[40%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Contact
                  </p>
                </div>
                <div className="w-[40%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Email
                  </p>
                </div>
                <div className="w-[40%] relative ">
                  <p onClick={handleAdditional} className="text-xs font-black cursor-pointer sm:text-base sm:py-2 font-bold  flex items-center justify-center text-center px-4 h-full">
                    Action <BsChevronDown className="text-md ml-2 font-bold" />
                  </p>
                  {showAdditional && (
                    <div
                      ref={divAdditional}
                      className="absolute flex flex-col gap-y-1 w-56 left-20 bg-slate-50 rounded-xl px-4 py-2 border-2 border-[#737475] top-8 "
                    >
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Add to registered Tenant
                      </p>
                      
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Send Message
                      </p>
                    
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Muneer Ahmad{" "}
                  </p>
                </div>
                <div className="w-[40%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009{" "}
                  </p>
                </div>
                <div className="w-[40%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    muneer100@gamil.com
                  </p>
                </div>
                <div className="w-[40%] border-l">
                  <p className="text-xs sm:text-sm sm:py-2 text-center font-black flex items-center justify-center h-full">
                   Action <BsChevronDown className="text-md ml-2 font-bold" />
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Muneer Ahmad{" "}
                  </p>
                </div>
                <div className="w-[40%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009{" "}
                  </p>
                </div>
                <div className="w-[40%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    muneer100@gamil.com
                  </p>
                </div>
                <div className="w-[40%] border-l">
                  <p className="text-xs sm:text-sm sm:py-2 text-center font-black flex items-center justify-center h-full">
                   Action <BsChevronDown className="text-md ml-2 font-bold" />
                  </p> 
                </div>
              </div>
            </div>
            {/* Associate Jobs */}
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">
                Associated jobs *
              </h1>
            </div>
            <div
                  onClick={handleSort}
                  className="  flex relative    w-full  flex-col  outline-none "
                >
                  <button className="border-none flex justify-end !outline-none">
                    <BsFillCaretUpFill className="text-xl  !outline-none mt-1" />
                  </button>
                  <button className=" border-none flex justify-end !outline-none">
                    <BsFillCaretDownFill className="text-xl outline-none -mt-2" />
                  </button>
                  {showSort && (
                    <div
                      ref={divSort}
                      className="absolute flex flex-col gap-y-1 px-4 w-44 right-0 bg-slate-50  rounded-xl  py-2 border-2 border-[#737475] top-[-52px]"
                    >
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Open
                      </p>
                      <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                        Close
                      </p>
                    </div>
                  )}
                </div>
            <div className="border  shadow-md  flex flex-col  items-center  rounded-lg">
              <div className="flex text-xs sm:text-base w-full  ">
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Case No.
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Subject
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-base sm:py-2 font-bold  flex items-center justify-center text-center px-4 h-full">
                    <span>Description</span>
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-base sm:py-2 font-bold  flex items-center justify-center text-center px-4 h-full">
                    <span>Status</span>
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009{" "}
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Hazrat Zahid
                  </p>
                </div>
                <div className="w-[30%] border-r ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Lorem ipsum{" "}
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center font-bold text-[#38bf67]  flex items-center justify-center h-full">
                    Open Jobs
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Basir khan{" "}
                  </p>
                </div>
                <div className="w-[30%] border-r ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Lorem ipsum{" "}
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center font-bold text-[#fc5461]  flex items-center justify-center h-full">
                    Close Jobs
                  </p>
                </div>
              </div>
            </div>
            {/* Chat History */}
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">Chat History</h1>
            </div>{" "}
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
              <div className=" rounded-lg p-2 text-white bg-[#407c1e]">
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
            </div>
          </div>
        </div>
     
      

    </div>
  );
};

export default PropertyDetail;
