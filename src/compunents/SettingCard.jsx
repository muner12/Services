import React, { useState } from "react";
import branding from "../images/branding.png";
import group from "../images/group.png";
import access from "../images/access.png";
import time from "../images/time.png";
import opening from "../images/opening.png";
import jobs from "../images/jobs.png";
import sla from "../images/sla.png";
import ac from '../images/AC.png'
import * as style from "../Style/hover.module.css";
import monitring from "../images/monitring.png";

import mobile from "../images/mobile.png";
import email from "../images/email.png";

import contractorPrio from "../images/contractorPrio.png";

import contractorCom from "../images/contractorCom.png";

import pc from "../images/pc.png";
import lt from "../images/LT.png";

import finance from "../images/financeset.png";
import help from "../images/help1.png";
import Branding from "../Pages/Branding";
import Groups from "../Pages/Groups";
import TimeZone from "../Pages/TimeZone";

import Sla from "../Pages/Sla";
import Monitering from "../Pages/Monitering";
import AccessControl from "../Pages/AccessControl";
import OpeningHours from "../Pages/OPeningHours";
import JobEngin from "../Pages/JobEngin";
import MobileApp from "../Pages/MobileApp";
import AddEmail from "../Pages/AddEmail";
import ContractorPriority from "../Pages/ContractorPriority";
import ContracterCompliance from "../Pages/ContracterCompliance";
import LiecenseAndText from "../Pages/LiecenseAndText";
import SettingFinance from "../Pages/SettingFinance";
// import { useNavigate } from "react-router";
import { useNavigate } from 'react-router-dom';



const SettingCard = () => {
  const [setting, setSetting] = useState(true);
  const [brands, setbrands] = useState(false);
  const [groups, setGroups] = useState(false);
  const [slaa, setSlaa] = useState(false);
  const [showMonitring, setShowMonitring] = useState(false);
  const [showAccess, setshowAccess] = useState(false)
  const [showTime, setshowTime] = useState(false)
  const [showOpen, setshowOpen] = useState(false)
  const [showJob, setshowJob] = useState(false)
  const [showMbl, setshowMbl] = useState(false)
  const [showEmail, setshowEmail] = useState(false)
  const [showContractor, setshowContractor] = useState(false)
  const [showCompliance, setshowCompliance] = useState(false)
  const [showLiecense, setshowLiecense] = useState(false)
  const [showFinance, setshowFinance] = useState(false)



  const handleShowMonitring=()=>{
    navigate('/setting/monitoring')
 
   }

 
  const handleAddEmail=()=>{
   navigate('/setting/addemail')

  }
  const handleContractorPeriority=()=>{
   navigate('/setting/contracter-priority')
  }
  const handleContractorCompliance=()=>{
    useNavigate('/setting/contracter-compliance')
  }
  const handleLiecenseAndText=()=>{
   navigate('/setting/liecense-text')
  }
  const handleFinance=()=>{
   navigate('/setting/setting-finance')
  }
  const navigate = useNavigate();

  const handleBrand = () => {
    navigate('/setting/branding');
  };
  
  const handleGroups=()=>{
    navigate('/setting/group');
  }
  const handleAccess=()=>{
    navigate('/setting/access-controll');
  }
  const handleTimeZone=()=>{
    navigate('/setting/time-zone');
  }
  const handleOpeningHour=()=>{
    navigate('/setting/opening-hours');
  }
  const handleJobEngin=()=>{
    navigate('/setting/job-engin');
  }
  const handleSla=()=>{
    navigate('/setting/sla');
  }
  const handleMblApp=()=>{
    navigate('/setting/mobile-app')
 
   }

   const handleCompliance=()=>{
    navigate('/setting/contracter-compliance')
 
   }

  return (
    <div className="px-8">
   
      <div>
        <div className="flex flex-wrap justify-between" >
          <img
            src={branding}
            onClick={handleBrand}
            // onClick={handleButtonClick}
            className="object-fill h-48 cursor-pointer  w-52"
          ></img>
          <img
            src={group}
            onClick={handleGroups}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img
            onClick={handleAccess}
            src={ac}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img
          onClick={handleTimeZone}
            src={time}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img
          onClick={handleOpeningHour}
            src={opening}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
        </div>
        <div className="flex flex-wrap justify-between">
          <img
          onClick={handleJobEngin }
            src={jobs}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
          <img onClick={handleSla} src={sla} className="object-fill h-48 cursor-pointer w-52"></img>

          <img
            onClick={()=>handleShowMonitring()}
            src={monitring}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img
           onClick={handleMblApp}
            src={mobile}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img
            onClick={handleAddEmail}
         
            src={email}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
        </div>
        <div className="flex flex-wrap justify-between">
          <img
          onClick={handleContractorPeriority}
            src={contractorPrio}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
          <img
          onClick={handleContractorCompliance}
            src={contractorCom}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img src={pc} onClick={handleCompliance} className="object-fill h-48 cursor-pointer w-52"></img>

          <img
          onClick={handleLiecenseAndText}
           src={lt} className="object-fill h-48 cursor-pointer w-52"></img>

          <img
          onClick={handleFinance}
            src={finance}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
        </div>
        <div className="flex flex-wrap justify-between">
          <img
            src={help}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
        </div>
      </div>
     
    
   
     
   
     {
      showMonitring && <Monitering />
     }
    
   
     {
      showMbl && <MobileApp />
     }
     {
      showEmail && <AddEmail />
     }
     {
      showContractor && <ContractorPriority />
     }
     {
      showCompliance && <ContracterCompliance />
     }
     {
      showLiecense && <LiecenseAndText />
     }
     {
      showFinance && <SettingFinance />
     }
    </div>
  );
};

export default SettingCard;
