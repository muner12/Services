import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Style/MyCalender.css";
import { FiChevronLeft, FiChevronRight, FiEdit } from "react-icons/fi";
import { TiArrowMove } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import ClickAwayListener from "react-click-away-listener";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import Sidebar from "../Sidebar";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import cont from "../images/contractor.png";
import notification from "../images/notifi.png";
import threedot from "../images/threedot.png";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Calender = () => {
  const [value, onChange] = useState(new Date());

  const [showEventModel, setShowEventModel] = useState(false);
  const [showAddEventModel, setShowAddEventModel] = useState(false);

  const handleCancel = () => {
    onChange(new Date());
  };

  const handleSubmit = () => {
    console.log(value);
  };

  const handleClickAway = () => {
    setShowEventModel(false);
    setShowAddEventModel(false);
  };

  const formatDay = (locale, date) => {
    return date.getDate().toString();
  };

  const formatShortWeekday = (locale, date) => {
    const options = { weekday: "short" };
    return new Intl.DateTimeFormat(locale, options).format(date).slice(0, 1);
  };

  return (
    <div className="w-full">
      <div>
        <div className="flex items-center justify-between px-10 py-8 bg-green-100">
          <div className="flex items-center gap-x-4">
            <div>
              <div className="flex items-center gap-x-8">
                <button type="button" className="!outline-none">
                  <BsChevronLeft
                    style={{ strokeWidth: "1px", transform: "scale(1)" }}
                    className="text-xl !font-bold"
                  />
                </button>
                {/* <div className="w-6 h-6">
                  <img src={cont} />
                </div> */}

                <h1 className="text-3xl font-bold">Calendar</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-x-8">
            <AiOutlineExclamationCircle
              style={{ strokeWidth: "1px", transform: "scale(1.1)" }}
              className="text-3xl text-[#737475]"
            />
          </div>
        </div>
        <div className="mx-3 my-4">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="border border-[#737475] shadow-md rounded-xl p-2 w-[16rem]">
              <Calendar
                onChange={onChange}
                value={value}
                formatDay={formatDay}
                formatShortWeekday={formatShortWeekday}
                next2Label={null} // Hide next year label
                prev2Label={null} // Hide previous year label
                prevLabel={<FiChevronLeft />}
                nextLabel={<FiChevronRight />}
                className="my-calendar"
              />
              <div className="flex flex-row items-center justify-between mx-2 my-2">
                <button
                  onClick={handleCancel}
                  className="border border-[#5c5c5c] rounded-md py-2 px-4 text-md font-bold text-[#737475]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="border border-[#38BF67] bg-[#38BF67] rounded-md py-2 px-4 text-md font-bold text-white"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="border border-[#737475] rounded-xl w-full">
              <div className="py-2 px-3 border-b border-[#737475] border-opacity-25 ">
                <h4 className="text-sm text-[#B1B1B1] font-bold ">
                  Jan 31- Feb 04
                </h4>
              </div>
              <div className="overflow-x-auto min-w-min">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-center text-xl font-bold text-[#737475] border-b border-[#737475] border-opacity-25">
                      <th className="py-2">Mon 31</th>
                      <th>Tue 01</th>
                      <th>Wed 02</th>
                      <th>Thu 03</th>
                      <th>Fri 04</th>
                    </tr>
                  </thead>
                  <tbody className="gap-y-3">
                    <tr className="border-b-[5px] border-white ">
                      <td className="p-0 mb-3 ">
                        <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#38BF67] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#FEDA32] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#FEDA32]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#FC5461] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#FC5461]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#38BF67] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[5px] border-white ">
                      <td className="p-0 mb-3">
                        <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#38BF67] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#FEDA32] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#FEDA32]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#FC5461] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#FC5461]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#38BF67] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[5px] border-white ">
                      <td className="p-0 mb-3">
                        <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#38BF67] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#FEDA32] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#FEDA32]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#FC5461] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#FC5461]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#38BF67] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[5px] border-white ">
                      <td className="p-0 mb-3">
                        <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#38BF67] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#FEDA32] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#FEDA32]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#FC5461] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#FC5461]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3"></td>
                    </tr>
                    <tr className="rounded-bl-md">
                      <td className="p-0 mb-3"></td>
                      <td className="p-0 mb-3 bg-[#38BF67] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#FEDA32] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#FEDA32]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#FC5461] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#FC5461]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                      <td className="p-0 mb-3 bg-[#38BF67] bg-opacity-[16%]">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-[1rem] h-[2.7rem] bg-[#38BF67]"></div>
                          <div className="w-full text-sm text-[#737475] font-medium">
                            Lorem Ipsum
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="border border-[#737475] rounded-xl w-full mt-4">
            <div className="py-2 flex flex-row items-center justify-between gap-4 px-3 border-b border-[#737475] border-opacity-25 ">
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row gap-2">
                  <AiOutlineLeft
                    size={20}
                    className="p-1 rounded-sm border border-[#737475]"
                  />
                  <AiOutlineRight
                    size={20}
                    className="p-1 rounded-sm border border-[#737475]"
                  />
                </div>
                <h4 className="text-sm text-[#B1B1B1] font-bold ">
                  Jan 31- Feb 04
                </h4>
              </div>
              <div className="relative">
                <select className="py-1 px-4 rounded-sm border border-[#737475] outline-none">
                  {/* Your select options */}
                  <option>Today</option>
                  <option>7 days ago</option>
                  <option>14 days ago</option>
                  <option>21 days ago</option>
                  <option>1 month ago</option>
                </select>
                <div className="absolute pointer-events-none left-2 top-2">
                  <BsCalendar3 size={20} className="text-[#737475]" />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto min-w-min">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-center text-xl font-bold text-[#737475] border-b border-[#737475] border-opacity-25">
                    <th></th>
                    <th className="py-2">Mon 31</th>
                    <th>Tue 01</th>
                    <th>Wed 02</th>
                    <th>Thu 03</th>
                    <th>Fri 04</th>
                  </tr>
                </thead>
                <tbody className="gap-y-3">
                  <tr className="">
                    <td className="px-2 min-w-[4rem] text-sm font-bold text-[#737475]">
                      12 pm
                    </td>
                    <td className="relative w-1/5 p-0 mb-3 border-b border-white hover:">
                      <div
                        onClick={() => setShowEventModel(!showEventModel)}
                        className="flex cursor-pointer items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3"
                      >
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                      {showEventModel && (
                        <ClickAwayListener onClickAway={handleClickAway}>
                          <div className="absolute bottom-0 left-[20%] w-[30rem] h-5 drop-shadow-xl">
                            <div className="flex flex-row items-center justify-between px-3 py-3 bg-[#38BF67] rounded-t-md">
                              <h2 className="font-bold text-white text-md">
                                Add Event
                              </h2>
                              <div className="flex items-center justify-center gap-x-3">
                                <TiArrowMove size={20} color="white" />
                                <FiEdit size={20} color="white" />
                                <MdDelete size={20} color="white" />
                              </div>
                            </div>
                            <div className="bg-[#dedede] flex gap-2 items-center justify-center py-4 px-2">
                              <div>
                                <input
                                  className="w-[20px] h-[20px]"
                                  type="checkbox"
                                  name="checkbox"
                                />
                              </div>
                              <div className="w-full flex gap-3 items-center  text-sm text-[#737475] font-medium">
                                <h4 className="w-3/5">Lorem Ipsum</h4>
                                <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore et dolore magna
                                  aliquyam erat, sed diam voluptua. At vero eos
                                  et accusam et.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center py-3 bg-white ps-4 justify-normal gap-x-3 rounded-b-md">
                              <div className="p-2 rounded-full bg-[#DFE1E3]">
                                <GrAdd className="text-white" />
                              </div>
                              <h3 className="font-medium text-sm text-[#737475] ">
                                Add Event
                              </h3>
                            </div>
                          </div>
                        </ClickAwayListener>
                      )}
                    </td>
                    <td className="relative w-1/5 p-0 mb-3 border-b border-white hover:bg-[#DFE1E3]">
                      <div
                        className="flex items-center justify-center group"
                      >
                        <div
                          onClick={() =>
                            setShowAddEventModel(!showAddEventModel)
                          }
                          className="cursor-pointer p-2 w-min rounded-full bg-[#a7a7a7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <GrAdd className="text-white" />
                        </div>
                      </div>
                      {showAddEventModel && (
                        <ClickAwayListener onClickAway={handleClickAway}>
                          <div className="absolute bottom-0 left-[20%] w-[30rem] h-5 drop-shadow-xl rounded-b-md">
                            <div className="flex flex-row items-center justify-between px-3 py-3 bg-[#38BF67] rounded-t-md">
                              <h2 className="font-bold text-white text-md">
                                Add Event
                              </h2>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 bg-white">
                              <div>
                                <div className="w-[22rem] m-auto">
                                  <input
                                    type="text"
                                    className="py-2 px-4 w-full border border-[#707070] rounded-lg text-[#707070] bg-white"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div className="flex gap-x-3 w-[22rem]">
                                <div className="w-6/12 m-auto">
                                  <input
                                    type="text"
                                    className="py-2 px-4 w-full border border-[#707070] rounded-lg text-[#707070] bg-white"
                                    placeholder="Name"
                                  />
                                </div>
                                <div className="w-6/12 m-auto">
                                  <input
                                    type="text"
                                    className="py-2 px-4 w-full border border-[#707070] rounded-lg text-[#707070] bg-white"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="w-[22rem] m-auto">
                                  <input
                                    type="text"
                                    className="py-2 px-4 w-full border border-[#707070] rounded-lg text-[#707070] bg-white"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="w-[22rem] m-auto">
                                  <textarea
                                    type="text"
                                    className="py-2 px-4 w-full border border-[#707070] rounded-lg text-[#707070] bg-white"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-end w-full gap-4 me-5">
                                <button
                                  onClick={() => setShowAddEventModel(false)}
                                  className="text-sm font-bold border-2 border-opacity-25 text-opacity-70 px-5 py-1 rounded-md border-[#707070] text-[#707070]"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={() => setShowAddEventModel(false)}
                                  className="text-sm font-bold border-2 border-opacity-25 text-opacity-70 px-5 py-1 bg-[#38BF67] rounded-md border-[#38BF67] text-white"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </ClickAwayListener>
                      )}
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 min-w-[4rem] text-sm font-bold text-[#737475]">
                      01 pm
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white hover:">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 min-w-[4rem] text-sm font-bold text-[#737475]">
                      02 pm
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white hover:">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 min-w-[4rem] text-sm font-bold text-[#737475]">
                      03 pm
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white hover:">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 min-w-[4rem] text-sm font-bold text-[#737475]">
                      04 pm
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white hover:">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 min-w-[4rem] text-sm font-bold text-[#737475]">
                      05 pm
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white hover:">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 min-w-[4rem] text-sm font-bold text-[#737475]">
                      06 pm
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white hover:">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 min-w-[4rem] text-sm font-bold text-[#737475]">
                      07 pm
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white hover:">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 min-w-[4rem] text-sm font-bold text-[#737475]">
                      08 pm
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white hover:">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 min-w-[4rem] text-sm font-bold text-[#737475]">
                      10 pm
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white hover:">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white"></td>
                    <td className="w-1/5 p-0 mb-3 border-b border-white">
                      <div className="flex items-center bg-[#38BF67] bg-opacity-[16%] justify-center gap-3">
                        <div className="w-[1rem] h-[3.5rem] bg-[#38BF67]"></div>
                        <div className="w-full text-sm text-[#737475] font-medium">
                          Lorem Ipsum
                          <p className=" text-xs line-clamp-2  text-[#737475] font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
