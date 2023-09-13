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
import { FaArrowCircleDown, FaArrowCircleUp, FaDownload } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Sidebar from "../Sidebar";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import businessLogo from "../images/business_logo.png";

const FinanceContractorInvoiceClose = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex items-center justify-between px-10 py-8 bg-green-100">
          <div className="flex items-center gap-x-4">
            <div>
              <div className="flex items-center gap-x-4">
                <Link to="/finance/contractor-invoice">
                  <div className=" w-7 h-7">
                    <GoChevronLeft size={25} color="#333333" />
                  </div>
                </Link>

                <h1 className="text-3xl font-bold">Contractor Invoice</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-x-12">
            {/* <AiOutlineExclamationCircle style={{ strokeWidth: '1px', transform: 'scale(1.1)' }} className="text-3xl text-[#737475]"/> */}

            {/* <div className="w-6 h-6">
              <img src={notification} className="object-fill w-full h-full" />
            </div> */}
            <div className="w-2 h-5">
              <BsExclamationCircle size={28} color="#737475" />
            </div>
          </div>
        </div>

        <div className="w-full px-8 mb-10 mt-9 md:px-20 ">
          <div className="flex flex-col gap-3 md:flex-row">
            {/* part 1  */}
            <div className="flex flex-col items-end w-full md:w-1/2">
              <button className="px-3 py-2 mb-4 bg-[#38BF67] rounded-md text-white ">
                Generate invoice for landlord
              </button>
              <div className="w-full p-4 rounded-md shadow-lg">
                {/* heading */}
                <div className="flex flex-wrap items-center justify-between">
                  <h2 className="text-[#DFE1E3] text-lg font-bold">INVOICE</h2>

                  <div className="flex flex-wrap gap-3">
                    <Link to="/finance/contractor-invoice/make/payment">
                      <button className="px-3 py-2 bg-[#38BF67] rounded-xl text-white ">
                        Mark as Paid
                      </button>
                    </Link>
                    <button className="px-3 py-2 bg-[#38BF67] rounded-md text-white ">
                      <FaDownload size={20} color="#ffff" />
                    </button>
                  </div>
                </div>
                {/* from */}
                <div className="flex flex-wrap items-center justify-between mt-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#B1B1B1] text-md font-bold">From</h2>
                    <p className="text-[#737475] text-xs font-bold">
                      {" "}
                      WPM Residence
                    </p>
                    <p className="text-[#737475] text-xs font-bold">
                      London, UK
                    </p>
                    <p className="text-[#737475] text-xs font-bold">
                      0712345566
                    </p>
                    <p className="text-[#737475] text-xs font-bold">
                      0712345566
                    </p>
                  </div>
                  <div>
                    <img
                      className="object-contain w-32 h-20"
                      src={businessLogo}
                      alt="business logo"
                    />
                  </div>
                </div>
                {/* to */}
                <div className="flex flex-wrap items-center justify-between mt-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#B1B1B1] text-md font-bold">To</h2>
                    <p className="text-[#737475] text-xs font-bold">
                      {" "}
                      WPM Residence
                    </p>
                    <p className="text-[#737475] text-xs font-bold">
                      London, UK
                    </p>
                    <p className="text-[#737475] text-xs font-bold">
                      0712345566
                    </p>
                    <p className="text-[#737475] text-xs font-bold">
                      0712345566
                    </p>
                  </div>
                  <div>
                    <p className="text-[#0266FF] text-xs font-bold">
                      Invoice no - 2453
                    </p>
                    <p className="text-[#737475] text-xs font-bold">
                      Date - 12-04-2022
                    </p>
                  </div>
                </div>
                {/* services */}
                <div className="flex flex-col flex-wrap items-center justify-between mt-12">
                  <div className="flex w-full flex-row items-center justify-between py-2 border-b border-[#407C1E]">
                    <div className="">
                      <p className="text-[#737475] text-xs font-bold">
                        Services
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-10">
                      <p className="text-[#737475] text-xs font-bold">Amount</p>
                      <p className="text-[#737475] text-xs font-bold">Rate</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full py-1 ">
                    <div className="">
                      <p className="text-[#737475] text-xs font-normal">
                        Window Repair
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-10">
                      <p className="text-[#737475] text-xs font-normal">
                        $128.00
                      </p>
                      <p className="text-[#737475] text-xs font-normal">
                        $128.00
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full py-1 ">
                    <div className="">
                      <p className="text-[#737475] text-xs font-normal">
                        Window Repair
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-10">
                      <p className="text-[#737475] text-xs font-normal">
                        $128.00
                      </p>
                      <p className="text-[#737475] text-xs font-normal">
                        $128.00
                      </p>
                    </div>
                  </div>
                </div>
                {/* total */}
                <div className="flex w-full flex-row items-center justify-between mt-12 py-2 border-b border-t border-[#407C1E]">
                  <div className="">
                    <p className="text-[#737475] text-xs font-bold">Total:</p>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-10">
                    <p className="text-[#737475] text-xs font-normal">
                      $128.00
                    </p>
                  </div>
                </div>
                {/* subtotal discount total */}
                <div className="flex flex-col items-end justify-center w-full mt-4">
                  <div className="flex flex-row items-center justify-between py-1 gap-7 w-max">
                    <div className="">
                      <p className="text-[#737475] text-xs font-bold">
                        Subtotal:
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-10">
                      <p className="text-[#737475] text-xs font-normal">
                        $128.00
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between py-1 gap-7 w-max">
                    <div className="">
                      <p className="text-[#737475] text-xs font-bold">
                        Discount:
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-10">
                      <p className="text-[#737475] text-xs font-normal">
                        $128.00
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-12 py-1 w-max border-b border-t border-[#407C1E]">
                    <div className="">
                      <p className="text-[#737475] text-xs font-bold">Total:</p>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-10">
                      <p className="text-[#737475] text-xs font-normal">
                        $128.00
                      </p>
                    </div>
                  </div>
                </div>
                {/* buttons */}
                <div className="flex flex-wrap items-center justify-between w-full py-10">
                  <button className="px-4 py-2 rounded-md bg-[#FE1B1B] text-white text-md font-bold">
                    Abondand
                  </button>
                  <button className="px-4 py-2 rounded-md bg-[#38BF67] text-white text-md font-bold">
                    Make Payment
                  </button>
                </div>
              </div>
            </div>
            {/* part 2 */}
            <div className="flex flex-col items-end w-full md:w-1/2 md:pt-16">
              <div className="w-full p-4 rounded-md shadow-lg h-30">
                <div className="flex flex-col gap-10">
                  {/* date 1 */}
                  <div>
                    <h2 className="text-[#737475] text-md font-bold">
                      21/12/2022{" "}
                    </h2>
                    <p className="text-[#737475] text-md font-normal">
                      Payment completed by{" "}
                      <span className="text-[#B1B1B1]">S Hussain</span>
                    </p>
                  </div>
                  {/* date 2 */}
                  <div>
                    <h2 className="text-[#737475] text-md font-bold">
                      21/12/2022{" "}
                    </h2>
                    <p className="text-[#737475] text-md font-normal">
                      Payment completed by{" "}
                      <span className="text-[#B1B1B1]">S Hussain</span>
                    </p>
                  </div>
                  {/* note */}
                  <div>
                    <h2 className="text-[#38BF67] text-md font-bold">
                      Note:{" "}
                      <span className="text-[#B1B1B1] font-medium ">
                        paid cash
                      </span>
                    </h2>
                  </div>
                  {/* date 3 */}
                  <div>
                    <h2 className="text-[#737475] text-md font-bold">
                      21/12/2022{" "}
                    </h2>
                    <p className="text-[#737475] text-md font-normal">
                      Payment completed by{" "}
                      <span className="text-[#B1B1B1]">S Hussain</span>
                    </p>
                  </div>
                  {/* note */}
                  <div>
                    <h2 className="text-[#38BF67] text-md font-bold">Note:</h2>
                    <p className="text-[#B1B1B1] font-medium ">
                      {" "}
                      Requested to send new one
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceContractorInvoiceClose;
