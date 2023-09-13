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

const PaymentAddRecipient = () => {
  return (
    <div className="flex w-full">
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

        {/* page body */}
        <div className="w-full my-10 ">
          <div className="flex flex-col items-center w-full px-3 py-4 m-auto rounded-md shadow-md sm:max-w-md">
            <h2 className="text-[#000000] text-md font-bold">Add Recipient</h2>

            {/* input payment */}
            <div className="flex flex-col items-start w-full mt-3 gap-y-2">
              <p className="text-[#344054] text-md font-semibold w-full text-left ">
                Name on card
              </p>
              <div className="flex items-start w-full  px-2 bg-white border-[#A0ABBB] border rounded-md">
                <input
                  type="text"
                  className="py-2 bg-white border-none outline-0"
                />
              </div>
            </div>

            {/* expiry date and cvc */}
            <div className="flex flex-col items-center justify-center w-full gap-3 mt-2 md:flex-row">
              {/* expiry */}
              <div className="flex flex-col items-start w-1/2 gap-y-2">
                <p className="text-[#344054] text-md font-semibold w-full text-left ">
                  Expiry date
                </p>
                <div className="flex items-start w-full   px-2 bg-white border-[#A0ABBB] border rounded-md">
                  <input
                    type="text"
                    className="w-full py-2 bg-white border-none outline-0"
                  />
                </div>
              </div>

              {/* cvc */}

              <div className="flex flex-col items-start w-1/2 gap-y-2">
                <p className="text-[#344054] text-md font-semibold w-full text-left ">
                  CVC
                </p>
                <div className="flex items-start w-full  px-2 bg-white border-[#A0ABBB] border rounded-md">
                  <input
                    type="number"
                    className="w-full py-2 bg-white border-none outline-0"
                  />
                </div>
              </div>
            </div>

            {/* master card */}
            <div className="w-full mt-2">
              <p className="text-[#344054] text-md font-semibold w-full text-left ">
                Card number
              </p>
              <div className="flex items-center w-full gap-2  ps-2   border-[#A0ABBB] border rounded-md">
                <img src={mastercardLogo} alt="mastercard" />
                <div className="flex items-start w-full px-2 ">
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className="w-full py-2 border-none outline-0"
                  />
                </div>
              </div>
            </div>

            {/* button */}
            <div className="flex flex-col items-center justify-center w-full gap-3 mt-3 md:flex-row">
              <Link
                to="/finance/contractor-invoice/make/payment"
                className="w-1/2 text-decoration-none"
              >
                <button
                  type="submit"
                  className="flex flex-col items-center w-full gap-y-2 justify-center gap-x-3 py-2 rounded-md bg-white text-black font-semibold border border-[#A0ABBB]  outline-0"
                >
                  Cancel
                </button>
              </Link>
              <Link
                to="/finance/contractor-invoice/payment/confirm"
                className="w-1/2 text-decoration-none"
              >
                <button
                  type="submit"
                  className="flex flex-col items-center w-full gap-y-2 justify-center gap-x-3 py-2 rounded-md bg-[#38BF67] text-white font-semibold border border-[#7F56D9]  outline-0"
                >
                  Add
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentAddRecipient;
