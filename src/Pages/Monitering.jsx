import { useState } from "react";
import ViewAllJobs from "./ViewAllJobs";
import ViewAllPropertyCompliance from "./ViewAllPropertyCompliance";
import ViewAllContractorCompliance from "./ViewAllContractorCompliance";
import ViewAllSystemAlert from "./ViewAllSystemAlert";
import ViewAllFinance from "./ViewAllFinance";
import { BsChevronLeft } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Monitering() {
  const [showAllJobs, setShowAllJobs] = useState(false);

  const [showPC, setShowPC] = useState(false);
  const [showCC, setShowCC] = useState(false);
  const [showSA, setShowSA] = useState(false);
  const [showFinance, setShowFinance] = useState(false);

  const [showMonitring, setShowMonitring] = useState(true);

  const handleShowAllJobs = () => {
    setShowAllJobs(true);
    setShowMonitring(false);
  };

  const handleShowPC = () => {
    setShowPC(true);
    setShowMonitring(false);
  };

  const handleShowCC = () => {
    setShowCC(true);
    setShowMonitring(false);
  };

  const handleShowSA = () => {
    setShowSA(true);
    setShowMonitring(false);
  };

  const handleShowFinance = () => {
    setShowFinance(true);
    setShowMonitring(false);
  };
  const navigate=useNavigate()
const toSetting=()=>{
  navigate('/setting')
}

  return (
    <div className="w-full">
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <BsChevronLeft onClick={toSetting}  className="cursor-pointer text-xl" />
                <h1 className="text-3xl font-bold">Monitering</h1>
              </div>
            </div>
          </div>
          <div className="flex relative items-center  gap-x-8">
            <div>
              <AiOutlineExclamationCircle
                style={{ strokeWidth: "1px", transform: "scale(1.1)" }}
                className="text-3xl text-[#737475]"
              />
            </div>
            <div></div>
          </div>
        </div>
     
        <div className="flex-row px-3 flex-wrap items-center justify-center h-full gap-3 mt-3 md:mt-7 d-flex md:gap-4">
          <MoniteringCard
            title="Jobs"
            func={handleShowAllJobs}
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet."
          />
          <MoniteringCard
            title="Property Compliance"
            func={handleShowPC}
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet."
          />
          <MoniteringCard
            title="Contractor Compliance"
            func={handleShowCC}
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet."
          />
          <MoniteringCard
            title="System alert"
            func={handleShowSA}
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet."
          />
          <MoniteringCard
            title="Finance"
            func={handleShowFinance}
            description="Lorem ipsum dolor sitkasdfklasfddf sadfas asdf asdf asdf a adfa asdf asdf amsdfsadfkjklasjdf alksdfja aslkdfjet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet. "
          />
        </div>
   
      {showAllJobs && <ViewAllJobs />}
      {showPC && <ViewAllPropertyCompliance />}
      {showCC && <ViewAllContractorCompliance />}
      {showSA && <ViewAllSystemAlert />}
      {showFinance && <ViewAllFinance />}
    </div>
  );
}

const MoniteringCard = ({ title, description, func }) => {
  const navigate=useNavigate()
  const toViewAll=()=>{
    navigate('/setting/view-all-jobs')
  }
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="p-3 flex flex-col  items-start justify-between border-[1px] h-[23rem] overflow-hidden border-[#737475] max-w-[13rem] rounded-md shadow-md border-opacity-20 ">
      <div>
        <div className="flex flex-row items-start justify-between w-full">
          <h5 className="opacity-100 line-clamp-[2] h-[2.599rem] text-[#737475] w-[70%] text-[18px] font-bold">
            {title}
          </h5>
          <button
            className={`relative w-[44px] h-6 rounded-full p-2 focus:outline-none ${
              isToggled ? "bg-green-500" : "bg-red-500"
            }`}
            onClick={() => handleToggle()}
          >
            <div
              className={`absolute left-[2px] top-[2px] w-5 h-5  rounded-full bg-white transform transition-transform duration-300 ${
                isToggled ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>
        <p className="opacity-100 h-[12.5rem] line-clamp-[10] text-[#B1B1B1] text-[14px]  font-medium leading-5 mt-4">
          {description}
        </p>
      </div>
      <button
        // onClick={() => func()}
        onClick={toViewAll}
        type="button"
        className="bg-[#38BF67] w-full outline-none active:border-none border-none text-white text-md font-bold rounded-md py-2 mt-4"
      >
        View
      </button>
    </div>
  );
};

export default Monitering;
