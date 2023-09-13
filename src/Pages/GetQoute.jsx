import React from "react";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
// import { BsChevronDown } from "react-icons/bs";
import img from "../images/mbl.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EngineerResponse from "./EngineerResponse";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
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


const GetQoute = () => {
  const [engResponse, setSetengResponse] = React.useState(false);
  const [qoute, setQoute] = React.useState(true);


  const [Sendopen, setSendOpen] = React.useState(false);
  const handleNext = () => setSendOpen(true);
  const handleSendClose = () => setSendOpen(false);

  const handleSendQoute=()=>{
    setSetengResponse(true)
    setQoute(false)
  }
  const navigate=useNavigate();
  const toJob=()=>{
    navigate('/job/job-detail')
  }
  return (
    <div className="w-full">
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toJob}  className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Get Qoute</h1>
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
     <div className="flex px-5 justify-between py-4 gap-x-3">
        <div className="w-1/2 border rounded-lg shadow-md">
          <div className="flex justify-end p-2">
          <button className="text-white  bg-[#38bf67] !outline-none font-semibold text-xs  w-16 py-1 rounded-sm">
            Reset
          </button>
          </div>
          <div className=" px-8">
          <h3 className="text-[#737475] font-bold ">Select Hours</h3>
          <div className="flex gap-x-3 mt-3 ">
            <button className="text-white  bg-[#38bf67] !outline-none font-semibold text-xs py-1 w-24 rounded-sm">
              8-6 hours
            </button>
            <button className="border !outline-none font-semibold text-xs py-1 w-24 rounded-sm">
              Out Of Hours
            </button>
          </div>
          <h3 className="text-[#737475] font-bold mt-3">Filter by Status- App</h3>
          <div className="flex gap-x-3 mt-3">
            <button className="text-white  bg-[#38bf67] !outline-none font-semibold text-xs py-1 w-24 rounded-sm">
              Online
            </button>
            <button className="border !outline-none font-semibold text-xs py-1 w-24 rounded-sm">
              Offline
            </button>
          </div>
          <div>
            <h3 className="text-[#737475] font-bold mt-3 ">Filter by Category</h3>
            <div className="mt-3">
            <div className="">
              <input type="checkbox" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Electrician</label>
              <input type="checkbox" className="ml-16" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Guard</label>
            </div>
            <div className="">
              <input type="checkbox" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Electrician</label>
              <input type="checkbox" className="ml-16" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Guard</label>
            </div>
            <div className="">
              <input type="checkbox" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Electrician</label>
              <input type="checkbox" className="ml-16" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Guard</label>
            </div>
            </div>
            <div className="">
              <input type="checkbox" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Electrician</label>
             
            </div>
          </div>
          <h3 className="text-[#737475] font-bold ">
            Filter by Category{" "}
            <span className="text-xs text-[#737475] font-normal ">
              (Post code: 10010)
            </span>
          </h3>
          <div className="input-field h-8 w-full mt-3">
            <input type="search" placeholder="Radius" />
            <BsChevronDown />
          </div>
          <h3 className="text-[#737475] font-bold mt-3 ">Filter by Group </h3>
          <div className="input-field h-8 w-full mt-3">
            <input type="search" placeholder="Khan Electric" />
            <BsChevronDown />
          </div>
          </div>
        
        </div>
        <div className="w-1/2">
        <div className="border rounded-md shadow-sm py-3 px-4">
        <h2 className="text-[#737475] font-bold">Select Engineer</h2>
        <div className="py-3">
          <div className="search-input flex items-center border rounded-sm py-[2px] px-1 ">
            <CiSearch className="search-icon text-xl text-[#737475]" />
            <input type="text" placeholder="" />
          </div>
        </div>
        <div className="flex items-center gap-x-3">
        <div>
        <input type="checkbox" className="" />

        </div>
              <label className="text-sm mt-[5px] text-[#737475] font-semibold">Select All</label>
            </div>
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
          
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p2
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p2
            </p>
          </div>
        </div>
        <hr />

        <div className="px-3 py-3">
          <p className="text-[#737475] font-semibold">Note</p>
          <div className="flex justify-between items-center mt-2 px-3">
            <div className="flex items-center gap-x-2">
             
              <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
                p1
              </p>
              <p className="text-xs text-[#737475]">Use as first Choice</p>
            </div>
            <div className="flex items-center gap-x-2">
             
              <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
                p1
              </p>
              <p className="text-xs text-[#737475]">Use as second choice</p>
            </div>
            <div className="flex items-center gap-x-2">
             
              <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
                p1
              </p>
              <p className="text-xs text-[#737475]">Use as third choice</p>
            </div>
          </div>
        </div>
        <div className="py-2 px-12">
            <button
              type="button"
              onClick={handleNext}
              className="text-white bg-[#407c1e] font-semibold w-full rounded-sm py-2"
            >
            Next
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
                      Notification
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
                        // onClick={handleSendOpen}
                        className="bg-[#] font-semibold !outline-none text-[#737475] border w-56  justify-center  px-2 text-sm py-[6px] flex text-center items-center rounded-sm"
                      >
                        Cancel
                      </button>
                      <button
                      onClick={handleSendQoute}
                        className="bg-[#407c1e] font-semibold !outline-none text-white px-2 w-56 justify-center  text-sm py-1 flex text-center items-center rounded-sm"
                        // onClick={handleNewJobs}
                      >
                        Send
                      </button>
                    </div>
                  </Typography>
                </Box>
              </Modal>
          </div>
      </div>
        </div>
      </div>
     
     {
      engResponse && <EngineerResponse/>
     }
    </div>
  );
};

export default GetQoute;
