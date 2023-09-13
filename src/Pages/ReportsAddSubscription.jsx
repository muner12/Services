import { AiOutlineExclamationCircle } from "react-icons/ai";
import threedot from "../images/threedot.png";
import substraction from "../images/substraction.png";
import notification from "../images/notifi.png";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { BsChevronLeft, BsExclamationCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ReportsAddSubscription = () => {
  const [selectFreqency, setSelectFreqency] = useState("once");
  return (
    <div className="flex w-full">
      <div className="w-full">
        <div className="flex items-center justify-between px-10 py-8 bg-green-100">
          <div className="flex items-center gap-x-4">
            <div>
              <div className="flex items-center gap-x-4">
                <Link to="/report">
                  <div className="w-7 h-7">
                    <BsChevronLeft size={25} color="#333333" />
                  </div>
                </Link>

                <h1 className="text-3xl font-bold">Subscribe</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-x-12">
            {/* <AiOutlineExclamationCircle
              style={{ strokeWidth: "1px", transform: "scale(1.1)" }}
              className="text-3xl text-[#737475]"
            />

            <div className="w-6 h-6">
              <img src={notification} className="object-fill w-full h-full" />
            </div> */}
            <div className="w-2 h-5">
              <BsExclamationCircle size={28} color="#737475" />
            </div>
          </div>
        </div>
        <div className="py-8 w-[100%]">
          <div className="">
            <div className="flex-row flex-wrap items-center justify-center gap-3 m-auto mt-3 md:mt-5 d-flex md:gap-4">
              <div className="py-4 px-8 md:px-20 border-[1px]  border-[#737475] max-w-xl rounded-md shadow-md border-opacity-20 ">
                <div className="w-full border-[1px] border-[#B1B1B1] text-[14px] font-semibold text-[#737475] placeholder:text-opacity-50 outline-none px-3 py-2 rounded-md my-2">
                  <input
                    type="text"
                    className="w-full"
                    placeholder="Report Name"
                  />
                </div>
                <select className="w-full border-[1px] border-[#B1B1B1] text-[14px] font-semibold text-[#737475] selection:text-opacity-50 placeholder:text-opacity-50 outline-none px-3 py-2 rounded-md my-2">
                  <option className="text-opacity-50">Select Group</option>
                </select>
                <h1 className="mt-2 text-[#737475] font-bold leading-6 opacity-100 md:text-[16px] text-[14px]">
                  Select Duration
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-2 md:flex-row">
                  <div className="w-full md:w-[70%] border-[1px] border-[#B1B1B1] text-[14px] font-semibold text-[#737475] placeholder:text-opacity-50 outline-none px-3 py-2 rounded-md my-2">
                    <input
                      type="text"
                      className="w-full"
                      placeholder="Start Date"
                    />
                  </div>
                  <div className="w-full md:w-[30%] border-[1px] border-[#B1B1B1] text-[14px] font-semibold text-[#737475] placeholder:text-opacity-50 outline-none px-3 py-2 rounded-md my-2">
                    <input type="text" className="w-full" placeholder="00:00" />
                  </div>
                </div>
                <div className="w-full md:w-[70%] border-[1px] border-[#B1B1B1] text-[14px] font-semibold text-[#737475] placeholder:text-opacity-50 outline-none px-3 py-2 rounded-md my-2">
                  <input
                    type="text"
                    className="w-full"
                    placeholder="End Date"
                  />
                </div>

                <h1 className="mt-3 text-[#737475] font-bold leading-6 opacity-100 md:text-[16px] text-[14px]">
                  Select Frequency
                </h1>

                <div className="mt-2 flex flex-row border-[1px]  border-[#38BF67] rounded-md">
                  <div
                    onClick={() => setSelectFreqency("once")}
                    className={`w-full ${
                      selectFreqency === "once" ? "bg-[#38BF67]" : "bg-white"
                    } cursor-pointer rounded-l-md border-e border-[#38BF67] py-2`}
                  >
                    <p
                      className={`text-center ${
                        selectFreqency === "once"
                          ? "text-white"
                          : "text-[#38BF67]"
                      }`}
                    >
                      Once
                    </p>
                  </div>
                  <div
                    onClick={() => setSelectFreqency("daily")}
                    className={`w-full ${
                      selectFreqency === "daily" ? "bg-[#38BF67]" : "bg-white"
                    } cursor-pointer  border-e border-[#38BF67] py-2`}
                  >
                    <p
                      className={`text-center ${
                        selectFreqency === "daily"
                          ? "text-white"
                          : "text-[#38BF67]"
                      }`}
                    >
                      Daily
                    </p>
                  </div>
                  <div
                    onClick={() => setSelectFreqency("weekly")}
                    className={`w-full ${
                      selectFreqency === "weekly" ? "bg-[#38BF67]" : "bg-white"
                    } cursor-pointer border-e border-[#38BF67] py-2`}
                  >
                    <p
                      className={`text-center ${
                        selectFreqency === "weekly"
                          ? "text-white"
                          : "text-[#38BF67]"
                      }`}
                    >
                      Weekly
                    </p>
                  </div>
                  <div
                    onClick={() => setSelectFreqency("monthly")}
                    className={`w-full ${
                      selectFreqency === "monthly" ? "bg-[#38BF67]" : "bg-white"
                    } cursor-pointer rounded-r-md py-2`}
                  >
                    <p
                      className={`text-center ${
                        selectFreqency === "monthly"
                          ? "text-white"
                          : "text-[#38BF67]"
                      }`}
                    >
                      Monthly
                    </p>
                  </div>
                </div>

                <div className="ms-4">
                  <h1 className="mt-3 text-[#737475] font-bold leading-6 opacity-50 md:text-[16px] text-[14px]">
                    Days of week *
                  </h1>
                  <div>
                    <div className="flex flex-row items-center justify-center gap-2 text-center ms-5 w-min">
                      <input
                        type="radio"
                        className="w-6 mt-1 m-0 p-0 checked:border-[#38BF67] checked::text-[#38BF67] checked:bg-[#38BF67]"
                      />
                      <label className="p-0 m-0 text-[#737475] opacity-50">
                        Monday
                      </label>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 text-center ms-5 w-min">
                      <input
                        type="radio"
                        className="w-6 mt-1 m-0 p-0 checked:border-[#38BF67] checked::text-[#38BF67] checked:bg-[#38BF67]"
                      />
                      <label className="p-0 m-0 text-[#737475] opacity-50">
                        Tuesday
                      </label>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 text-center ms-5 w-min">
                      <input
                        type="radio"
                        className="w-5 mt-1 m-0 p-0 checked:border-[#38BF67] checked::text-[#38BF67] checked:bg-[#38BF67]"
                      />
                      <label className="p-0 m-0 text-[#737475] opacity-50">
                        Wednesday
                      </label>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 text-center ms-5 w-min">
                      <input
                        type="radio"
                        className="w-5 mt-1 m-0 p-0 checked:border-[#38BF67] checked::text-[#38BF67] checked:bg-[#38BF67]"
                      />
                      <label className="p-0 m-0 text-[#737475] opacity-50">
                        Thrusday
                      </label>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 text-center ms-5 w-min">
                      <input
                        type="radio"
                        className="w-5 mt-1 m-0 p-0 checked:border-[#38BF67] checked::text-[#38BF67] checked:bg-[#38BF67]"
                      />
                      <label className="p-0 m-0 text-[#737475] opacity-50">
                        Friday
                      </label>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 text-center ms-5 w-min">
                      <input
                        type="radio"
                        className="w-5 mt-1 m-0 p-0 checked:border-[#38BF67] checked::text-[#38BF67] checked:bg-[#38BF67]"
                      />
                      <label className="p-0 m-0 text-[#737475] opacity-50">
                        Saturday
                      </label>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 text-center ms-5 w-min">
                      <input
                        type="radio"
                        className="w-5 mt-1 m-0 p-0 checked:border-[#38BF67] checked::text-[#38BF67] checked:bg-[#38BF67]"
                      />
                      <label className="p-0 m-0 text-[#737475] opacity-50">
                        Sunday
                      </label>
                    </div>
                  </div>
                </div>

                <h1 className="mt-3 text-[#737475] font-bold leading-6 opacity-100 md:text-[16px] text-[14px]">
                  Select Time
                </h1>
                <div className="w-full md:w-[30%] border-[1px] border-[#B1B1B1] text-[14px] font-semibold text-[#737475] placeholder:text-opacity-50 outline-none px-3 py-2 rounded-md my-2">
                  <input type="text" className="w-full" placeholder="00:00" />
                </div>

                <h1 className="mt-3 text-[#737475] font-bold leading-6 opacity-100 md:text-[16px] text-[14px]">
                  Select Target Audiance
                </h1>

                <div className=" mt-3 w-full border-[1px] border-[#B1B1B1] text-[14px] font-semibold text-[#737475] placeholder:text-opacity-50 outline-none px-3 py-2 rounded-md my-2">
                  <input
                    type="text"
                    className="w-full"
                    placeholder="To, Email"
                  />
                </div>
                <div className="mt-3 w-full border-[1px] border-[#B1B1B1] text-[14px] font-semibold text-[#737475] placeholder:text-opacity-50 outline-none px-3 py-2 rounded-md my-2">
                  <input type="text" className="w-full" placeholder="Subject" />
                </div>
                <div className="mt-3 w-full border-[1px] border-[#B1B1B1] text-[14px] font-semibold text-[#737475] placeholder:text-opacity-50 outline-none px-3 py-2 rounded-md my-2">
                  <textarea
                    type=""
                    className="w-full h-20 outline-none"
                    placeholder="Message"
                  />
                </div>

                <button
                  type="button"
                  className="mt-4 rounded-lg outline-none focus:border-none  text-1xl font-bold text-white bg-[#407C1E] w-full py-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAddSubscription;
