import React, { useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Style/AddCertificate.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AddCertificate = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selecteSeconddDate, setselecteSeconddDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleSecondDateChange = (date) => {
    setselecteSeconddDate(date);
  };

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files); // Do something with the selected files
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger click on file input when button is clicked
  };
  const customTabStyle = (selected) => ({
    borderBottom: selected ? '2px solid blue' : 'none', // Customize the underline style
  });
  const navigate = useNavigate();
  // const navi = useNavigate();


  const handleuseNavigate=()=>{
    navigate('/property/add-property')

  }

  return (

    <div className="w-full">
      <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={handleuseNavigate} className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Add Certificate</h1>
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
            <div>
              
            </div>
           
           
            
          </div>
        </div>
        <div className="py-8">
      <Tabs>
        <TabList className="flex justify-center border-none font-semibold text-[#b1b1b1]   customTabListone">
          <Tab style={{customTabStyle}}>Electrical Safety Check</Tab>
          <Tab>GAS Safety Check</Tab>
          <Tab>Fire Safety Check</Tab>
          <Tab>Energy Performance Check</Tab>
          <Tab>Inspection Report</Tab>
        </TabList>

        <TabPanel className="mt-4">
          <div className="w-[37%] shadow-md border py-4 rounded-md m-auto">
            <h1 className="text-center  text-[#737475] font-bold text-xl">
              Electrical Safety Check
            </h1>
            <div className="flex flex-col gap-y-3 mt-4  px-14">
              <div className="input-field">
                <DatePicker
                  className=""
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Date Carried Out"
                />
                <FaRegCalendarAlt className="text-green-600" />
              </div>
              <div className="input-field">
                <DatePicker
                  className=""
                  selected={selecteSeconddDate}
                  onChange={handleSecondDateChange}
                  placeholderText="Renewal Date"
                />
                <FaRegCalendarAlt className="text-green-600"/>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className=""
                  placeholder="Certificate Number"
                />
                {/* <FaRegCalendarAlt /> */}
              </div>

              <div className="input-field flex justify-between">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  placeholder=""
                />
                <p className="text- text-[#b1b1b1]"> Upload Attachment</p>

                <button
                  onClick={handleButtonClick}
                  className="border text-[#407c1e]  px-1 rounded-sm !outline-none  text-sm font-bold "
                >
                  Choose File
                </button>
              </div>
              <textarea
                className="border outline-none rounded-md px-2 py-1"
                rows="4"
                cols="60"
                placeholder="Description"
              ></textarea>
              <div className="flex  justify-evenly  gap-x-12 px-4">
              <label for="vehicle1" className="text-sm font-semibold">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    className=" w-5 h-5"
                    
                  ></input>
                 
                    <span className="ml-2"> Pass</span>
                  </label>
                
                  <label for="vehicle1" className="text-sm font-semibold">
                  <input className="mt-px w-5 h-5" type="checkbox" id="vehicle1"></input>
                  
                  <span className="ml-2"> Fail</span>
                  </label>
               
              </div>
              <button
                type="button"
                className="bg-[#407c1e] text-white flex !outline-none justify-center items-center rounded-md  py-2 font-semibold"
              >
                Upload
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="mt-4">
          <div className="w-[37%] shadow-md border py-4 rounded-md m-auto">
            <h1 className="text-center  text-[#737475] font-bold text-xl">
              GAS Safety Check
            </h1>
            <div className="flex flex-col gap-y-3 mt-4  px-14">
              <div className="input-field">
                <DatePicker
                  className=""
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Date Carried Out"
                />
                <FaRegCalendarAlt className="text-green-600" />
              </div>
              <div className="input-field">
                <DatePicker
                  className=""
                  selected={selecteSeconddDate}
                  onChange={handleSecondDateChange}
                  placeholderText="Renewal Date"
                />
                <FaRegCalendarAlt className="text-green-600" />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className=""
                  placeholder="Certificate Number"
                />
                {/* <FaRegCalendarAlt /> */}
              </div>

              <div className="input-field flex justify-between">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  placeholder=""
                />
                <p className="text- text-[#b1b1b1]"> Upload Attachment</p>

                <button
                  onClick={handleButtonClick}
                  className="border text-[#407c1e] px-1 rounded-sm !outline-none  text-sm font-bold "
                >
                  Choose File
                </button>
              </div>
              <textarea
                className="border outline-none rounded-md px-2 py-1"
                rows="4"
                cols="60"
                placeholder="Description"
              ></textarea>
            {/* ----------- */}
            <div className="flex  justify-evenly  gap-x-12 px-4">
              <label for="vehicle1" className="text-sm font-semibold">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    className=" w-5 h-5"
                    
                  ></input>
                 
                    <span className="ml-2"> Pass</span>
                  </label>
                
                  <label for="vehicle1" className="text-sm font-semibold">
                  <input className="mt-px w-5 h-5" type="checkbox" id="vehicle1"></input>
                  
                  <span className="ml-2"> Fail</span>
                  </label>
               
              </div>

              <button
                type="button"
                className="bg-[#407c1e] !outline-none text-white flex justify-center items-center rounded-md  py-2 font-semibold"
              >
                Upload
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="mt-4">
          <div className="w-[37%] shadow-md border py-4 rounded-md m-auto">
            <h1 className="text-center  text-[#737475] font-bold text-xl">
              {/* Electrical Safety Check */}
              Fire Safety Check
            </h1>
            <div className="flex flex-col gap-y-3 mt-4  px-14">
              <div className="input-field">
                <DatePicker
                  className=""
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Date Carried Out"
                />
                <FaRegCalendarAlt className="text-green-600" />
              </div>
              <div className="input-field">
                <DatePicker
                  className=""
                  selected={selecteSeconddDate}
                  onChange={handleSecondDateChange}
                  placeholderText="Renewal Date"
                />
                <FaRegCalendarAlt className="text-green-600" />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className=""
                  placeholder="Certificate Number"
                />
                {/* <FaRegCalendarAlt /> */}
              </div>

              <div className="input-field flex justify-between">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  placeholder=""
                />
                <p className="text- text-[#b1b1b1]"> Upload Attachment</p>

                <button
                  onClick={handleButtonClick}
                  className="border text-[#407c1e]  px-1 rounded-sm !outline-none  text-sm font-bold "
                >
                  Choose File
                </button>
              </div>
              <textarea
                className="border outline-none rounded-md px-2 py-1"
                rows="4"
                cols="60"
                placeholder="Description"
              ></textarea>
              <div className="flex  justify-evenly  gap-x-12 px-4">
              <label for="vehicle1" className="text-sm font-semibold">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    className=" w-5 h-5"
                    
                  ></input>
                 
                    <span className="ml-2"> Pass</span>
                  </label>
                
                  <label for="vehicle1" className="text-sm font-semibold">
                  <input className="mt-px w-5 h-5" type="checkbox" id="vehicle1"></input>
                  
                  <span className="ml-2"> Fail</span>
                  </label>
               
              </div>
              <button
                type="button"
                className="bg-[#407c1e] text-white flex !outline-none justify-center items-center rounded-md  py-2 font-semibold"
              >
                Upload
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="mt-4">
          <div className="w-[37%] shadow-md border py-4 rounded-md m-auto">
            <h1 className="text-center  text-[#737475] font-bold text-xl">
            Energy Performance Check
            </h1>
            <div className="flex flex-col gap-y-3 mt-4  px-14">
              <div className="input-field">
                <DatePicker
                  className=""
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Date Carried Out"
                />
                <FaRegCalendarAlt className="text-green-600"/>
              </div>
              <div className="input-field">
                <DatePicker
                  className=""
                  selected={selecteSeconddDate}
                  onChange={handleSecondDateChange}
                  placeholderText="Renewal Date"
                />
                <FaRegCalendarAlt className="text-green-600" />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className=""
                  placeholder="Certificate Number"
                />
                {/* <FaRegCalendarAlt /> */}
              </div>

              <div className="input-field flex justify-between">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  placeholder=""
                />
                <p className="text- text-[#b1b1b1]"> Upload Attachment</p>

                <button
                  onClick={handleButtonClick}
                  className="border text-[#407c1e] px-1 rounded-sm !outline-none  text-sm font-bold "
                >
                  Choose File
                </button>
              </div>
              <textarea
                className="border outline-none rounded-md px-2 py-1"
                rows="4"
                cols="60"
                placeholder="Description"
              ></textarea>
              
              <button
                type="button"
                className="bg-[#407c1e] text-white flex justify-center items-center rounded-md  py-2 font-semibold"
              >
                Upload
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="mt-4">
          <div className="w-[37%] shadow-md border py-4 rounded-md m-auto">
            <h1 className="text-center  text-[#737475] font-bold text-xl">
              {/* Electrical Safety Check */}
              Inspection Report
            </h1>
            <div className="flex flex-col gap-y-3 mt-4  px-14">
              <div className="input-field">
                <DatePicker
                  className=""
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Date Carried Out"
                />
                <FaRegCalendarAlt className="text-green-600" />
              </div>
              
              <div className="input-field">
                <input
                  type="text"
                  className=""
                  placeholder="Certificate Number"
                />
                {/* <FaRegCalendarAlt /> */}
              </div>
              <div className="input-field flex justify-between">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  placeholder=""
                />
                <p className="text- text-[#b1b1b1]"> Upload Attachment</p>

                <button
                  onClick={handleButtonClick}
                  className="border text-[#407c1e]  px-1 rounded-sm !outline-none  text-sm font-bold "
                >
                  Choose File
                </button>
              </div>

             
              <textarea
                className="border outline-none rounded-md px-2 py-1"
                rows="4"
                cols="60"
                placeholder="Description"
              ></textarea>
             
              <button
                type="button"
                className="bg-[#407c1e] text-white mt-24 flex justify-center items-center rounded-md  py-2 font-semibold"
              >
                Upload
              </button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
    </div>
    
  );
};

export default AddCertificate;
