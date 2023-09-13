import React, { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import {
  AiFillCaretDown,
  AiOutlineCaretUp,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import {
  BsChevronDown,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsSearch,
} from "react-icons/bs";
import notification from "../images/notifi.png";
import home from "../images/home.png";

import threedot from "../images/threedot.png";
import { IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import propertyData from "../Config/PropertyData";

const Properties = () => {
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

  //Global
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

  //Notification
  const [showNotification, setShowNotification] = useState(false);
  const divNotification = useRef(null);

  const handlenotification = () => {
    setShowNotification(!showNotification);
  };

  const handleClickOutsideNotification = (event) => {
    if (
      divNotification.current &&
      !divNotification.current.contains(event.target)
    ) {
      setShowNotification(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNotification);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNotification);
    };
  }, []);

  //Sort
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
  const divSelect = useRef(null);

  const handleSelect = () => {
    setShowSelect(!showNotification);
  };

  const handleClickOutsideSelect = (event) => {
    if (divSelect.current && !divSelect.current.contains(event.target)) {
      setShowSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideSelect);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSelect);
    };
  }, []);

  const navigate = useNavigate();

  const handleuseNavigate = () => {
    navigate("/property/add-property");
  };

  const handlePropertyDetail = () => {
    navigate("/property/property-detail");
  };

  return (
    <div className="flex flex-col gap-y-4 lg:flex-row w-full">
      {/* <Sidebar /> */}
      <div className=" w-full">
        {/* Navbar */}
        <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <div className="w-6 h-6">
                  <img src={home} />
                </div>

                <h1 className="text-3xl font-bold">Properties</h1>
              </div>
            </div>
          </div>
          {/* start */}
          <div className="flex relative items-center  gap-x-8">
            {/* <div>
              <AiOutlineExclamationCircle
                style={{ strokeWidth: "1px", transform: "scale(1.1)" }}
                className="text-3xl text-[#737475]"
              />
            </div> */}
            <div>
              <button
                type="button"
               // onClick={handleGlobal}
                className="bg-[#407c1e] text-white rounded-sm !outline-none text-sm font-semibold px-4 py-1 flex items-center gap-x-3"
              >
                Global <BsChevronDown className="text-md font-bold" />
              </button>
            </div>
           
           <div className="w-6 h-6 relative ">
                <img
                  onClick={handlenotification}
                  src={notification}
                  className="w-full h-full object-fill"
                />
                {showNotification && (
                  <div
                    ref={divNotification}
                    className="absolute z-50   flex flex-col gap-y-1  px-2 py-2  rounded-sm  border-2 border-[#737475] bg-slate-50 top-8"
                    >
                    <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                      Setting
                    </p>
                    <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                      Logout
                    </p>
                  </div>
                )}
              </div>
              <div className="w-2 h-5">
                <img src={threedot} className="w-full h-full object-contain" />
              </div>
          </div>
          {/* End */}
        </div>

        <div className=" w-full px-3 ">
          <div className="py-8">
            <div className=" flex items-center justify-between gap-x-4 ">
              <h1 className="text-xl font-bold">Home/Properties</h1>
              <div className="flex items-center gap-x-4">
                <p className="text-xl">
                  <IoIosArrowUp className="text-4xl text-[#407c1e]" />
                </p>
                <p>
                  <ImCross />
                </p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-normal gap-y-2 gap-x-4 mt-3">
            <div className="border w-[80%] sm:w-44  flex justify-between rounded-md py-1 px-2 text-sm">
              <button>Active Properties </button>
              <span className="h-6 w-6 text-white p-1 text-xs bg-red-500 rounded-full flex justify-center items-center">
                05
              </span>
            </div>
            <div className="border w-[80%] sm:w-44  flex justify-between rounded-md py-1 px-2 text-sm">
              <button>Archive </button>
              <span className="h-6 w-6 text-white p-1 text-xs bg-red-500 rounded-full flex justify-center items-center">
                05
              </span>
            </div>
            <div className="border w-[80%] sm:w-44  flex justify-between rounded-md py-1 px-2 text-sm">
              <button>Views All</button>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row relative  justify-between mt-3">
            <div className="flex flex-col sm:flex-row  justify-center sm:justify-normal items-center gap-x-6">
              <div className="flex w-[80%] sm:w-44     gap-x-3 justify-center items-center ">
                <p className="text-sm">Show:</p>
                <select className="border border-gray-700 outline-none  rounded-sm h-8 bg-transparent  w-12 px-0 text-sm">
                  <option className="text-sm">25</option>
                  <option>35</option>

                  <option>45</option>

                  <option>55</option>
                </select>
              </div>

              <div className="flex w-[80%] sm:w-full   gap-x-3">
                <label className="text-xs   sm:text-sm mt-1">
                  Entries Search:
                </label>

                <div className="input-container relative">
                  <input
                    type="text"
                    className="pl-10 outline-none border rounded-md p-[2px]"
                  />
                  <BsSearch className="h-5 w-5 absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            </div>
           {/* start */}
           <div className=" flex   w-[80%] sm:w-auto  justify-center  mt-2 sm:mt-0  sm:justify-normal gap-x-4">
              {/* ------ */}
              <button
                type="button"
                // onClick={handleProperty}
                //onClick={handleuseNavigate}
                onClick={handleDropDown}
                className="bg-[#38bf67] px-4 !outline-none rounded-sm text-sm h-8 text-white"
              >
                Add Properties
              </button>
              {showDiv && (
                <div
                  ref={divRef}
                  className="absolute flex z-50 flex-col gap-y-1 top-7  border-2 border-[#737475] py-2 px-3 mt-3 rounded-xl bg-slate-50"
                >
                  <p onClick={handleuseNavigate} className="text-sm hover:bg-[#38bf67] hover:text-white px-1  rounded-sm cursor-pointer text-[#737475]">
                    Add Single
                  </p>
                  <p onClick={handleuseNavigate} className="text-sm hover:bg-[#38bf67] hover:text-white px-1 rounded-sm cursor-pointer text-[#737475]">
                    Add properties in bulk
                  </p>
                </div>
              )}
              <button
                type="button"
                //onClick={handleDropDown}
                onClick={handleGlobal}
                className="bg-[#38bf67] px-3 !outline-none rounded-sm text-sm h-8 text-white"
              >
                Action 
              </button>
              {showglobal && (
              <div
                ref={divglobal}
                className="absolute z-50 flex flex-col gap-y-1  top-11 end-0   rounded-xl  border-2 border-[#737475] bg-slate-50 "
              >
                <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                  Send Message
                </p>
                <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                  Retire
                </p>
                <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                  Delete
                </p>
              </div>
            )}
             
            </div>
           

           {/* end */}
          </div>
          <div className="w-[80%] sm:w-auto  flex justify-center sm:justify-normal items-center  mt-2">
            <p className="text-sm font-semibold text-[#737475] ">
              Show 1 to 12 entries
            </p>
          </div>
          <div className="py-">
            <div className="flex items-center justify-end px-1 gap-x-1">
              <p className="text-end px-2 py-2">Sort</p>
              <div
                onClick={handleSort}
                className="  flex relative flex-col outline-none "
              >
                <button className="border-none !outline-none">
                  <BsFillCaretUpFill className="text-xl  !outline-none mt-1" />
                </button>
                <button className=" border-none !outline-none">
                  <BsFillCaretDownFill className="text-xl outline-none -mt-2" />
                </button>
                {showSort && (
                  <div
                    ref={divSort}
                    className="absolute z-50 flex flex-col gap-y-1 px-4 right-0 bg-slate-50  rounded-xl  py-2 border-2 border-[#737475] top-8"
                  >
                    <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-4 cursor-pointer rounded-sm hover:text-white">
                      Occupied
                    </p>
                    <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-4 cursor-pointer rounded-sm hover:text-white">
                      Vacant
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="border cursor-pointer flex flex-col   items-center  rounded-lg">
              {propertyData.map((items, index) => (
                <div
                  className={`flex text-xs sm:text-base w-full hover:bg-blue-50 border-b ${
                    index === 5 ? "border-none" : ""
                  }`}
                >
                  <div
                    onClick={handlePropertyDetail}
                    className="w-[3%]  border-r flex items-center justify-center"
                  >
                    <input type="checkbox" />
                  </div>
                  <div className=" w-[24%]  flex justify-center items-center  ">
                    <p
                      className={`flex text-xs sm:text-base py-2 justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm border-r  text-center text-[#737475]"
                      }`}
                    >
                      {items.first}
                    </p>
                  </div>
                  <div className="w-[15%] flex items-center justify-center ">
                    <p
                      className={`flex text-xs sm:text-base py-2 justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm text-center border-r text-[#737475] text-xs"
                      }`}
                    >
                      {items.town}
                    </p>
                  </div>
                  <div className="w-[15%] flex items-center justify-center ">
                    <p
                      className={`flex text-xs sm:text-base py-2 justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm border-r text-center text-[#737475] text-xs"
                      }`}
                    >
                      {items.postCode}
                    </p>
                  </div>
                  <div className="w-[16%] flex items-center justify-center">
                    <p
                      className={`flex text-xs sm:text-base py-2 justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm border-r text-center text-[#737475] text-xs"
                      }`}
                    >
                      {items.tenants}
                    </p>
                  </div>
                  <div className="w-[16%] flex items-center justify-center ">
                    <p
                      className={`flex text-xs  sm:text-base py-2 justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm border-r text-center text-white   text-xs"
                      }`}
                    >
                      <p
                        className={` ${
                          index === 0
                            ? "bg-white"
                            : index === 4
                            ? "bg-[#b1b1b1] px-2 rounded-2xl"
                            : "bg-[#38bf67] px-2 rounded-2xl  }"
                        }`}
                      >
                        {items.status}
                      </p>
                    </p>
                  </div>
                  <div className="w-[11%] flex items-center justify-center ">
                    <p
                      onClick={() => {
                        if (index === 4) {
                          handleSelect();
                        }
                      }}
                      className={`flex text-xs sm:text-base relative justify-center items-center w-full hover:bg-blue-50 ${
                        index === 0
                          ? "font-bold"
                          : "font-normal sm:text-sm text-center flex relative items-center gap-x-2 text-[#737475] text-xs"
                      }`}
                    >
                      {items.select}
                      {items.icons}

                      {index === 4 &&
                        showSelect && ( // Conditionally show the sort section only for index number 4
                          <div
                            ref={divSelect}
                            className="absolute flex flex-col gap-y-1 px-4 right-0 bg-slate-50  rounded-xl w-56 z-50  py-2 border-2 border-[#737475] top-8"
                          >
                            <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-4 cursor-pointer rounded-sm hover:text-white">
                              Add New
                            </p>
                            <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-4 cursor-pointer rounded-sm hover:text-white">
                              Send Message
                            </p>
                            <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-4 cursor-pointer rounded-sm hover:text-white">
                              Edit property
                            </p>
                            <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-4 cursor-pointer rounded-sm hover:text-white">
                              Archive property
                            </p>
                            <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-4 cursor-pointer rounded-sm hover:text-white">
                              Delete
                            </p>
                          </div>
                        )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex border rounded-sm w-44 mt-4 ">
              <button className="border-r text-sm w-11 p-1">Excel</button>
              <button className="border-r text-sm w-11 p-1">CSV</button>

              <button className="border-r text-sm w-11 p-1">PDF</button>

              <button className="border-r text-sm w-11 p-1">Print</button>
            </div>
            <div className="flex items-center gap-x-3 mt-4 ">
              <button className="text-sm font-semibold">Previous</button>
              <p className="border text-sm  flex rounded items-center justify-center w-7 h-7">
                1
              </p>
              <button className="text-sm font-semibold">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
