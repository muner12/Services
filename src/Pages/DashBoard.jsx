import React, { useState } from "react";
import { AiFillAccountBook ,AiFillCaretDown} from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import Chart from "react-apexcharts";
import dash from "../images/dash.png";
import mbll from "../images/mbll.png";
import globe from "../images/globe.png";
import msgg from "../images/msgg.png";
import yellowLightOn from "../images/yellow_light_on.svg";
import yellowLightOff from "../images/yellow_light_off.svg";
// import Chart from 'react-apexcharts';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import DashBoardCard from "../compunents/DashBoardCard";
import { BsCurrencyPound, BsExclamationCircle } from "react-icons/bs";
import ReactApexChart from "react-apexcharts";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import DashBoardNavbar from "../compunents/DashboardNavbar";

const DashBoard = () => {


//calender show/hide

const [showCalander,setShowCalender]=useState(false);
const calenderHander=()=>{
  setShowCalender(!showCalander);
}

  const chartOptionsOne = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Mon",
        "Tue",
        "Wed",
        "Thur",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thur",
        "Fri",
        "Sat",
        "Sun",
      ],
    },
  };

  const ReportPerCategoryChartOptions = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Eletrician",
        "Gas & Heating",
        "Plumber",
        "Draniage",
        "LockSmith",
        "Handyman"
      ],
    },
  };

  const ReportPerCategoryChartSeries = [
    {
      name: "Emergency",
      data: [40, 30, 20, 30, 40, 40],
      color: "#FEDA32", // First pair color
    },
    {
      name: "Non Emergency",
      data: [20, 50, 40, 50, 30, 30],
      color: "#737475",
    },
  ];

  
  const chartSeriesOne = [
    {
      name: "Open Jobs",
      data: [40, 30, 20, 30, 40, 40, 20, 30, 40, 40, 40, 30, 20, 30],
      color: "#FF5722", // First pair color
    },
    {
      name: "Close Job",
      data: [20, 50, 40, 50, 30, 30, 40, 50, 20, 30, 30, 50, 40, 50],
      color: "#03A9F4",
    },
  ];

  const chartOptions = {
    chart: {
      id: "horizontal-bar",
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ["13 day", "11 day", "9 day", "5 day", "3 day", "1 day"],
      labels: {
        show: false, // Hide x-axis labels
      },
    },
    grid: {
      show: false, // Remove the background grid lines
    },
    stroke: {
      show: false, // Remove the lines
    },
  };

  const chartSeries = [
    {
      name: "None-Emergency",
      data: [60, 30, 45, 20, 55, 40],
      color: "#737475",
    },
  ];
  const chartOptionsTwo = {
    chart: {
      id: "horizontal-bar",
      inverted: true,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        horizontalReverse: true,
        inverted: true,
      },
      legend: {
        position: "left",
      },
    },
    xaxis: {
      reverse: true,
      labels: {
        show: false, // Hide x-axis labels
      },
    },

    yaxis: {
      reverse: true,
      labels: {
        show: false, // Hide x-axis labels
      },
    },
    grid: {
      show: false, // Remove the background grid lines
    },
  };

  const chartSeriesTwo = [
    {
      name: "Emergency",
      color: "#feda32",
      data: [60, 30, 45, 20, 55, 40],
    },
  ];

  const chartOptionsDonut = {
    chart: {
      id: "donut-chart",
      expandOnClick: false,
    },
    labels: ["Label 1", "Label 2", "Label 3", "Label 1", "Label 2", "Label 3"],
    dataLabels: {
      enabled: true,
      position: "outside",
      offset: 330,
      style: {
        colors: ["#737475"],
      },
    },
    colors: ["#FF5E8C", "#55C9C2", "#FF5E5E", "#B8D60B", "#FFC70D", "#FF8A0D"],
    series: [44, 55, 41, 33, 22, 12],
    stroke: {
      width: 0,
      colors: undefined,
    },

    plotOptions: {
      pie: {
        size: 100,
        expandOnClick: false,

        donut: {
          background: "#737475",
          size: "40%", // Adjust the size of the donut hole as per your preference
          labels: {
            show: true,
            // Show labels inside the donut chart

            total: {
              show: true, // Show label for total value
              label: "Total amout", // Custom label for total
              color: "#fff", // Custom color for total label
              fontSize: "8px", // Custom font size for total label
              // fontFamily: 'Arial, sans-serif' // Custom font family for total label
            },
            offset: {
              y: -20, // Adjust the vertical offset of the inner text
              radius: 150, // Adjust the radius of the outer position
            },
          },
        },
      },
    },
  };
  const chartOptionsDonutTwo = {
    chart: {
      id: "donut-chart",
      strokeWidth: 20,
    },
    labels: [
      "Electrician",
      "Plumber",
      "Handyman",
      "Gas & heating",
      "Locksmith",
      "Drainage",
    ],
    colors: ["#FF5E8C", "#55C9C2", "#FF5E5E", "#B8D60B", "#FFC70D", "#FF8A0D"],
    dataLabels: {
      enabled: false,
      position: "center",
      formatter: function (val, opts) {
        const label = opts.w.config.labels[opts.seriesIndex];
        const percent = opts.w.config.series[opts.seriesIndex];
        return `${label}${percent}%`;
      },
    },

    stroke: {
      width: 0, // Remove the stroke
      colors: undefined, // Remove the stroke color
    },

    series: [25, 25, 25, 25],
    plotOptions: {
      pie: {
        donut: {
          size: "90%", // Adjust the size of the donut hole as per your preference
        },
      },
    },
  };

  
const ResponseTimeChartOptions = {
  series: [44, 55, 13, 43, 22],
  colors: ["#F44134", "#E91C62", "#9B26AF", "#6639B6"],
  labels: ["Jobs nearing", "Jobs Responded", "Job Past Target", "Jobs Waiting to"],
  options: {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    labels: {
      style: {
        colors: ["#000000", "#000000", "#000000", "#000000"],
        fontSize: "14px", // Font size of label text
        fontWeight: "bold", // Make label text bold
      },
      offsetY: 8, // Adjust the gap between labels
    },
  },
};

  const ResponseTimeChartSeries = [35, 20, 35, 35]
  
  const chartOptionsDonutThree = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%", // This determines the size of the inner circle (the donut hole)
            background: "transparent",
            labels: {
              show: false,
              name: {
                show: false,
              },
              value: {
                show: false,
              },
              total: {
                show: false,
              },
            },
          },
        },
      },
      // Other options for your chart can go here
    },
  };
  const chartOptionsDonutFour = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "40%", // This determines the size of the inner circle (the donut hole)
            background: "transparent",
            labels: {
              show: false,
              name: {
                show: false,
              },
              value: {
                show: false,
              },
              total: {
                show: false,
              },
            },
          },
        },
      },
      // Other options for your chart can go here
    },
  };
  const chartOptionsLine = {
    chart: {
      id: "line-chart",
      toolbar: {
        show: false, // Set show property to false to hide the toolbar/menu
      },
    },
    xaxis: {
      categories: [
        "02am",
        "04am",
        "06am",
        "08am",
        "10am",
        "12pm",
        "02pm",
        "04pm",
        "06pm",
        "08pm",
        "10pm",
        "12am",
      ],
      title: {
        text: "Hours of the days",
        style: {
          fontSize: "14px",
          fontWeight: "0px",
          textAlign: "center",
        },
      },
    },
    yaxis: {
      title: {
        text: "No Of Job Repoted",
        style: {
          fontSize: "14px",
          fontWeight: "0px",
          textAlign: "center",
        },
      },
    },

    stroke: {
      width: 2,
      // curve: 'smooth',
      colors: ["#38bf67"],
    },
    markers: {
      show: true, // Set show property to true to display the dots
      size: 5, // Adjust the size of the dots
      colors: ["#38bf67"],
      strokeWidth: 0,
    },
  };

  const chartSeriesLine = [
    {
      name: "Sales",
      data: [50, 50, 140, 10, 90, 90, 20, 20, 70, 25, 70, 20],
    },
  ];
  ///POPOVER in React js
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickPopUp = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const optionsReverse = {
    chart: {
      id: "horizontal-bar-chart",
      inverted: true, // Set the inverted attribute to true
    },
    xaxis: {
      categories: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
      ],
    },
  };

  const seriesReverse = [
    {
      name: "Series 1",
      data: [44, 55, 41, 67, 22],
    },
  ];

  // const DonutChart = () => {
  const chartOptionswajid = {
    legend: {
      show: false,
    },
    series: [44, 55, 13, 44, 55, 66],
    colors: ["#FF5E8C", "#55C9C2", "#FF5E5E", "#B8D60B", "#FFC70D", "#FF8A0D"],

    stroke: {
      width: 0, // Remove the stroke
      colors: undefined, // Remove the stroke color
    },
    plotOptions: {
      pie: {
        donut: {
          size: "40%", // Adjust the size of the donut hole as per your preference
        },
      },
    },
    labels: ["Label 1", "Label 2", "Label 3"],
  };

  return (
    <div className="flex flex-col overflow-x-hidden w-full">
      {/* <Sidebar /> */}
      <div className="flex flex-col">
        <DashBoardNavbar />
        <div className="w-full px-8 py-6">
        <div className="flex  items-center justify-end gap-x-3">
        <div className="bg-[#38bf67] text-white rounded-sm flex items-center p- justify-center w-10 h-10">
          <AiFillAccountBook size="35" className="text-2xl" />
        </div>
        <div onClick={calenderHander} className="relative input-container border p-3 rounded flex justify-end w-1/4 mr-2 cursor-pointer">
          <FaCalendarAlt className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-1 top-1/2" />

          {/* <select
            type="text"
            className="text-center w-full px-2 outline-none border rounded-md p-[2px]"
          >
            <option>Today</option>
            <option>7 Days ago</option>
            <option>14 Days ago</option>
            <option>1 Month ago</option>
          </select> */}
          <AiFillCaretDown className="text-gray-400"/>
        </div>
        {showCalander && (
                <div
             
                  className="absolute flex flex-col gap-y-2 top-40  my-4   right-15 border-2 border-green-600 z-50 py-2 px-3  rounded-xl bg-slate-50"
                >
                  <p className="text-sm bg-[#38bf67] text-white px-1  rounded-sm cursor-pointer text-[#737475]">
                    Today
                  </p>
                  <p className="text-sm hover:bg-[#38bf67] hover:text-white px-1 rounded-sm cursor-pointer text-[#737475]">
                   7 Days ago
                  </p>
                  <p className="text-sm hover:bg-[#38bf67] hover:text-white px-1 rounded-sm cursor-pointer text-[#737475]">
                  14 Days ago
                  </p>
                  <p className="text-sm hover:bg-[#38bf67] hover:text-white px-1 rounded-sm cursor-pointer text-[#737475]">
                   21 Days ago
                  </p>
                  <p className="text-sm hover:bg-[#38bf67] hover:text-white px-1 rounded-sm cursor-pointer text-[#737475]">
                  1 Month ago
                  </p>
                </div>
              )}
      </div>
          <DashBoardCard />
          <div className="flex items-center justify-center gap-x-4">
            <div className="relative w-1/2 border rounded-md shadow-sm ">
              <div className="relative flex justify-between w-full px-3 py-2 border-b">
                <h1 className="flex items-center text-lg font-bold gap-x-2 ">
                  Response Time
                </h1>
              </div>
              <div className="flex flex-col p-2">
                <div className="flex flex-col w-full border rounded-md shadow-md">
                  <div className=" flex items-center justify-around py-2 text-[17px] font-medium text-[#737475] w-full rounded-t-md bg-[#38BF67] bg-opacity-[13%]">
                    <p>Target Response Time</p>
                    <p>Current Time</p>
                  </div>
                  <div className=" flex items-center justify-around py-1 text-[19px] font-semibold text-[#737475] w-full rounded-b-md ">
                    <p className="text-green-500">02:00:00</p>
                    <p className="text-red-500">80%</p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full h-full py-8">
                  <ReactApexChart
                    ringWidth={20}
                    options={ResponseTimeChartOptions}
                    series={ResponseTimeChartSeries}
                    type="donut"
                    width="380"
                    height="380"
                  />
                </div>
                {/* <div className="w-full ">
              <ReactApexChart
                options={chartOptionsLine}
                series={chartSeriesLine}
                type="line"
                height={250}
              />
            </div> */}
              </div>
            </div>
            <div className="relative w-1/2 border rounded-md shadow-sm ">
              <div className="relative flex justify-between w-full px-3 py-2 border-b">
                <h1 className="flex items-center text-lg font-bold gap-x-2 ">
                  Close Time
                </h1>
              </div>
              <div className="flex flex-col p-2">
                <div className="flex flex-col w-full border rounded-md shadow-md">
                  <div className=" flex flex-row items-center justify-between border-b text-[17px] font-medium text-[#737475] w-full  rounded-t-md ">
                    <p className="bg-[#38BF67] bg-opacity-[13%] w-1/4 ps-3 py-[7px]">
                      Target
                    </p>
                    <div className="flex flex-row items-center justify-around w-full">
                      <div className="flex items-center justify-center gap-3 text-green-500 ">
                        <img src={yellowLightOn} alt="Light On"></img>
                        <h2>2 Days</h2>
                      </div>
                      <div className="h-full py-[17px] border"></div>
                      <div className="flex items-center justify-center gap-3 text-green-500">
                        <img src={yellowLightOff} alt="Light On"></img>
                        <h2>5 Days</h2>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-row items-center justify-between border-b text-[17px] font-medium text-[#737475] w-full  rounded-t-md ">
                    <p className="bg-[#38BF67] bg-opacity-[13%] w-1/4 ps-3 py-[7px]">
                      Achieve Rate
                    </p>
                    <div className="flex flex-row items-center justify-around w-full">
                      <div className="flex items-center justify-center gap-3 ">
                        <img src={yellowLightOn} alt="Light On"></img>
                        <h2>80%</h2>
                      </div>
                      <div className="h-full py-[17px] border"></div>
                      <div className="flex items-center justify-center gap-3 ">
                        <img src={yellowLightOff} alt="Light On"></img>
                        <h2>79%</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full h-full ">
                  <div className="w-full ">
                    {/* <div className="flex justify-between px-3 py-2">
                      <h1 className="flex items-center text-lg font-bold gap-x-2 ">
                        Job age Summary
                      </h1>
                    </div> */}
                    <div className="flex">
                      <div className="w-1/2 ">
                        <div className="rotate-180">
                          <Chart
                            options={chartOptionsTwo}
                            series={chartSeriesTwo}
                            type="bar"
                            height="250"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 ">
                        <div>
                          <Chart
                            options={chartOptions}
                            series={chartSeries}
                            type="bar"
                            height="250"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="w-full ">
              <ReactApexChart
                options={chartOptionsLine}
                series={chartSeriesLine}
                type="line"
                height={250}
              />
            </div> */}
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="flex items-center justify-center mt-4 gap-x-4">
            <div className="relative w-1/3 border rounded-md shadow-sm ">
              <div className="relative flex justify-between w-full px-3 py-2 border-b">
                <h1 className="flex items-center text-lg font-bold gap-x-2 ">
                  Electrical Saftey Check
                </h1>
              </div>
              <div className="flex flex-col p-2">
                <div className="flex items-center justify-center w-full h-full py-8">
                  <ReactApexChart
                    options={chartOptionsDonutFour}
                    series={chartOptionsDonutTwo.series}
                    type="donut"
                    width="380"
                    height="380"
                  />
                </div>
                {/* <div className="w-full ">
              <ReactApexChart
                options={chartOptionsLine}
                series={chartSeriesLine}
                type="line"
                height={250}
              />
            </div> */}
              </div>
            </div>
            <div className="relative w-1/3 border rounded-md shadow-sm ">
              <div className="relative flex justify-between w-full px-3 py-2 border-b">
                <h1 className="flex items-center text-lg font-bold gap-x-2 ">
                  Gas Saftey Check
                </h1>
              </div>
              <div className="flex flex-col p-2">
                <div className="flex items-center justify-center w-full h-full py-8">
                  <ReactApexChart
                    options={chartOptionsDonutFour}
                    series={chartOptionsDonutTwo.series}
                    type="donut"
                    width="380"
                    height="380"
                  />
                </div>
                {/* <div className="w-full ">
              <ReactApexChart
                options={chartOptionsLine}
                series={chartSeriesLine}
                type="line"
                height={250}
              />
            </div> */}
              </div>
            </div>
            <div className="relative w-1/3 border rounded-md shadow-sm ">
              <div className="relative flex justify-between w-full px-3 py-2 border-b">
                <h1 className="flex items-center text-lg font-bold gap-x-2 ">
                  Fire Saftey Risk Assesment
                </h1>
              </div>
              <div className="flex flex-col p-2">
                <div className="flex items-center justify-center w-full h-full py-8">
                  <ReactApexChart
                    options={chartOptionsDonutFour}
                    series={chartOptionsDonutTwo.series}
                    type="donut"
                    width="380"
                    height="380"
                  />
                </div>
                {/* <div className="w-full ">
              <ReactApexChart
                options={chartOptionsLine}
                series={chartSeriesLine}
                type="line"
                height={250}
              />
            </div> */}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 gap-x-4">
            <div className="relative w-1/2 border rounded-md shadow-sm ">
              <div className="relative flex justify-between w-full px-3 py-2 border-b">
                <h1 className="flex items-center text-lg font-bold gap-x-2 ">
                  Job Report Per Category
                </h1>
              </div>
              <div className="flex flex-row ">
                <div className="flex items-center justify-center w-[100%] h-full py-2">
                  <Chart
                    options={ReportPerCategoryChartOptions}
                    series={ReportPerCategoryChartSeries}
                    type="bar"
                    height="300"
                    className="w-[100%]"
                  />
                </div>
                {/* <div className="w-full ">
              <ReactApexChart
                options={chartOptionsLine}
                series={chartSeriesLine}
                type="line"
                height={250}
              />
            </div> */}
              </div>
            </div>
            <div className="relative w-1/2 border rounded-md shadow-sm ">
              <div className="relative flex justify-between w-full px-3 py-2 border-b">
                <h1 className="flex items-center text-lg font-bold gap-x-2 ">
                  Notice Board
                </h1>
              </div>
              <div className="flex flex-col p-2">
                <div className="flex flex-col items-center  w-full gap-2 overflow-y-scroll h-[20rem]">
                   <div className="bg-[#38BF67] bg-opacity-[15%] text-[11px] text-[#737475] border rounded-md p-2 flex flex-col gap-3 w-full">
                      <div className="flex items-center justify-between ">
                        <h3 className="font-bold">Manager</h3>
                        <div className="flex gap-3 opacity-50 item-center">
                          <p>02 Oct 2022</p>
                          <p>02:30</p>
                        </div>
                        
                      </div> 
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                      
                   </div>
                   <div className="bg-[#38BF67] bg-opacity-[15%] text-[11px] text-[#737475] border rounded-md p-2 flex flex-col gap-3 w-full">
                      <div className="flex items-center justify-between ">
                        <h3 className="font-bold">Manager</h3>
                        <div className="flex gap-3 opacity-50 item-center">
                          <p>02 Oct 2022</p>
                          <p>02:30</p>
                        </div>
                        
                      </div> 
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                      
                   </div>
                   <div className="bg-[#38BF67] bg-opacity-[15%] text-[11px] text-[#737475] border rounded-md p-2 flex flex-col gap-3 w-full">
                      <div className="flex items-center justify-between ">
                        <h3 className="font-bold">Manager</h3>
                        <div className="flex gap-3 opacity-50 item-center">
                          <p>02 Oct 2022</p>
                          <p>02:30</p>
                        </div>
                        
                      </div> 
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                      
                   </div>
                   <div className="bg-[#38BF67] bg-opacity-[15%] text-[11px] text-[#737475] border rounded-md p-2 flex flex-col gap-3 w-full">
                      <div className="flex items-center justify-between ">
                        <h3 className="font-bold">Manager</h3>
                        <div className="flex gap-3 opacity-50 item-center">
                          <p>02 Oct 2022</p>
                          <p>02:30</p>
                        </div>
                        
                      </div> 
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                      
                   </div>
                   <div className="bg-[#38BF67] bg-opacity-[15%] text-[11px] text-[#737475] border rounded-md p-2 flex flex-col gap-3 w-full">
                      <div className="flex items-center justify-between ">
                        <h3 className="font-bold">Manager</h3>
                        <div className="flex gap-3 opacity-50 item-center">
                          <p>02 Oct 2022</p>
                          <p>02:30</p>
                        </div>
                        
                      </div> 
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                      
                   </div>
                </div>
                {/* <div className="w-full ">
              <ReactApexChart
                options={chartOptionsLine}
                series={chartSeriesLine}
                type="line"
                height={250}
              />
            </div> */}
              </div>
            </div>
          </div>
       

          {/* job Report */}
        
          <div className="p-3 mt-4 border rounded-md shadow-md ">
            <div className="flex justify-between ">
              <h1 className="font-bold">
                Job Reported Via{" "}
                <span className="text-sm font-semibold text-[#737475]">
                  (Last 7 Days)
                </span>
              </h1>

              <div className="flex gap-x-4 ">
                <BsExclamationCircle className="text-xl text-gray-500" />
              </div>
            </div>
            <div>
              <Chart
                options={chartOptionsOne}
                series={chartSeriesOne}
                type="bar"
                height="350"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
