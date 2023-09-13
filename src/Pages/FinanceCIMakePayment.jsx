import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import {
  BsChevronDown,
  BsExclamationCircle,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillSunsetFill,
  BsPlusCircle,
  BsSearch,
} from "react-icons/bs";
import mastercardLogo from "../images/martercard_logo.svg";
import { IoIosArrowUp } from "react-icons/io";
import Sidebar from "../Sidebar";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import businessLogo from "../images/business_logo.png";

const FinanceContractorInvoiceClose = () => {
  return (
    <div className="flex w-full">
      {/* <Sidebar /> */}
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

        <div className="w-full my-10 ">
          <div className="flex flex-col items-center w-full px-3 py-4 m-auto rounded-md shadow-md sm:max-w-xs">
            <h2 className="text-[#000000] text-md font-bold">Make Payment</h2>
            <p className="text-[#000000] text-md font-normal w-full text-left mt-5">
              How much would you like to send?
            </p>
            
            {/* name */}
            <div className="flex items-start w-full mt-2 px-2 bg-white border-[#A0ABBB] border rounded-md">
              <input
                type="number"
                className="py-1 bg-white border-none outline-0"
              />
              <select className="h-[2rem] text-[#000000] text-sm font-normal  border-none outline-0 px-2">
                <option value="usd">
                  <span className="text-sm font-extralight"> $</span> usd
                </option>
              </select>
            </div>

            {/* dummy options */}
            <div className="w-full mt-3">
              <div className="flex items-center justify-center w-full gap-2">
                <div className="w-1/4 cursor-pointer py-[8px] border border-[#A0ABBB] rounded-md">
                  <p className="w-full text-center">$10.00</p>
                </div>
                <div className="w-1/4 cursor-pointer py-[8px] border border-[#A0ABBB] rounded-md">
                  <p className="w-full text-center">$50.00</p>
                </div>
                <div className="w-1/4 cursor-pointer py-[8px] border border-[#A0ABBB] rounded-md">
                  <p className="w-full text-center">$100.00</p>
                </div>
                <div className="w-1/4 cursor-pointer py-[8px] border border-[#A0ABBB] rounded-md">
                  <p className="w-full text-center">$200.00</p>
                </div>
              </div>
            </div>

            {/* master card */}
            <div className="w-full mt-4">
              <p className="text-[#000000] text-md font-normal w-full text-left">
                From
              </p>
              <div className="flex items-center w-full gap-2 py-3 ps-2 bg-[#F7F8F9] rounded-lg">
                <img src={mastercardLogo} alt="mastercard" />
                <p className="text-[#000000] text-sm font-semibold  text-left">
                  Master
                </p>

                <p className="text-[#64748B] text-sm font-normal w-full text-right">
                  card ending in 5577
                </p>
                <BiChevronDown color="#64748B" size={25} className="me-2" />
              </div>
            </div>

            {/* button */}
            <Link
              to="/finance/contractor-invoice/payment/add/recipient"
              className="w-full text-decoration-none"
            >
              <button
                type="submit"
                className="w-full focus:border-none flex items-center justify-center gap-x-3 py-2 rounded-md bg-[#38BF67] text-white border-none  outline-0 mt-10"
              >
                <BsPlusCircle className="font-bold" /> Add Recipient
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceContractorInvoiceClose;
