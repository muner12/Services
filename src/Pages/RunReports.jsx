import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const RunReports = () => {
  const navigate=useNavigate()
  const handleRunReport=()=>{
    navigate('/reports/recent-reports')
  }
  return (
   <div className='w-full'>
     <div className="bg-green-100  px-10 flex items-center justify-between py-12">
    <div className="flex gap-x-4 items-center">
      <div>
        <div className="flex items-center gap-x-4">
          <BsChevronLeft onClick={handleRunReport}  className="cursor-pointer text-xl" />
          <h1 className="text-3xl font-bold">Run Reports </h1>
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
    <div className='flex flex-col items-center justify-center mt-4'>
         <form className="  flex flex-col items-center justify-center w-[40%] border rounded-md shadow-md gap-y-4 p-5">
      
         <div className="flex items-center justify-center border rounded-sm w-full px-2 py-[6px]">
            <input type="search" placeholder="Select Group *" />
            <BsChevronDown />
          </div>
          <input
            type="text"
            className=" flex items-center justify-center border rounded-sm w-full px-2 py-[6px]"
            placeholder="Start Date"
          ></input>
          <input
            type="text"
            className=" flex items-center justify-center border rounded-sm w-full px-2 py-[6px]"
            placeholder="End Date"
          ></input>
          <button className='border w-full rounded-sm text-white bg-[#407c1e] py-[6px] font-semibold !outline-none'>Run</button>
          {/* <div className="h-28"></div> */}
         
        </form>
    </div>
   </div>
  )
}

export default RunReports