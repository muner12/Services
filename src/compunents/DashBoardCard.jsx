import 
 { useState } from "react";
import DashBoardCardData from "../Config/DashBoardCardData";
import "../Style/Card.css";
import ModelOne from "./ModalOne";
import ModelTwo from "./ModalTwo";
import ModelThree from "./ModelThree";
import ModelFour from "./ModelFour";


const DashBoardCard = () => {
  const [openOne, setOpenOne] = useState(false);
  const handleOpenOne = () => {
    setOpenOne(true);
  };
  const handleCloseOne = () => {
    setOpenOne(false);
    setOpenFour(false);
  };

  const [openTwo, setOpenTwo] = useState(false);
  const handleOpenTwo = () => {
    setOpenTwo(true);
  };
  const handleCloseTwo = () => {
    setOpenTwo(false);
    setOpenFour(false);
  };

  const [openThree, setOpenThree] = useState(false);
  const handleOpenThree = () => {
    setOpenThree(true);
  };
  const handleCloseThree = () => {
    setOpenThree(false);
    setOpenFour(false);
  };

  const [openFour, setOpenFour] = useState(false);
  const handleOpenFour = () => {
    setOpenFour(true);
  };
  const handleCloseFour = () => {
    console.log('close');
    setOpenFour(false);
  };



  return (
    <div className="flex justify-between py-6  w-full">
      {DashBoardCardData.map((items, index) => (
        <div
          key={items.id}
          onClick={() => {
            if (items.id === 1) {
              handleOpenOne();
            }
            else if (items.id === 2) {
              console.log("Open 2")
              handleOpenTwo();
            }
            else if (items.id === 3) {
              console.log("Open 3")
              handleOpenThree();
            }
            else if (items.id === 4) {
              console.log("Open 4")
              handleOpenFour();
            }
            else{
              handleCloseOne();
              handleCloseTwo();
              handleCloseThree();
              handleCloseFour();
            }
          }}
          className="relative flex  flex-col items-center justify-center w-1/4 py-10 border shadow-md transition duration-300 ease-in-out hover:bg-slate-200 hover:scale-105 cursor-pointer rounded-xl h-60 mx-2"
        >
           
         
        

          <button
            type="button"
            className="absolute text-xl outline-none custom-button right-2 top-1"
          >
            {items.btn}
          </button>
          <h1 className="text-[50px] font-extrabold">{items.number}</h1>
          <p className="text-[#737475] text-sm font-semibold">{items.time}</p>
          <div className="font-bold">
            <p className="flex gap-x-3">
              {items.comp}
              {items.colon}
              <span className="text-[#38bf67]">{items.percent}</span>
            </p>
            <p className="flex gap-x-3">
              {items.Ncom}
              {items.colon}
              <span className="text-[#737475]">{items.percent}</span>
            </p>
            <p className="flex gap-x-3">
              {items.exp}
              {items.colon}
              <span className="text-red-400">{items.percent}</span>
            </p>
          </div>
          <div className="absolute bottom-0 flex items-center justify-center w-full bg-blue-100 rounded-b-lg h-9 gap-x-3 ">
            <img src={items.icons} className="w-5 h-5" />
            <p className="font-bold text-[#737475]">{items.open}</p>
          </div>
        </div>
      ))}
          <ModelOne open={openOne} handleClose={handleCloseOne} />
          <ModelTwo open={openTwo} handleClose={handleCloseTwo} />
          <ModelThree open={openThree} handleClose={handleCloseThree} />
          <ModelFour open={openFour} handleClose={handleCloseFour} />
    </div>
  );
};

export default DashBoardCard;
