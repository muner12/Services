import { useEffect, useState } from "react";
import Properties from "./Pages/Properties";
import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  BsChevronDown,
  BsExclamationCircle,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import AddProperties from "./Pages/AddProperties";
import Jobs from "./Pages/Jobs";
import Contractor from "./Pages/Contractor";
import Setting from "./Pages/Setting";
import Reports from "./Pages/Reports";
import Finance from "./Pages/Finance";
import Calender from "./Pages/Calender";
import DashBoard from "./Pages/DashBoard";
import menu from "../src/images/menu.png";
import FinanceContractorInvoice from "./Pages/FinanceContractorInvoice";
import FinanceLandlordInvoice from "./Pages/FinanceLandlordInvoice";
import Events from "./Pages/Events";
import Subscription from "./Pages/Subscription";
const Dashboard = ({ selectedContent }) => {
  // const getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((resposne) => resposne.json())
  //     .then((res) => setRecord(res));
  // };

  // useEffect(() => {
  //   getData();
  // });
  const CustomPopover = styled(Popover)`
    & .MuiPaper-root {
      background-color: transparent;
      ${"" /* border-style:'solid'; */}
      padding:10px;
      width: 200px;
      box-shadow: none;
      border: 2px solid gray;
    }
  `;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //DotspopOver

  const handleDots = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center w-full p-0 bg-green-100 h-28">
        <div className="flex items-center justify-start w-3/4 px-12 gap-x-2 ">
          {/* <AiFillHome className="text-2xl" /> */}
          <img src={menu} className="object-fill w-10 h-7"/>
          <h1 className="font-extrabold text-3xl font-[Roboto] ">Properties</h1>
        </div>
        <div className="flex items-center justify-between w-1/4 px-4">
          <div>
            <BsExclamationCircle className="text-3xl text-gray-500" />
          </div>
          <div className="flex items-center border-none outline-none gap-x-2 md:gap-x-3">
            <button
              type="button"
              onClick={handleClick}
              className=" text-xs md:text-sm bg-[#407c1e] outline-none border-none text-white px-2 rounded-sm flex items-center gap-x-2 py-1"
            >
              Global <BsChevronDown className="outline-none" />
            </button>
            <CustomPopover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography
                sx={{}}
                className="hover:bg-[#38bf67] hover:text-white rounded-sm text-sm cursor-pointer px-2 py-[2px]"
              >
                Send Message
              </Typography>
              <Typography
                sx={{}}
                className="hover:bg-[#38bf67] hover:text-white rounded-sm text-sm cursor-pointer px-2 py-[2px]"
              >
                Retire
              </Typography>

              <Typography
                sx={{}}
                className="hover:bg-[#38bf67] hover:text-white rounded-sm text-sm cursor-pointer px-2 py-[2px]"
              >
                Delete
              </Typography>
            </CustomPopover>

            <IoMdNotifications className="text-2xl" />
            <BiDotsVerticalRounded
              onClick={handleDots}
              className="text-2xl cursor-pointer"
            />
          </div>
        </div>
      </div>

      {selectedContent === "content0" && (
        <>
          <DashBoard />
        </>
      )}

      {selectedContent === "content1" && (
        <>
          <Properties />
        </>
      )}
      {selectedContent === "content2" && (
        <>
          <Jobs />
        </>
      )}
      {selectedContent === "content3" && (
        <>
          <Contractor />
        </>
      )}
      {selectedContent === "content4" && (
        <>
          <Setting />
        </>
      )}
      {selectedContent === "content5" && (
        <>
          <Reports />
        </>
      )}
      {selectedContent === "content6" && (
        <>
          <Finance />
        </>
      )}
      {selectedContent === "content61" && (
        <>
          <FinanceContractorInvoice />
        </>
      )}
      {selectedContent === "content62" && (
        <>
          <FinanceLandlordInvoice />
        </>
      )}
      {selectedContent === "content7" && (
        <>
          <Calender />
        </>
      )}
      {selectedContent === "content8" && (
        <>
          <Events />
        </>
      )}
      {selectedContent === "content9" && (
        <>
          <Subscription />
        </>
      )}
    </div>
  );
};

export default Dashboard;
