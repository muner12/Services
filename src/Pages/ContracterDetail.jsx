import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineExclamationCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { IoIosArrowUp } from "react-icons/io";
import insur from "../images/check.png";
import cross from "../images/cross.png";
import help from "../images/help.png";
import prohibited1 from "../images/prohibited1.png";

import contractorDetailData from "../Config/ContractorDetail";
import rightSideData from "../Config/ContracterDetailRight";
import {
  BsChevronDown,
  BsChevronLeft,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
} from "react-icons/bs";
import ViewAll from "./ViewAll";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Plumber from "./Plumber";
import AddContractor from "./AddContractor";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: 2,
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// Send Modal css
const Sendstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: 2,
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// import path from '../images/path.png'

const ContracterDetail = () => {
  const [contracterDetail, setcontracterDetail] = useState(true);
  const [viewAll, setviewAll] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [plumber, setplumber] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Send Modal

  const [Sendopen, setSendOpen] = React.useState(false);
  const handleSendOpen = () => setSendOpen(true);
  const handleSendClose = () => setSendOpen(false);
  

  

//dropdown
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

const navigate=useNavigate()

const toContractor=()=>{
  navigate('/contractor/plumber')

}
const handleEditDetail=()=>{
  navigate('/contractor/add-contracter')
}
const handleContracterDetail = () => {
 navigate('/contractor/contractor-jobs')
};


  return (
    <div>
     <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toContractor} className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Contarctor Details</h1>
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

       <div className="px-16 py-3">
     
        <div>
          <div className=" flex items-center justify-between gap-x-4 ">
            <h1 className="text-xl font-bold text-[#737475]">
              Home / Contractor Details / Plumber
            </h1>
            <div className="flex gap-x-3 relative">
              <button
                onClick={handleOpen}
                className="text-[#38bf67] !outline-none font-semibold bg-green-100 px-2 text-sm py-1  flex text-center items-center rounded-md"
              >
                Request Info
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
                    <h2 className="text-center text-[#737475] font-bold">
                      Requested Info
                    </h2>
                  </Typography>
                  {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography> */}
                  <div className="input-field mt-5">
                    <input type="select" placeholder="Required document" />
                    <BsChevronDown className="font-bold" />
                  </div>
                  <textarea
                    className="border mt-3 w-full outline-none rounded-md px-2 py-1"
                    rows="4"
                    cols=""
                    placeholder="Notes"
                  ></textarea>
                  <button
                    type="button"
                    className="bg-[#407c1e] mt-4 text-white flex w-full !outline-none justify-center items-center rounded-md  py-2 font-semibold"
                  >
                    Send
                  </button>
                </Box>
              </Modal>
              <button
                onClick={handleSendOpen}
                className="bg-white text-[#38bf67] !outline-none font-semibold border-[2px] text-sm py-1 border-[#38bf67] px-2  flex text-center items-center rounded-md"
              >
                Send Message
              </button>
              <Modal
                open={Sendopen}
                onClose={handleSendClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={Sendstyle}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <h2 className="text-center py-2 border rounded-sm text-[#737475] font-bold">
                      Send Message
                    </h2>
                    <div className="flex flex-col m gap-y-3 lg:flex-row justify-center mt-4 gap-x-3">
                      <div className="w-full lg:w-1/2 mt-3 h-96 m-auto  rounded-md border">
                        <div className=" flex   px-3 border-b gap-x-3 items-center">
                          <div>
                            <input type="checkbox" className=" " />
                          </div>
                          <p className="text-sm font-semibold text-[#737475]">
                            Email
                          </p>
                        </div>
                      </div>
                      <div className="lg:w-1/2 mt-3 h-96 m-auto  rounded-md border">
                        <div className="  border-b flex justify-between px-3  items-center">
                          <div className="flex    gap-x-3 items-center">
                            <div>
                              <input type="checkbox" className=" " />
                            </div>
                            <p className="text-sm font-semibold text-[#737475]">
                              Text Message
                            </p>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <p className="text-sm  text-[#737475]">Template</p>{" "}
                            <BsChevronDown className="text-sm" />
                          </div>
                        </div>
                        <div className="px-4 py-6">
                          <p className="text-sm  text-[#737475]">Jobs Info</p>
                          <p className="text-xs text-[#737475] ">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr.
                          </p>
                          <div className="flex items-center mt-3 gap-x-2 ">
                            <p className="text-sm  text-[#737475] ">
                              Attachment:
                            </p>
                            <div className="w-14 h-7 border rounded-sm"></div>
                            <div className="w-14 h-7 border rounded-sm"></div>

                            <div className="w-14 h-7 border rounded-sm"></div>

                            <div className="w-14 h-7 border rounded-sm"></div>
                          </div>
                          <p className="text-sm  text-[#737475] mt-3">
                            Postcode: 01010100
                          </p>
                          <p className="text-sm  text-[#737475] mt-3">
                            Emergency:
                          </p>
                          <p className="text-sm  px-4 ">
                            We need someone today:
                          </p>
                          <p className="text-sm  text-[#737475] mt-3">Link:</p>
                        </div>
                      </div>
                    </div>
                    <div className=" flex    px-3  gap-x-3 items-center">
                      <div>
                        <input type="checkbox" className=" " />
                      </div>
                      <p className="text-sm font-semibold text-[#737475]">
                        Best Effort
                      </p>
                    </div>
                    <div className="flex justify-between px-10 mt-3">
                      
                      <button
                        onClick={handleSendOpen}
                        className="bg-[#] font-semibold !outline-none text-[#737475] border w-56  justify-center  px-2 text-sm py-[6px] flex text-center items-center rounded-sm"
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-[#407c1e] font-semibold !outline-none text-white px-2 w-56 justify-center  text-sm py-1 flex text-center items-center rounded-sm"
                        // onClick={handleNewJobs}
                      >
                        Send
                      </button>
                    </div>
                  </Typography>
                </Box>
              </Modal>
              <button
                className="bg-[#38bf67] font-semibold !outline-none text-white px-2 text-sm py-1 flex text-center items-center rounded-md"
                onClick={handleEditDetail}
              >
                Edit Details
              </button>

              <button
              onClick={ handleDropDown }
                className="bg-[#38bf67] !outline-none text-white px-2  flex text-sm py-1 text-center items-center rounded-md"
                type="button"
              >
                <AiOutlineCaretDown className="text-xl" />
              </button>
              {showDiv && (
                  <div
                    ref={divRef}
                    className="absolute flex flex-col gap-y-2 top-9  right-0 border-2 border-[#737475] py-2 px-4 rounded-xl bg-slate-50"
                  >
                    <p className="text-sm flex items-center gap-x-2 px-1 rounded-sm cursor-pointer text-[#737475] hover:bg-[#38bf67] hover:text-white">
        <img src={prohibited1} className="w-5 h-5 brightness-0  hover:brightness-20 object-fill" alt="Prohibited" />
        Suspended
      </p>
                    <p className="text-sm flex items-center gap-x-2 hover:bg-[#38bf67] hover:text-white px-1 rounded-sm cursor-pointer text-[#737475]">
                      <FaTrash className="text-lg"/>Delete
                    </p>
                  </div>
                )}
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold mt-5 text-[#737475]">
              Contractor Details
            </h1>
          </div>
          <div className=" flex justify-between gap-x-5">
            <div className="w-1/2 border rounded-md mt-4 shadow-md p-3">
              {contractorDetailData.map((items) => (
                <div className="flex ">
                  <div className="flex py-2 items-center gap-x-7">
                    <img src={items.img} className="w-5 h-5 object-fill" />
                    <p className="font-semibold text-sm text-[#737475]">
                      {items.text}
                    </p>
                    <div>{items.icons}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-1/2 border rounded-md mt-4 shadow-md p-3">
              {rightSideData.map((items) => (
                <div className="flex gap-y-4 py-2 gap-x-3">
                  <p className="text-[#b1b1b1] text-sm font-semibold">
                    {items.left}
                  </p>
                  <p className="text-[#737475] text-sm font-semibold ">
                    {items.right}{" "}
                    <span className="text-[#006CFF] font-semibold">
                      {items.btn}
                    </span>
                  </p>

                  <div className="flex items-center gap-x-3">
                    <div> {items.p1}</div>
                    <p className="text-xs text-[#737475]">{items.use}</p>
                  </div>
                  <div>{items.icons}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="border  rounded-md mt-3 shadow-md ">
              <div className="flex  w-full items-start">
                <div className="w-[20%] bg-[#38bf67] font-semibold text-sm py-[10px]   rounded-tl-md  text-center text-white border-r border-b">
                  <p>Certificate</p>
                </div>

                <div className="w-[20%] flex items-center justify-center gap-x-3   font-semibold text-sm  text-center border-b py-[10px]  border-r">
                  <p>Insurance</p>
                  <img src={insur} className="w-4 h-4" />
                </div>
                <div className="w-[20%] flex items-center justify-center gap-x-3  font-semibold  text-sm  text-center border-b py-[10px]  border-r">
                  <p> Proof of ID</p>
                  <img src={cross} className="w-4 h-4" />
                </div>
                <div className="w-[20%] flex items-center justify-center gap-x-3   font-semibold text-sm  text-center border-b py-[10px]  border-r">
                  <p>Proof of Address</p>
                  <img src={help} className="w-4 h-4 " />
                </div>
                <div className="w-[20%]  font-semibold text-sm   text-center border-b py-[10px]  b">
                  Other
                </div>
              </div>
              <div className="flex py-2">
                <div className="w-1/2 px-16 py-2">
                  <h1 className="text-base font-bold mt-2 text-[#737475]">
                    Certificate
                  </h1>
                  <p className="font-semibold text-[#737475] mt-2">Title:</p>
                  <p className="text-sm text-[#737475] mt-1">Gas Certificate</p>
                  <p className="font-semibold text-[#737475] mt-2">
                    Expiry Date
                  </p>
                  <p className="text-sm text-[#737475] mt-1">24/08/2022</p>
                  <p className="font-semibold text-[#737475] mt-2">
                    Description
                  </p>
                  <p className="text-sm text-[#737475] mt-1">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et.
                  </p>
                </div>
                <div className="w-1/2  px-16 py-2">
                  <h1 className="text-base font-bold mt-2 text-[#737475]">
                    Attachment:
                  </h1>
                  <div className="border w-full h-[85%] mt-2 rounded-lg relative">
                    <button
                      type="button"
                      className="absolute bg-[#38bf67] text-white p-1 rounded-sm font-semibold text-sm right-0 top-2"
                    >
                      Approved
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-3 items-center">
            <h1 className="text-xl font-bold  text-[#737475]">
              Contractor Jobs
            </h1>
            <div className="flex items-center">
              <p className="text-end px-2 py-2">Sort</p>
              <div className="  flex flex-col !outline-none ">
                <button className="border-none !outline-none">
                  <BsFillCaretUpFill className="text-xl  !outline-none mt-1" />
                </button>
                <button className=" border-none !outline-none">
                  <BsFillCaretDownFill className="text-xl outline-none -mt-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="border cursor-pointer flex flex-col   items-center  rounded-lg">
            <div className="flex text-xs sm:text-base w-full hover:bg-blue-50  ">
              <div className="w-[13%] sm:py-3 text-sm font-bold border-r flex items-center justify-center">
                Case Number
              </div>
              <div className=" w-[13%] ">
                <p className=" text-xs sm:text-sm sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                  Subject
                </p>
              </div>
              <div className="w-[13%] ">
                <p className=" text-xs sm:text-sm sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                  Description
                </p>
              </div>
              <div className="w-[10%] ">
                <p className=" text-xs sm:text-sm sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                  Job Status
                </p>
              </div>
              <div className="w-[25%] ">
                <p className=" text-xs sm:text-sm sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                  Payment Status
                </p>
              </div>
              <div className="w-[11%] ">
                <p className=" text-xs sm:text-sm sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                  Cost
                </p>
              </div>
              <div className="w-[10%] ">
                <p className=" text-xs sm:text-sm sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                  Action
                </p>
              </div>
            </div>
            <div className="flex w-full border-t hover:bg-blue-50  ">
              <div className="w-[13%] border-r    sm:py-4 flex justify-center items-center">
                <p className="text-[#737475] text-sm">09009009009</p>
              </div>
              <div className=" border-r w-[13%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  Lorem ipsum
                </p>
              </div>
              <div className="w-[13%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  Lorem ipsum
                </p>
              </div>
              <div className="w-[10%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  {/* Lorem ipsum */}
                </p>
              </div>
              <div className="w-[25%] border-r flex justify-center items-center">
                <p className="text-white bg-[#5869c1] w-14 text-center rounded-full text-sm py-[2px] ">
                  Paid
                </p>
              </div>
              <div className="border-r w-[11%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  300
                </p>
              </div>
              <div className="w-[10%] flex justify-center items-center ">
                <button
                  type="button"
                  className="bg-[#b1b1b1] text-white text-sm px-2 py-[2px] rounded-lg"
                >
                  Play
                </button>
              </div>
            </div>
            <div className="flex w-full border-t hover:bg-blue-50  ">
              <div className="w-[13%] border-r  sm:py-4 flex justify-center items-center">
                <p className="text-[#737475] text-sm">09009009009</p>
              </div>
              <div className=" border-r w-[13%]">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  Lorem ipsum
                </p>
              </div>
              <div className="w-[13%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  Lorem ipsum
                </p>
              </div>
              <div className="w-[10%] border-r flex items-center justify-center py-2">
                <p className="text-white bg-[#6c63ff] w-14 text-center rounded-full text-sm py-[2px] ">
                  New
                </p>
              </div>
              <div className="w-[25%] border-r flex justify-center items-center">
                <p className="text-white bg-[#feda32] w-14 text-center rounded-full text-sm py-[2px] ">
                  Unpaid
                </p>
              </div>
              <div className="border-r w-[11%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  300
                </p>
              </div>
              <div className="w-[10%] flex justify-center items-center ">
                <button
                  type="button"
                  className="bg-[#6c63ff] text-white text-sm px-2 py-[2px] rounded-lg"
                >
                  Play
                </button>
              </div>
            </div>
            <div className="flex w-full border-t hover:bg-blue-50  ">
              <div className="w-[13%] border-r  sm:py-4 flex justify-center items-center">
                <p className="text-[#737475] text-sm">09009009009</p>
              </div>
              <div className=" border-r w-[13%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  Lorem ipsum
                </p>
              </div>
              <div className="w-[13%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  Lorem ipsum
                </p>
              </div>
              <div className="w-[10%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  {/* Lorem ipsum */}
                </p>
              </div>
              <div className="w-[25%] border-r flex justify-center items-center">
                <p className="text-white bg-[#5869c1] w-14 text-center rounded-full text-sm py-[2px] ">
                  Paid
                </p>
              </div>
              <div className="border-r w-[11%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  300
                </p>
              </div>
              <div className="w-[10%] flex justify-center items-center ">
                <button
                  type="button"
                  className="bg-[#b1b1b1] text-white text-sm px-2 py-[2px] rounded-lg"
                >
                  Play
                </button>
              </div>
            </div>
            <div className="flex w-full border-t hover:bg-blue-50  ">
              <div className="w-[13%] border-r  sm:py-4 flex justify-center items-center">
                <p className="text-[#737475] text-sm">09009009009</p>
              </div>
              <div className=" border-r w-[13%]">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  Lorem ipsum
                </p>
              </div>
              <div className="w-[13%] border-r">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  Lorem ipsum
                </p>
              </div>
              <div className="w-[10%] border-r flex items-center justify-center">
                <p className="text-white bg-[#6c63ff] w-14 text-center rounded-full text-sm py-[2px] ">
                  New
                </p>
              </div>
              <div className="w-[25%] border-r flex justify-center  items-center">
                <p className="text-white bg-[#feda32] w-14 text-center rounded-full text-sm py-[2px] ">
                  Unpaid
                </p>
              </div>
              <div className="border-r w-[11%] ">
                <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                  300
                </p>
              </div>
              <div className="w-[10%] flex justify-center items-center ">
                <button
                  type="button"
                  className="bg-[#6c63ff] text-white text-sm px-2 py-[2px] rounded-lg"
                >
                  Play
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-4">
            <button
              className="bg-[#38bf67] font-semibold !outline-none text-white px-4 text-sm py-[6px] flex text-center items-center rounded-md"
              onClick={handleContracterDetail}
            >
              View All
            </button>
          </div>
          <div className="">
            <h1 className="text-xl font-bold text-[#737475]">Activity</h1>
          </div>
          <div className="border p-3  shadow-md mt-4 flex flex-col gap-y-4  items-center  rounded-lg">
            <div className="border-[2px] rounded-lg  py-2 px-3 border-[#407c1e]">
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
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>

            <div className=" rounded-lg py-2 px-3 text-white bg-[#38bf67]">
              <div className="flex justify-between w-[80%]">
                <h1 className="font-bold ">You</h1>
                <div className=" flex px-4 text-xs font-semibold">
                  <p>24 Sep, 2022</p>
                </div>
              </div>

              <p className="text-sm ">
                <div className="flex justify-end px-2">
                  <p>02:44 pm</p>
                </div>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
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
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
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
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
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
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
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
                <h1 className="font-bold text-[#737475]">Contarctor Status</h1>
                <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                  <p>24 Sep, 2022</p>
                  <p>02:44 pm</p>
                </div>
              </div>
              <div className="py-1 px-2">
                <button
                  type="button"
                  className="w-full bg-[#38bf67] !outline-none text-white rounded-lg py-[6px]"
                >
                  Approved
                </button>
              </div>
            </div>
            <div className="border-[2px] rounded-lg w-full p-2 border-[#407c1e]">
              <div className="flex justify-between">
                <h1 className="font-bold text-[#737475]">Proof of address</h1>
                <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                  <p>24 Sep, 2022</p>
                  <p>02:44 pm</p>
                </div>
              </div>
              <div className="py-1 px-2">
                <button
                  type="button"
                  className="w-full !outline-none bg-[#38bf67] text-white rounded-lg py-[6px]"
                >
                  Proof of address
                </button>
              </div>
            </div>
            <div className="border-[2px] rounded-lg p-2 border-[#407c1e]">
              <div className="flex justify-between">
                <h1 className="font-bold text-[#737475]">
                  New Document{" "}
                  <span className="text-[#73747557]">
                    (Uploaded by contractor)
                  </span>
                </h1>
                <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                  <p>24 Sep, 2022</p>
                  <p>02:44 pm</p>
                </div>
              </div>

              <p className="text-sm py-2 text-[#737475]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
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
          </div>
        </div>
    
      
    </div>
  
    </div>
   
  );
};

export default ContracterDetail;
