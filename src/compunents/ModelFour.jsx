import { Box, Modal } from "@mui/material";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { BsExclamationCircle } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import suitcase from "../images/suitcase.png";
import downArrow from "../images/downArrow.png";
import Chart from "react-apexcharts";
import CompliaceCard from "./CompliaceCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "76%",
  zIndex:"4",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: "100%",
  overflowY: "scroll",
  bgcolor: "background.paper",

  boxShadow: 50,
  borderRadius: 2,
};

const ModelFour = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open} onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          sx: {
            backdropFilter: "blur(3px)", // Optional: Add backdrop styling
          },
        }}
      >
        <Box sx={style}>
          <div className="flex items-center justify-between w-full p-4 text-2xl font-semibold text-white bg-green-500 rounded-sm ">
            <div className="flex items-center gap-x-2">
              <img src={suitcase} className="object-cover w-5 h-5 text-white" />
              <h1>Compliance</h1>
            </div>
            <div
              onClick={() => handleClose()}
              className="w-6 h-6 p-1 bg-black rounded-sm"
            >
              <ImCross className="text-base font-normal" />
            </div>
          </div>
          <div className="px-3 py-4">
            <CompliaceCard />
            <div className="flex flex-col items-center mt-3 border rounded-lg">
              <div className="flex w-full text-xs sm:text-base ">
                <div className="w-[30%] border-r sm:py-1  flex items-center justify-center">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Property
                  </p>
                </div>
                <div className=" w-[25%] border-r">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Compliance
                  </p>
                </div>
                <div className="w-[25%] border-r ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2">
                    Status
                  </p>
                </div>
                <div className="w-[20%] border-r ">
                  <p className="flex items-center justify-center h-full text-xs font-bold text-center sm:text-base sm:py-2 ">
                    Action
                  </p>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[30%] sm:py-1 border-r flex items-center justify-center">
                  <p className="flex items-center justify-center h-full text-[#737475] text-[5px] text-center sm:text-[10px] font-semibold sm:py-1">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className=" w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-1">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[20%] flex items-center justify-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-xs px-2 rounded-sm py-[2px]"
                  >
                    Go to Property
                  </button>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[30%] sm:py-0 border-r flex items-center justify-center">
                  <p className="flex items-center justify-center h-full text-[#737475] text-[5px] text-center sm:text-[10px] font-semibold sm:py-1">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className=" w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-1">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[20%] flex items-center justify-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-xs px-2 rounded-sm py-[2px]"
                  >
                    Go to Property
                  </button>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[30%] sm:py-0 border-r flex items-center justify-center">
                  <p className="flex items-center justify-center h-full text-[#737475] text-[5px] text-center sm:text-[10px] font-semibold sm:py-1">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className=" w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-1">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[20%] flex items-center justify-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-xs px-2 rounded-sm py-[2px]"
                  >
                    Go to Property
                  </button>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[30%] sm:py-0 border-r flex items-center justify-center">
                  <p className="flex items-center justify-center h-full text-[#737475] text-[5px] text-center sm:text-[10px] font-semibold sm:py-1">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className=" w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-1">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[20%] flex items-center justify-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-xs px-2 rounded-sm py-[2px]"
                  >
                    Go to Property
                  </button>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[30%] sm:py-0 border-r flex items-center justify-center">
                  <p className="flex items-center justify-center h-full text-[#737475] text-[5px] text-center sm:text-[10px] font-semibold sm:py-1">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className=" w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-1">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[20%] flex items-center justify-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-xs px-2 rounded-sm py-[2px]"
                  >
                    Go to Property
                  </button>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[30%] sm:py-0 border-r flex items-center justify-center">
                  <p className="flex items-center justify-center h-full text-[#737475] text-[5px] text-center sm:text-[10px] font-semibold sm:py-1">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className=" w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-1">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[20%] flex items-center justify-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-xs px-2 rounded-sm py-[2px]"
                  >
                    Go to Property
                  </button>
                </div>
              </div>
              <div className="flex w-full text-xs border-t sm:text-base ">
                <div className="w-[30%] sm:py-0 border-r flex items-center justify-center">
                  <p className="flex items-center justify-center h-full text-[#737475] text-[5px] text-center sm:text-[10px] font-semibold sm:py-1">
                    124 Broad Street, Swindon, SN1 2AB
                  </p>
                </div>
                <div className=" w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-1">
                    A-0001{" "}
                  </p>
                </div>
                <div className="w-[25%] ">
                  <p className="flex items-center justify-center h-full text-[#737475] text-xs text-center border-r sm:text-[10px] font-semibold sm:py-2">
                    0001{" "}
                  </p>
                </div>
                <div className="w-[20%] flex items-center justify-center ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white text-xs px-2 rounded-sm py-[2px]"
                  >
                    Go to Property
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end w-full px-3">
            <button className="text-white bg-[#38bf67] px-3 rounded-sm">
              View All
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModelFour;
