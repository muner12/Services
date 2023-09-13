import React, { useState,useRef,useEffect } from "react";
import { AiFillAccountBook,AiFillCaretDown } from "react-icons/ai";

import { FaCalendarAlt,FaStop } from "react-icons/fa";
import Chart from "react-apexcharts";
import dash from "../images/dash.png";
import mbll from "../images/mbll.png";
import globe from "../images/globe.png";
import msgg from "../images/msgg.png";
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
import ProgressBar from "../compunents/ProgressBar";

const DashBoard2 = () => {
  const divRef = useRef(null);
  const [showCalender,setShowCalender]=useState(false);
const calenderHander=()=>{
  setShowCalender(!showCalender);
}
const handleClickOutside = (event) => {
  if (divRef.current && !divRef.current.contains(event.target)) {
    setShowCalender(false);
  }
};
useEffect(() => {
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

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
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ["13 day", "11 day", "9 day", "5 day", "3 day", "1 day"],
      labels: {
        show: false // Hide x-axis labels
      }
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
      enabled: false
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
        show: false // Hide x-axis labels
      }
    },
    
    yaxis: {
      reverse: true,
      labels: {
        show: false // Hide x-axis labels
      }
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
      expandOnClick: false
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
      enabled: true,
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

    series: [25, 7, 20, 17, 35, 12],
    plotOptions: {
      pie: {
        donut: {
          size: "34%", // Adjust the size of the donut hole as per your preference
        },
      },
    },
    legend:{
      position:"right",
      offsetY:28,
      offsetX:-50,
      itemMargin:{
        vertical:"4"
      }
    }
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

  //monthly cost donut chart
  const moptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
      },
    },
    annotations: {
      points: [
        {
          x: '50%',
          y: '50%',
          text: 'Center Text', // The text you want to display
          textColor: '#f5f', // Text color
          fontSize: '16px', // Font size
        },
      ],
    },
  };

  const mseries = [44, 55, 13, 43];

  //end
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
      id: 'horizontal-bar-chart',
      inverted: true, // Set the inverted attribute to true
    },
    xaxis: {
      categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    },
  };

  const seriesReverse = [
    {
      name: 'Series 1',
      data: [44, 55, 41, 67, 22],
    },
  ];

  // const DonutChart = () => {
    const chartOptionswajid = {
      
      legend: {
        show: false, 
      },
      series: [44, 55, 13,44,55,66,],
    colors: ["#FF5E8C", "#55C9C2", "#FF5E5E", "#B8D60B", "#FFC70D", "#FF8A0D"],

      stroke: {
        width: 0, // Remove the stroke
        colors: undefined, // Remove the stroke color
      },
      plotOptions: {
        pie: {
          donut: {
            labels:{
              show: false,
         total:{
          show: false,
          
          label:"Total",
          formatter:function(w){
            return w.globals.seriesTotals.reduce((a,b)=>a+b,0);
          }

         }

            },
            size: "40%", // Adjust the size of the donut hole as per your preference
            
          }
          
        },
        
      annotations: {
        points:[
          {
            x: '50%',
              y: '50%',
              text: 'Center Text', // The text you want to display
              textColor:'#FF5733', // Text color
              fontSize: '16px', // Font size
          },
        ]
      },
      },
      labels: ['Label 1', 'Label 2', 'Label 3'],
    };
  

  return (<div className="w-full">
   <div className="">
   {/* <Sidebar/> */}
    <div className="flex flex-col">
    <DashBoardNavbar/>
   
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
        {showCalender && (
                <div
             
                  className="absolute flex flex-col gap-y-1 top-40 mt-4  right-25 border-2 border-green-600 z-50 py-2 px-3  rounded-xl bg-slate-50"
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
        <div className="w-1/2 border relative rounded-md shadow-sm h-auto">
          <div className="relative flex justify-between p-3">
            <h1 className="flex items-center text-lg font-bold gap-x-2 ">
              Timeline
              <span className="text-sm font-semibold text-[#737475]">
                (Last 24 hours)
              </span>
            </h1>
            <div className="w-24">
              <input type="text" className="border rounded-sm " />
            </div>
            <div className="relative">
              <BsExclamationCircle
                onClick={handleClickPopUp}
                className="text-2xl text-[#737475]"
              />
              {/* <div   className="p-3 bg-red-400 "> */}
              <Popover
                className="mt-2 -ml-72"
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <div className="text-white  bg-[#737475] w-72 text-xs p-1 ">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </div>
              </Popover>
              {/* </div> */}
            </div>
          </div>
          <div className="flex p-2">
            <div className="w-full ">
              <ReactApexChart
                options={chartOptionsLine}
                series={chartSeriesLine}
                type="line"
                height={250}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 border rounded-md h-auto shadow-sm">
          <div className="flex justify-between p-4">
            <h1 className="flex items-center text-lg font-bold gap-x-2 ">
              Job Category
              <span className="text-sm font-semibold text-[#737475]">
                (Last 7 Days)
              </span>
            </h1>
            <BsExclamationCircle className="text-3xl text-gray-500" />
          </div>

          <div className="flex items-center justify-center ">
            <ReactApexChart
              options={chartOptionsDonutTwo}
              series={chartOptionsDonutTwo.series}
              type="donut"
              width="430"
              height="400"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 gap-x-4">
        <div className="w-1/2 p-3 border rounded-md shadow-md">
          <div className="flex justify-between ">
            <h1 className="font-bold">Message Consumption</h1>

            <div className="flex gap-x-4 ">
              <BsExclamationCircle className="text-xl text-gray-500" />

              <h2>
                <span className="text-[#38bf67] font-semibold">20</span>/
                <span className="text-[#b1b1b1]">100</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-3 border rounded-md shadow-md">
          <div className="flex justify-between ">
            <h1 className="text-lg font-bold">Licences</h1>
            <h1 className="font-bold flex gap-x-3 text-[#737475]">
              <span>Consumed:</span>10
            </h1>
            <h1 className="font-bold flex gap-x-3 text-[#737475]">
              <span>Available:</span>10
            </h1>

            <div className="flex gap-x-4 ">
              <BsExclamationCircle className="text-xl text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 gap-x-4">
        <div className="w-1/2  border rounded-md shadow-sm ">
          <div className="flex justify-between p-3">
            <h1 className="flex items-center text-lg font-bold gap-x-2 ">
              Job age Summary
              <span className="text-sm font-semibold text-[#737475]">
                (Last 7 days)
              </span>
            </h1>

            <BsExclamationCircle className="text-2xl text-gray-500" />
          </div>
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
          <div className="flex justify-center items-end p-2 mb-5">
            <span className="text-xs font-mono mr-4">Emgergency</span> <FaStop className="text-yellow-400"/>
            <FaStop className="text-[#737475] ml-5"/> <span className="text-xs font-mono ml-4">Non Emergency</span> 

            </div>
        </div>
        <div className="w-1/2 p-1 border rounded-md h-[40%] shadow-sm">
          <div className="flex justify-between p-3 py-1">
            <h1 className="flex items-center text-lg font-bold gap-x-2 ">
              Monthly Cost
            </h1>
            <div className="flex items-center gap-x-2">

            <div className="relative input-container w-44">
          <FaCalendarAlt className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-1 top-1/2" />

          <select
            type="text"
            className="text-center w-full px-2 outline-none border rounded-md p-[2px]"
          >
            <option>September</option>
            <option>September</option>
            <option>September</option>
            <option>September</option>
          </select>
        </div>
            
            <BsExclamationCircle className="text-2xl text-gray-500" />
            </div>
          </div>
          <div className="px-3 w-[40%]">
            <p className="text-[10px] font-semibold text-[#737475]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,.
            </p>
            <h5 className="text-[#b1b1b1] font-semibold text-sm">Monthly</h5>
            <h2 className="flex items-end font-bold text-[#737475]">
              <BsCurrencyPound className="font-bold text-[#737475]" />
              100.000.000
            </h2>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="w-[40%]">
              <ProgressBar/>
              {/* <ReactApexChart
                type="bar"
                style={{ width: "full" }}
                height={180}
                series={[
               
                  {
                    data: [35, 25, 45, 55, 20, 25],
                    color: "#FF5E8C",
                    colors: [
                      "#FF5E8C",
                      "#55C9C2",
                      "#FF5E5E",
                      "#B8D60B",
                      "#FFC70D",
                      "#FF8A0D",
                    ],
                  },
                  {
                    // name: "oil",
                    data: [80, 90, 70, 60, 95, 90],
                    color: "#737475",
                  },
                ]}
                options={{
          
                  title: {},
                  toolbar: {
                    show: false,
                  },
                  chart: {
                    stacked: true,
                  },

                  plotOptions: {
                    bar: {
                      dataLabels: {

                      position:"top"
                      },
                      horizontal: true,
                    },
                   
                  },
                 
                  xaxis: {
                    text: "addfsdfsdf",
                    labels: {
        show:false // Hide x-axis labels
      }
                  },
                  grid: {
                    show: false,
                  },
                  

                  yaxis: {
                    text: "",
                    labels: {
        show:true // Hide x-axis labels
      },
                    dataLabels: {
                      enabled: false,
                    },
                  },
                  categories: [2033, 55, 666, 777, 777, 66],
                }}
              /> */}
            </div>
            <div className="w-[70%]  flex items-center justify-center ">
              {/* <Chart
                options={chartOptionsDonut}
                series={chartOptionsDonut.series}
                type="donut"
                width="300"
                height="300"
              /> */}
              <div className="flex  justify-center items-center  relative mb-4 ">
              <div className="absolute bg-gray-600 w-[100px] h-[100px] rounded-full text-white flex justify-center text-sm items-center">Total <br/> 342</div>
              <ReactApexChart
      options={chartOptionswajid}
      series={chartOptionswajid.series}
      type="donut"
      height={220}
      width={250}
    /></div>
            </div>
          </div>
        </div>
      </div>

      {/* job Report */}
      <div className="flex items-center justify-center mt-4 gap-x-4">
        <div className="w-1/2 p-3 border rounded-md h-auto shadow-md">
          <div className="flex justify-between ">
            <h1 className="font-bold">
              Job Reported Via
              <span className="text-sm font-semibold text-[#737475]">
                (Last 7 Days)
              </span>
            </h1>

            <div className="flex gap-x-4 ">
              <BsExclamationCircle className="text-xl text-gray-500" />
            </div>
          </div>
          <div className="flex items-center justify-around p-2 mt-4 border rounded-md shadow-sm">
            <div className="flex items-center gap-x-2">
              <div className="bg-[#38bf67] w-6 h-6 rounded-sm p-1">
                <img src={dash} className="object-fill w-full h-full" />
              </div>
              <div className="flex gap-x-3 text-[#737475]">
                <h2 className="text-sm">App</h2>
                <h2 className="font-semibold">10</h2>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="bg-[#38bf67] w-6 h-6 rounded-sm p-1">
                <img src={globe} className="object-fill w-full h-full" />
              </div>
              <div className="flex gap-x-3 text-[#737475]">
                <h2 className="text-sm">App</h2>
                <h2 className="font-semibold">10</h2>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="bg-[#38bf67] w-6 h-6 rounded-sm p-1">
                <img src={msgg} className="object-fill w-full h-full" />
              </div>
              <div className="flex gap-x-3 text-[#737475]">
                <h2 className="text-sm">App</h2>
                <h2 className="font-semibold">10</h2>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="bg-[#38bf67] w-6 h-6 rounded-sm p-1">
                <img src={mbll} className="object-fill w-4 h-full" />
              </div>
              <div className="flex gap-x-3 text-[#737475]">
                <h2 className="text-sm">App</h2>
                <h2 className="font-semibold">10</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-3 border rounded-md shadow-md">
          <div className="flex justify-between ">
            <h1 className="font-bold">
              Invoices
              <span className="text-sm font-semibold ml-2 text-[#737475]">
                (Last 7 Days)
              </span>
            </h1>

            <div className="flex gap-x-4 ">
              <BsExclamationCircle className="text-xl text-gray-500" />
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2 mt-4 border rounded-md shadow-sm">
            <div className="flex items-center gap-x-2">
              <div className="flex gap-x-3 text-[#737475]">
                <h2 className="text-sm font-semibold">Paid Invoice</h2>
                <h2 className="font-semibold">10</h2>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="flex gap-x-3 text-[#737475]">
                <h2 className="text-sm font-semibold">Upaid Invoice</h2>
                <h2 className="font-semibold">10</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
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
   </div>
  );
};

export default DashBoard2;