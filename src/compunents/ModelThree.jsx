import { Box, Modal, Popover } from "@mui/material";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { BsExclamationCircle } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import suitcase from "../images/suitcase.png";
import downArrow from "../images/downArrow.png";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

const style = {
  position: "absolute",
  top: "50%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "100%",
  overflowY: "scroll",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  // p: 4,
};

const chartOptionsOne = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
  },
  xaxis: {
    categories: ["this Months", "September", "August", "July", "Jun", "May"],
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40%", // Adjust the width of the bars
    },
  },
  dataLabels: {
    enabled: false, // Disable the data labels
  },
  colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#FF00FF"],
};

const chartSeriesOne = [
  {
    name: "Emergency",
    data: [47, 50, 40, 45, 48, 60],
    color: "#38bf67", // First pair color
  },
];

const chartSeriesLine = [
  {
    name: "Sales",
    data: [50, 50, 140, 10, 90, 90, 20, 20, 70, 25, 70, 20],
  },
  {
    name: "Requests",
    data: [20, 30, 100, 6, 60, 30, 70, 29, 40, 5, 79, 80],
  },
];

const chartOptionsLine = {
  chart: {
    id: "line-chart",
    toolbar: {
      show: false,
       // Set show property to false to hide the toolbar/menu
    },
      
  },
  xaxis: {
    
    title: {
      text: "Days",
      style: {
        fontSize: "14px",
        fontWeight: "0px",
        textAlign: "center",
      },
    },
  },
  yaxis: {
    title: {
      text: "Jobs",
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
    colors: ["#5869C1","#FEDA32"],
  },
  markers: {
    show: true, // Set show property to true to display the dots
    size: 5, // Adjust the size of the dots
    colors: ["#5869C1","#FEDA32"],
    strokeWidth: 0,
  },
};

const ModalThree = ({ open, handleClose }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickPopUp = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const opened = Boolean(anchorEl);
  const id = opened ? "simple-popover" : undefined;
  const percentage = 77;
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex items-center justify-between w-full p-4 text-2xl font-semibold text-white bg-green-500 rounded-sm ">
          <div className="flex items-center gap-x-2">
            <img src={suitcase} className="object-cover w-5 h-5 text-white" />
            <h1>Job Close</h1>
          </div>
          <div
            onClick={() => handleClose()}
            className="w-6 h-6 p-1 bg-black rounded-sm"
          >
            <ImCross className="text-base font-normal" />
          </div>
        </div>
        <div className="px-10 ">
          <div className="flex justify-between mt-3 gap-x-3 ">
            <div className="w-1/2 border rounded-md shadow-sm ">
              <div className=" h-44">
                <ReactSpeedometer
                  fluidWidth={true}
                  ringWidth={20}
                  value={percentage}
                  minValue={0}
                  maxValue={100}
                  height={130}
                  needleHeightRatio={0.3}
                  needleColor="black"
                  segments={1}
                  startColor={`rgba(33, 197, 219, ${percentage / 100})`}
                  endColor="#DFE1E3"
                  customSegmentLabels={[]}
                />
              </div>
              <hr />
              <h3 className="py-1 font-semibold text-center">
                Current Response Time
              </h3>
            </div>
            <div className="w-1/2 border rounded-md shadow-sm ">
              <div className=" h-44">
                <ReactSpeedometer
                  fluidWidth={true}
                  ringWidth={20}
                  value={percentage}
                  minValue={0}
                  maxValue={100}
                  height={130}
                  needleHeightRatio={0.3}
                  needleColor="black"
                  segments={1}
                  startColor={`rgba(33, 197, 219, ${percentage / 100})`}
                  endColor="#DFE1E3"
                  customSegmentLabels={[]}
                />
              </div>
              <hr />
              <h3 className="py-1 font-semibold text-center">
                Current Response Time
              </h3>
            </div>
          </div>
          {/* line chart */}
          <div className="w-full border relative rounded-md shadow-sm h-[50vh]">
            <div className="relative flex justify-between p-3">
              <h1 className="flex items-center text-lg font-bold gap-x-2 ">
                Timeline
                <span className="text-sm font-semibold text-[#737475]">
                  (Last 24 hours)
                </span>
              </h1>

              <div className="relative">
                <BsExclamationCircle
                  onClick={handleClickPopUp}
                  className="text-2xl text-[#737475]"
                />
               
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

          {/* bar chart */}
          <div className="mt-3 border rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold px-3 text-[#737475]">
                  Previous Month Comparison
                </h1>
                <div className="object-fill w-5">
                  <img src={downArrow} />
                </div>
              </div>
              <div className="flex justify-end px-2 m-2">
                {" "}
                <BsExclamationCircle className="text-2xl text-gray-500" />
              </div>
            </div>
            <hr />
            <Chart
              options={chartOptionsOne}
              series={chartSeriesOne}
              type="bar"
              height="250"
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalThree;
