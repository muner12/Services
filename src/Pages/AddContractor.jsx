import React, { useRef } from "react";
import { useState } from "react";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AddContractor = () => {

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files); // Do something with the selected files
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger click on file input when button is clicked
  };

  const handleAddContractor=()=>{
    setaddContractor(false);
    setContracterDetail(true);

  }
  const navigate=useNavigate();
  const toPlumber=()=>{
    navigate('/contractor/plumber')
  }
  return (
   <div className="w-full">
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toPlumber}  className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Add Contractor</h1>
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
   <div>
      <div className="px-16">
        <h1 className="text-xl font-bold text-[#737475] py-3">
          Home/Contractor/Plumber
        </h1>
        <div className="border flex rounded-md mt-5 shadow-md ">
          <div className="w-1/2">
            <div className="">
              <div className="flex flex-col gap-y-3 py-3   px-14">
                <h1 className="  text-[#737475] font-bold text-xl">
                  Enter Contractor Detail
                </h1>
                <div className="input-field">
                  <input
                    type="text"
                    className=""
                    placeholder="Business Name *"
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    className=""
                    placeholder="Contractor Name *"
                  />
                </div>
                <div className="input-field">
                  <input type="search" placeholder="Mobile No *" />
                  <BsChevronDown />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    className=""
                    placeholder="Contact Number *"
                  />
                </div>
                <div className="input-field">
                  <input type="text" className="" placeholder="E-mail *" />
                </div>
                <div className="px-3">
                  <h3 className="font-semibold text-sm  text-[#737475]">
                    Preferred Communication *
                  </h3>
                  <div className="flex flex-col md:flex-row justify-between mt-2 px-2 md:px-4">
                    <div className="">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label
                        for="html"
                        className="text-xs -mt-1 font-semibold -translate-y-[2px] ml-2 text-[#737475]"
                      >
                        Text
                      </label>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label
                        for="html"
                        className="text-xs -translate-y-[2px] font-semibold  ml-2 text-[#737475]"
                      >
                        Email
                      </label>
                    </div>
                  </div>
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    className=""
                    placeholder="Select Services *"
                  />
                </div>

                <div className="input-field">
                  <input type="text" className="" placeholder="Agreed Rate *" />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    className=""
                    placeholder="Area of Coverage"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-14 py-3">
            <div className="input-field mt-3">
              <input type="text" className=" " placeholder="Add Group*" />
            </div>
            <div className="px-3 mt-3">
              <h3 className="font-semibold text-sm  text-[#737475]">
                Preferred Communication *
              </h3>
              <div className="flex flex-col md:flex-row justify-between mt-2 px-2 md:px-4">
                <div className="">
                  <input
                    type="checkbox"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label
                    for="html"
                    className="text-xs -mt-1 font-semibold -translate-y-[2px] ml-2 text-[#737475]"
                  >
                    <span className=" mr-2  rounded-[2px]   px-[4px] py-[1px]  text-center   fle bg-[#38bf67] text-white">
                      p1
                    </span>
                    Use as first Choice
                  </label>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label
                    for="html"
                    className="text-xs -mt-1 font-semibold -translate-y-[2px] ml-2 text-[#737475]"
                  >
                    <span className=" mr-2  rounded-[2px]   px-[4px] py-[1px]  text-center   fle bg-[#38bf67] text-white">
                      p2
                    </span>
                    Use as second choice
                  </label>
                </div>
              </div>
              <div className="px-2">
                <input
                  type="checkbox"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label
                  for="html"
                  className="text-xs -mt-1 font-semibold -translate-y-[2px] ml-2 text-[#737475]"
                >
                  <span className=" mr-2   px-[4px] py-[1px] rounded-[2px]  text-center   fle bg-[#38bf67] text-white">
                    p3
                  </span>
                  Use as second choice
                </label>
              </div>
            </div>
            <div className="px-3 mt-3">
              <h3 className="font-semibold text-sm  text-[#737475]">
                Working Hours *
              </h3>
              <div className="flex flex-col  md:flex-row  mt-2 px-2 md:px-4">
                <div className="">
                  <input
                    type="checkbox"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label
                    for="html"
                    className="text-xs -mt-1 font-semibold -translate-y-[2px] ml-2 text-[#737475]"
                  >
                    6-8
                  </label>
                </div>
                <div className="ml-36">
                  <input
                    type="checkbox"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label
                    for="html"
                    className="text-xs -mt-1 font-semibold -translate-y-[2px] ml-2 text-[#737475]"
                  >
                    24/7
                  </label>
                </div>
              </div>
              <div className="input-field mt-4">
                <input type="text" className="" placeholder="Days *" />
              </div>
              <div className="input-field mt-3">
                <input type="search" placeholder="Recommendation *" />
                <BsChevronDown />
              </div>
            </div>
            <div className="px-3 mt-3">
              <textarea
                id="notes"
                className="outline-none w-full border rounded-md px-2 py-2"
                name="w3review"
                rows="3"
                // cols="30"
                placeholder="Notes*"
              ></textarea>
            </div>
            <button
              type="button"
              onClick={handleAddContractor}
              className="bg-[#407c1e] w-full px-3 mt-3 text-white flex !outline-none justify-center items-center rounded-md  py-2 font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="px-16">
        <div className="border  rounded-md mt-3 shadow-md ">
          <div className="flex  w-full items-start">
            <div className="w-[20%] bg-[#38bf67] font-semibold text-sm py-[10px]   rounded-tl-md  text-center text-white border-r border-b">
              <p>Certificate</p>
            </div>

            <div className="w-[20%]   font-semibold text-sm  text-center border-b py-[10px]  border-r">
              Insurance
            </div>
            <div className="w-[20%] font-semibold  text-sm  text-center border-b py-[10px]  border-r">
              Proof of ID
            </div>
            <div className="w-[20%]  font-semibold text-sm  text-center border-b py-[10px]  border-r">
              Proof of Address
            </div>
            <div className="w-[20%]  font-semibold text-sm   text-center border-b py-[10px]  b">Other</div>
          </div>
          <div className="w-[37%] m-auto">
            <h2 className="text-[#737475] text-xl mt-5 font-bold">Add ID</h2>
           <div className="py-5">
           <div className="input-field ">
              <input type="text" className="" placeholder="Title *" />
            </div>
            <div className="input-field flex mt-3 justify-between">
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                placeholder=""
              />
              <p className="text- text-[#b1b1b1]"> Upload Attachment*</p>

              <button
                onClick={handleButtonClick}
                className="border text-[#407c1e]  px-1 rounded-sm !outline-none  text-sm font-bold "
              >
                Choose File
              </button>
            </div>
            <div className="input-field mt-3 ">
              <input type="text" className="" placeholder="Expiry Date" />
            </div>
            <div className=" mt-3">
              <textarea
                id="notes"
                className="outline-none w-full border rounded-md px-2 py-2"
                name="w3review"
                rows="3"
                // cols="30"
                placeholder="Notes*"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-[#407c1e] text-xs  px-3 mt-3 text-white flex !outline-none justify-center items-center rounded-sm  py-1 font-semibold"
              >
                Add Another
              </button>{" "}
            </div>
            <button
              type="button"
              onClick={handleAddContractor}
              className="bg-[#407c1e] w-full px-3 mt-3 text-white flex !outline-none justify-center items-center rounded-md  py-2 font-semibold"
            >
              Save
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default AddContractor;
