import React, { useEffect, useState } from "react";
// import img from '../src/images/WMP-logo.png'
import image from "../src/images/logo.png";
import DashBoard from "../src/images/dashbaord.png";
import properties from "../src/images/properties.png";

import contracter from "../src/images/contracter.png";

import setting from "../src/images/setting.png";
import reports from "../src/images/reports.png";
import finance from "../src/images/finance.svg";
import finance_green from "../src/images/finance_green.svg";
import finance_sub from "../src/images/finance_sub.png";
import suitcase from "../src/images/suitcase.png";
import calander from "../src/images/calander.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);
   
  const location = useLocation();
  
const [active,setActive]=useState({dashboard:"",properties:""});
  const activeHandler=(path)=>{
    useEffect(()=>{
      setActive({[path.slice(1)]:path});
    },[path])
    
  }
  console.log(location.pathname.split("/")[1])
  const handleReports = () => {
    setShow(!show);
    
  };

  const navigation=useNavigate()
  const toDashboard=()=>{
    navigation('/')
  }

  return (
    <div
      className="pl-0 border-r col-md-3 col-lg-2 sidebar-offcanvas"
      id="sidebar"
      role="navigation"
    >
      <ul className="px-3 pl-0 nav flex-column sticky-top ">
        <img onClick={toDashboard} src={image} className="object-cover cursor-pointer   "></img>
        <div className="mt-1 relative   h-[100%]">
          {/* <li className="mb-2 nav-item">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/login"
            >
              <img
                src={contracter}
                className="object-contain w-6 h-6"
                alt="dashboard"
              />
              <span className="ml-2">Login</span>
            </Link>
          </li> */}
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67] ">
            <Link
              className="nav-link text-[#b1b1b1] hover:text-[#38bf67] flex gap-x-3 items-center text-secondary font-semibold  "
              // href="#"
              to={`${location.pathname === "/"?"/dashboard":"/"}` }
            >
              <img
                src={DashBoard}
              
                className={location.pathname ==active?.dashboard?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}
                alt="dashboard"
              />{" "}
              <span className="{hover:text-[#] ml-2"> <span   onClick={activeHandler("/dashboard")} className={location.pathname==active?.dashboard?"text-green-600":""}>DashBoard</span></span>
            </Link>
          </li>

          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/properties"
            >
              <img
                src={properties}
                className={(location.pathname.split("/")[1] ==active?.properties.slice(1)||location.pathname.split("/")[1] =="property")?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}
                alt="dashboard"
              />{" "}
              <span className="hover:text-[#] ml-2"><span   onClick={activeHandler("/properties")} className={(location.pathname.split("/")[1] ==active?.properties.slice(1)||location.pathname.split("/")[1] =="property")?"text-green-600":""}>Properties</span></span>
            </Link>
          </li>
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/job"
            >
              <img
                src={suitcase}
                className={location.pathname === "/job"?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}

                alt="dashboard"
              />
              <span className="ml-2 hover:text-[#]"><span className={location.pathname=="/job"?"text-green-600":""}>Jobs</span></span>
            </Link>
          </li>
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/contractor"
            >
              <img
                src={contracter}
                className={location.pathname === "/contractor"?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}
                alt="dashboard"
              />
              <span className="ml-2 hover:text-[#]"><span className={location.pathname=="/contractor"?"text-green-600":""}>Contractor</span></span>
            </Link>
          </li>
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/setting"
            >
              <img
                src={setting}
                className={location.pathname === "/setting"?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}

                alt="dashboard"
              />
              <span className="ml-2 hover:text-[#38bf67]"><span className={location.pathname=="/setting"?"text-green-600":""}>Settings</span></span>
            </Link>
          </li>
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/report"
              onClick={handleReports}
            >
              <img
                src={reports}
                className={location.pathname === "/report"?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}

                alt="dashboard"
              />
              <span className="ml-2 hover:text-[#]"><span className={location.pathname=="/report"?"text-green-600":""}>Reports</span></span>
            </Link>
          </li>
          {(location.pathname === "/report" ||
            location.pathname === "/report/events" ||
            location.pathname === "/report/subscription"||
            location.pathname === "/report/events/subscription") && (
            <div className="flex flex-col gap-y-1">
              <li className="flex items-center px-5 cursor-pointer gap-x-2 ">
                <Link
                  to="/report/events"
                  className="nav-link text-secondary text-[13px] text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
                >
                  <img
                    src={properties}
                    className={location.pathname === "/report/events"?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}

                    alt="dashboard"
                  />
                  <span className="text-sm text-[#737475] hover:text-[#38bf67] font-semibold">
                  <span className={location.pathname=="/report/events"?"text-green-600":""}>Events</span>
                  </span>
                </Link>
              </li>
              <li className="flex items-center px-5 cursor-pointer gap-x-2">
                <Link
                  to="/report/subscription"
                  className="nav-link text-secondary text-[13px] text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
                >
                  <img
                    src={properties}
                    className={location.pathname === "/report/subscription"?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}
                    alt="/dashboard"
                  />

                  <span className="text-sm hover:text-[#38bf67] text-[#737475] font-semibold">
                  <span className={location.pathname=="/report/subscription"?"text-green-600":""}>Subscription</span>
                  </span>
                </Link>
              </li>
            </div>
          )}
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className={`nav-link ${
                location.pathname === "/finance"
                  ? "text-[#38BF67] hover:text-[#38BF67] "
                  : "text-secondary hover:text-secondary"
              } flex gap-x-3 items-center font-semibold`}
              to="/finance/contractor-invoice"
            >
              <img
            className={location.pathname === "/finance/contractor-invoice"?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}

                src={location.pathname == "/finance" ? finance_green : finance}
              
                alt="dashboard"
              />
              <span className="ml-2 hover:text-[#38BF67] ">
              <span className={location.pathname=="/finance/contractor-invoice"?"text-green-600":""}>Finance</span>


              </span>
            </Link>
          </li>
          {(location.pathname === "/finance" ||
            location.pathname === "/finance/contractor-invoice" ||
            location.pathname === "/finance/landlord-invoice" ||
            location.pathname === "/finance/contractor-invoice/close") && (
            <ul className="flex flex-col items-start ps-7">
              <li className=" nav-item">
                <Link
                  to={"/finance/contractor-invoice"}
                  className="nav-link text-secondary text-[13px] text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
                >
                  <img
                    src={finance_sub}
                    className={location.pathname === "/finance/contractor-invoice"?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}
                    alt="dashboard"
                  />
                  <span className="hover:text-[#38bf67]">
                
                  <span className={location.pathname=="/finance/contractor-invoice"?"text-green-600":""}>Contractor Invoice</span>

                  </span>
                </Link>
              </li>
              <li className="py-0 mb-1 nav-item">
                <Link
                  to={"/finance/landlord-invoice"}
                  className="nav-link text-secondary  text-[13px] text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
                >
                  <img
                    src={finance_sub}
                    className={location.pathname === "/finance/landlord-invoice"?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}
                    alt="dashboard"
                  />
                  <span className="hover:text-[#38bf67]">
                  <span className={location.pathname=="/finance/landlord-invoice"?"text-green-600":""}>Landlord Invoice</span>

                  
                  </span>
                
                </Link>
              </li>
            </ul>
          )}

          <li className="nav-item mb-2  absolute bottom-0 top-[110%] ">
            <Link
              className="nav-link hover:text-[#38bf67] text-secondary text-[#b1b1b1] flex gap-x-3 mt-10 items-center text-secondary font-semibold hover:bg-green-100 rounded-sm hover:text-[#38bf67]"
              to="calender"
            >
              <img
                src={calander}
                className={location.pathname === "/calender"?"object-contain img-bg-green  w-6 h-6":"object-contain  w-6 h-6"}
                alt="dashboard"
              />
              <span className="hover:text-[#] ml-2">
                <span className={location.pathname==="/calender"?"text-green-600":""}>
                Calender
                </span>
             

              </span>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
