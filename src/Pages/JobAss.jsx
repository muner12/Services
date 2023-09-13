import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import img from "../images/mbl.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useActionData, useNavigate } from "react-router-dom";
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


const JobAss = () => {
  const [Sendopen, setSendOpen] = React.useState(false);
  const handleSendOpen = () => setSendOpen(true);
  const handleSendClose = () => setSendOpen(false);
  const navigate=useNavigate();
  const toJobDetail=()=>{
    navigate('/job/job-detail')
  }
  return (
    <div className="w-full">
       <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toJobDetail}  className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Assign Engineer</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 w-full gap-x-3 py-4">
      <div className=" border rounded-md shadow-sm py-3 px-4">
      <div className="flex items-center justify-between">
          <h2 className="text-[#737475] font-bold">Select Hours</h2>
        
        </div>
        <div className="flex gap-x-3 py-3">
          <button
            type="button"
            className="bg-[#38bf67] text-white font-semibold px-10 rounded-sm py-[4px] text-sm"
          >
            8-6 hours
          </button>
          <button
            type="button"
            className="bg-[] border px-10 text-[#737475] font-semibold rounded-sm py-[4px] text-sm"
          >
            Out of Hours
          </button>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-[#737475] font-bold">Filter by Status- App</h2>
          {/* <button
            type="button"
            className="bg-[#38bf67] text-white font-semibold px-4 rounded-sm py-[4px] text-sm"
          >
            Reset
          </button> */}
        </div>
        <div className="flex gap-x-3 py-3">
          <button
            type="button"
            className="bg-[#38bf67] text-white font-semibold px-10 rounded-sm py-[4px] text-sm"
          >
            Online
          </button>
          <button
            type="button"
            className="bg-[] border px-10 text-[#737475] font-semibold rounded-sm py-[4px] text-sm"
          >
            Offline
          </button>
        </div>
        <div>
          <h2 className="text-[#737475] font-bold">Filter by Category</h2>
          <div className="py-2  flex flex-col gap-y-0">
            <div className="flex w-[70%] justify-between ">
              <div className="flex items-center gap-x-3">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Electrician</label>
                </div>
              </div>
              <div className="flex items-center  w-28 gap-x-3">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Guard</label>
                </div>
              </div>
            </div>
            <div className="flex w-[70%] justify-between ">
              <div className="flex items-center gap-x-3">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Plumber</label>
                </div>
              </div>
              <div className="flex items-center gap-x-3 w-28">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Keyholder</label>
                </div>
              </div>
            </div>
            <div className="flex w-[70%] justify-between ">
              <div className="flex items-center gap-x-3">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Handyman</label>
                </div>
              </div>
              <div className="flex items-center gap-x-3 w-28">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Cleaner</label>
                </div>
              </div>
            </div>
            <div className="flex w-[70%] justify-between ">
              <div className="flex items-center gap-x-3">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Locksmith</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-2">
            <h2 className="text-[#737475] font-bold">Filter by Radius</h2>
            <span className="text-[#737475] text-xs">(Post code: 10010)</span>
          </div>
          <div className="py-3">
            <input
              type="text"
              className="rounded-sm w-full py-[2px] border px-2 "
              placeholder="Radius"
            ></input>
          </div>
          <div className="flex items-center gap-x-2">
            <h2 className="text-[#737475] font-bold">Filter by Group</h2>
          </div>
          <div className="py-3">
            <div className="input-field h-8 w-full">
              <input type="search" placeholder="Khan Electric" />
              <BsChevronDown />
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <h2 className="text-[#737475] font-bold">Map View</h2>
          </div>
          <div className="py-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3795484579437!2d71.50874917499483!3d34.00846722004181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917036f0a14d9%3A0x16a1a4ec27525171!2sLiberty%20Mall!5e0!3m2!1sen!2s!4v1687586873981!5m2!1sen!2s"
              className="w-full h-32 rounded-sm"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="py-2">
            <button
              type="button"
              className="text-white bg-[#f44134] font-semibold w-full rounded-sm py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-md shadow-sm py-3 px-4">
        <h2 className="text-[#737475] font-bold">Select Engineer</h2>
        <div className="py-3">
          <div className="search-input flex items-center border rounded-sm py-[2px] px-1 ">
            <CiSearch className="search-icon text-xl text-[#737475]" />
            <input type="text" placeholder="" />
          </div>
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
            onClick={handleSendOpen}
              type="button"
              className="text-white bg-[#38bf67] font-semibold w-full rounded-sm py-2"
            >
            Assign
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
    
  );
};

export default JobAss;
