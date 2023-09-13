import React, { useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Style/AddCertificate.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import AppleMbl from "../images/AppleMbl.png";
import { BsChevronLeft } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const MobileApp = () => {
  const customTabStyle = (selected) => ({
    borderBottom: selected ? "2px solid blue" : "none",
  });

  const navigate=useNavigate();
  const toSetting=()=>{
    navigate('/setting')
  }

  return (
    <div className="w-full">
      <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <BsChevronLeft onClick={toSetting}   className="cursor-pointer text-xl" />
                <h1 className="text-3xl font-bold">Mobile App</h1>
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
            <div></div>
          </div>
        </div>
        <div className="p-4">
      <Tabs>
        <TabList className="flex flex-col justify-center items-center lg:flex-row lg:justify-normal  border-none font-bold text-[#b1b1b1]   customTabListone">
          <Tab style={{ customTabStyle }}>Welcom Message</Tab>
          <Tab>Company Logo</Tab>
          <Tab>Terms & Conditions</Tab>
        </TabList>

        <TabPanel className="mt-4">
          <div className="flex flex-col gap-y-3 md:flex-row justify-between">
            <div className="w-[90%] md:w-1/2 m-auto  ">
              <div className="border m-auto md:w-[50%] p-3 flex flex-col shadow-sm rounded-md">
                <h2 className="text-[#737475] font-bold text-xl ">
                  Welcome Message
                </h2>
                <p className="text-[#737475] text-sm">
                  Display of Welcome Message on App
                </p>
                <p className="py-4 text-sm font-semibold text-[#737475]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet.
                </p>
                <button
                  type="button"
                  className="rounded-sm mt-2 !outline-none py-1 bg-[#38bf67] text-white w-full"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="w-[90%] md:w-1/2 flex m-auto justify-center items-center">
              <div className=" md:w-[50%] m-auto   ">
                <img src={AppleMbl} className="md:w-56 " />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="mt-4">
          <div className="flex flex-col gap-y-5 md:flex-row justify-center md:justify-between">
            <div className="w-[90%] md:w-1/2 m-auto ">
              <div className="border m-auto justify-center md:w-[50%] p-3 flex flex-col shadow-sm rounded-md">
                <h2 className="text-[#737475] font-bold text-xl ">
                  Company Logo
                </h2>
                <p className="text-[#737475] text-sm">
                  Upload your company logo that will appear on your app
                </p>
                <input
                  type="text"
                  className="h-44 border rounded-md mt-3"
                  placeholder=" "
                ></input>
                <button
                  type="button"
                  className="rounded-sm mt-4 !outline-none py-1 bg-[#38bf67] text-white w-full"
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="w-[90%] md:w-1/2 flex  m-auto justify-center">
              <div className="w-[90%]  md:w-[50%] m-auto  ">
                <img src={AppleMbl} className="w-full h- md:w-56 m-auto " />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="mt-4">
          <div className="flex gap-x-3 md:gap-x-0 justify-between">
            <div className="w-1/2  flex flex-col gap-y-4 md:flex-row  h-[340px] gap-x-4">
              <div className="border md:w-[50%] p-3  flex flex-col shadow-sm rounded-md">
                <h2 className="text-[#737475] font-bold text-xl ">
                  Terms & Conditions
                </h2>
                <p className="text-[#737475] text-sm">
                  Display of Welcome Message on App
                </p>
                <p className="py-4 text-sm font-semibold text-[#737475]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet.
                </p>
                <button
                  type="button"
                  className="rounded-sm mt-2 !outline-none py-1 bg-[#38bf67] text-white w-full"
                >
                  Edit
                </button>
              </div>
              <div className="border md:w-[50%] h-[%] p-3 flex flex-col shadow-sm rounded-md">
                <h2 className="text-[#737475] font-bold text-xl ">
                  Terms & Conditions
                </h2>
                <p className="text-[#737475] text-sm">
                  Display of Term & Condition on Tenant App{" "}
                </p>
                <p className="py-4 text-sm font-semibold text-[#737475]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet.
                </p>
                <button
                  type="button"
                  className="rounded-sm mt-2 !outline-none py-1 bg-[#38bf67] text-white w-full"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className=" md:w-[50%]  ">
                <img src={AppleMbl} className="w-56 " />
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
    </div>
   
  );
};

export default MobileApp;
