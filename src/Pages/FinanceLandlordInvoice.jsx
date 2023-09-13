import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {
  BsChevronDown,
  BsExclamationCircle,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillSunsetFill,
  BsSearch,
} from "react-icons/bs";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Sidebar from "../Sidebar";
import { GoChevronLeft } from "react-icons/go";
import InvoiceForLandlord from "./InvoiceForLandlord";
import text from "../images/text.png";
import paid from "../images/paid.png";
import messsage from "../images/messsage.png";
import close from "../images/close.png";
import CANCEL from "../images/CANCEL.png";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
const FinanceLandlordInvoice = () => {
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
    },
  });
  const longText = `
Drop
`;
  const [invoice, setinvoice] = useState(true);
  const [createInvoice, setcreateInvoice] = useState(false);

  const handleCreateInvoice = () => {
    setinvoice(false);
    setcreateInvoice(true);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="w-full">
      {invoice && (
        <div className="w-full">
          <div className="flex items-center justify-between px-10 py-8 bg-green-100">
            <div className="flex items-center gap-x-4">
              <div>
                <div className="flex items-center gap-x-4">
                  <div className="w-7 h-7">
                    <GoChevronLeft size={25} color="#333333" />
                  </div>

                  <h1 className="text-3xl font-bold">View Landlord Invoice</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-x-12">
              <div className="w-2 h-5">
                <BsExclamationCircle size={28} color="#737475" />
              </div>
            </div>
          </div>
          <div className="w-full px-3 ">
            <div className=""></div>
            <div className="flex flex-col items-center justify-center mt-3 sm:flex-row sm:justify-normal gap-y-2 gap-x-4">
              <div className="border w-[80%] sm:w-44 bg-[#38bf67] text-white  flex justify-between items-center rounded-md py-1 px-2 text-sm">
                <button>Open Jobs </button>
                <span className="h-5 w-5 text-white p-1 text-[12px] bg-red-500 rounded-full flex justify-center items-center">
                  05
                </span>
              </div>
              <div className="border w-[80%] sm:w-44  flex justify-between rounded-md py-1 px-2 text-sm">
                <button>Close Jobs </button>
                <span className="h-5 w-5 text-white p-1 text-[12px] bg-red-500 rounded-full flex justify-center items-center">
                  05
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between mt-3 sm:flex-row">
              <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-normal gap-x-6">
                <div className="flex w-[80%] sm:w-44   gap-x-3 justify-center items-center ">
                  <p className="text-sm">Show:</p>
                  <select className="w-12 h-8 px-0 text-sm bg-transparent border border-gray-700 rounded-sm outline-none">
                    <option className="text-sm">25</option>
                    <option>35</option>

                    <option>45</option>

                    <option>55</option>
                  </select>
                </div>

                <div className="flex w-[80%] sm:w-full   gap-x-3">
                  <label className="mt-1 text-xs sm:text-sm">
                    Entries Search:
                  </label>

                  <div className="relative input-container">
                    <input
                      type="text"
                      className="pl-10 outline-none border rounded-md p-[2px]"
                    />
                    <BsSearch className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  </div>
                </div>
              </div>
              <div className=" flex  w-[80%] sm:w-auto  justify-center  mt-2 sm:mt-0  sm:justify-normal gap-x-4">
                <div className="border w-[80%] sm:w-36  flex justify-between rounded-md py-1 px-2 text-sm">
                  <button className="!outline-none">Generated </button>

                  <span className="h-5 w-5 text-white p-1 text-[12px] bg-red-500 rounded-full flex justify-center items-center">
                    05
                  </span>
                </div>

                <div className="border w-[80%] sm:w-36  flex justify-between rounded-md py-1 px-2 text-sm">
                  <button className="">Not Generated</button>
                  <span className="h-5 w-5 text-white p-1 text-[12px] bg-red-500 rounded-full flex justify-center items-center">
                    05
                  </span>
                </div>
                <div className=" w-[80%] sm:w-36 text-center   rounded-md py-1 bg-[#38bf67] text-white text-sm">
                  <button
                    onClick={handleCreateInvoice}
                    className=" !outline-none  py-1 text-center"
                  >
                    Create Invoice
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[80%] sm:w-auto  flex justify-center sm:justify-normal items-center  mt-2">
              <p className="text-sm ">Show 1 to 12 entries</p>
            </div>
            <div className="flex items-center justify-end px-1 gap-x-1">
              <p className="px-2 py-2 text-end">Sort</p>
              <div className="flex flex-col outline-none ">
                <button className="border-none outline-none">
                  <BsFillCaretUpFill className="mt-1 text-xl outline-none" />
                </button>
                <button className="border-none outline-none ">
                  <BsFillCaretDownFill className="-mt-2 text-xl outline-none" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center border rounded-lg">
              <div className="flex w-full text-xs sm:text-base ">
                <div className="w-[10%] border-r sm:py-2  flex items-center justify-center">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Status
                  </p>
                </div>
                <div className=" w-[13%] border-r">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    WPM Ref
                  </p>
                </div>
                <div className="w-[13%] border-r ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Invoice Number
                  </p>
                </div>
                <div className="w-[26%] border-r ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2 ">
                    Property Address
                  </p>
                </div>
                <div className="w-[13%] border-r ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Time
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Action
                  </p>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[10%] sm:py-2 border-r flex items-center justify-center">
                  {/* <p className="flex items-center justify-center h-full text-xs text-center sm:text-sm sm:py-2">
                  paid
                </p> */}
                  <Tooltip arrow placement="left" title="Drop">
                    <IconButton>
                      <img src={text} className="h-5 w-5" alt="text" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div className=" w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[26%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className="w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    1 hr. ago{" "}
                  </p>
                </div>
                <div className="w-[25%] flex justify-center items-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-sm px-4 rounded-sm py-1"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[10%] sm:py-2 border-r flex items-center justify-center">
                  <Tooltip placement="left" title="Sent" arrow>
                    <img src={messsage} className="h-5 w-5" alt="text" />
                  </Tooltip>
                </div>
                <div className=" w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[26%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className="w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    1 hr. ago{" "}
                  </p>
                </div>
                <div className="w-[25%] flex justify-center items-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-sm px-4 rounded-sm py-1"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[10%] sm:py- border-r flex items-center justify-center">
                  <Tooltip placement="left" title="Paid" arrow>
                  <img src={paid} className="h-10 w-12" alt="text" />

    </Tooltip>
                </div>
                <div className=" w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[26%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className="w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    1 hr. ago{" "}
                  </p>
                </div>
                <div className="w-[25%] flex justify-center items-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-sm px-4 rounded-sm py-1"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[10%] sm:py border-r flex items-center justify-center">
                  <Tooltip title="Cancel" placement="left" arrow>
                  <img src={CANCEL} className="h-5 w-12" alt="text" />

    </Tooltip>
                </div>
                <div className=" w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[26%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className="w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    1 hr. ago{" "}
                  </p>
                </div>
                <div className="w-[25%] flex justify-center items-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-sm px-4 rounded-sm py-1"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[10%] sm:py-2 border-r flex items-center justify-center">
                <Tooltip title="Close"  arrow placement="left">
                <img src={close} className="h-5 w-8" alt="text" />

    </Tooltip>
                </div>
                <div className=" w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[26%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className="w-[13%] ">
                  <p className="flex items-center justify-center h-full text-xs text-center border-r sm:text-sm sm:py-2">
                    1 hr. ago{" "}
                  </p>
                </div>
                <div className="w-[25%] flex justify-center items-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-sm px-4 rounded-sm py-1"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            <div className="flex mt-4 border rounded-sm w-44 ">
              <button className="p-1 text-sm border-r w-11">Excel</button>
              <button className="p-1 text-sm border-r w-11">CSV</button>

              <button className="p-1 text-sm border-r w-11">PDF</button>

              <button className="p-1 text-sm border-r w-11">Print</button>
            </div>
            <div className="flex items-center py-4 gap-x-3 ">
              <button className="text-sm font-semibold">Previous</button>
              <p className="flex items-center justify-center text-sm border rounded w-7 h-7">
                1
              </p>
              <button className="text-sm font-semibold">Next</button>
            </div>
          </div>
        </div>
      )}
      {createInvoice && (
        <div className="w-full">
          <InvoiceForLandlord />
        </div>
      )}
    </div>
  );
};

export default FinanceLandlordInvoice;
