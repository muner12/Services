import { Box, Modal } from '@mui/material';
import suitcase from "../images/suitcase.png";
import Chart from "react-apexcharts";
import React from 'react'
import { ImCross } from 'react-icons/im';
const style = {
    position: "absolute",
    
    top: "50%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    borderRadius:2,
    // p: 4,
  };

const ModalOne = ({open,handleClose}) => {
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
      categories:[ ["Awaiting","landlord"], "Awaiting Contractor","Awaiting Tenant", "Action Required", "Job Resolved"],
    labels:{
      
      rotate:0,
      style:{
        deOverlappingLabels: true,
        fontSize:'10px'
      }
    },
    },
  };

  const chartSeriesOne = [
    {
      name: "Emergency",
      data: [40, 30, 20, 30, 40],
      color: "#feda32", // First pair color
    },
    {
      name: "None-Emergency",
      data: [20, 50, 40, 50, 30],
      color: "#737475",
    },
  ];
  return (
    <div>
         <Modal
            open={open}
            onClose={()=>{handleClose();}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            
          >
            <Box sx={style}>
              <div className="flex items-center justify-between w-full p-4 text-2xl font-semibold text-white bg-green-500 h-full rounded-sm">
               <div className="flex items-center gap-x-2">
               <img src={suitcase} className="object-cover w-5 h-5 text-white"/>
                <h1> Open Job per status</h1>
               </div>
                <div onClick={()=>{handleClose()}} className="w-6 h-6 p-1 bg-black"><ImCross className="text-base font-normal"/></div>
              </div>
              <div className=''>
                <Chart
                  options={chartOptionsOne}
                  series={chartSeriesOne}
                  type="bar"
                  height="400"
                />
              </div>
            </Box>
          </Modal>
    </div>
  )
}

export default ModalOne