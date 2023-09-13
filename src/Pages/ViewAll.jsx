import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const ViewAll = () => {
  const navigate=useNavigate();
  const toDetail=()=>{
    navigate('/contractor/contractor-detail')
  }
  return (

    <div className='w-full'>
      <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toDetail}  className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Contarctor Jobs</h1>
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
        <div className='px-12'>
        <h1 className="text-xl font-semibold text-[#737475] mt-4">Home /Contractor Detail /Plumber/Contarctor Jobs</h1>
        <div className='py-4'>
        <div className="border cursor-pointer flex flex-col   items-center  rounded-lg">
          <div className="flex text-xs  sm:text-base w-full hover:bg-blue-50  ">
            <div className="w-[13%] sm:py-3 text-sm font-bold border-r flex items-center justify-center">
              Case Number
            </div>
            <div className=" w-[13%] ">
              <p className=" text-xs sm:text-sm sm:py-2 border-r   text-center font-bold  flex items-center justify-center h-full">
                Subject
              </p>
            </div>
            <div className="w-[13%] ">
              <p className=" text-xs sm:text-sm sm:py-3 border-r   text-center font-bold  flex items-center justify-center h-full">
                Description
              </p>
            </div>
            <div className="w-[10%] ">
              <p className=" text-xs sm:text-sm sm:py-3 border-r   text-center font-bold  flex items-center justify-center h-full">
                Job Status
              </p>
            </div>
            <div className="w-[25%] ">
              <p className=" text-xs sm:text-sm sm:py-3 border-r   text-center font-bold  flex items-center justify-center h-full">
                Payment Status
              </p>
            </div>
            <div className="w-[11%] ">
              <p className=" text-xs sm:text-sm sm:py-3 border-r   text-center font-bold  flex items-center justify-center h-full">
                Cost
              </p>
            </div>
            <div className="w-[10%] ">
              <p className=" text-xs sm:text-sm sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                Action
              </p>
            </div>
          </div>
          <div className="flex w-full border-t hover:bg-blue-50  ">
            <div className="w-[13%] border-r    sm:py-4 flex justify-center items-center">
              <p className="text-[#737475] text-sm">09009009009</p>
            </div>
            <div className=" border-r w-[13%] ">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[13%] border-r">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[10%] border-r">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                {/* Lorem ipsum */}
              </p>
            </div>
            <div className="w-[25%] border-r flex justify-center items-center">
              <p className="text-white bg-[#5869c1] w-14 text-center rounded-full text-sm py-[2px] ">
                Paid
              </p>
            </div>
            <div className="border-r w-[11%] ">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                300
              </p>
            </div>
            <div className="w-[10%] flex justify-center items-center ">
              <button
                type="button"
                className="bg-[#b1b1b1] text-white text-sm px-2 py-[2px] rounded-lg"
              >
                Play
              </button>
            </div>
          </div>
          <div className="flex w-full border-t hover:bg-blue-50  ">
            <div className="w-[13%] border-r  sm:py-4 flex justify-center items-center">
              <p className="text-[#737475] text-sm">09009009009</p>
            </div>
            <div className=" border-r w-[13%]">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[13%] border-r">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[10%] border-r flex items-center justify-center py-2">
              <p className="text-white bg-[#6c63ff] w-14 text-center rounded-full text-sm py-[2px] ">
                New
              </p>
            </div>
            <div className="w-[25%] border-r flex justify-center items-center">
              <p className="text-white bg-[#feda32] w-14 text-center rounded-full text-sm py-[2px] ">
                Unpaid
              </p>
            </div>
            <div className="border-r w-[11%] ">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                300
              </p>
            </div>
            <div className="w-[10%] flex justify-center items-center ">
              <button
                type="button"
                className="bg-[#6c63ff] text-white text-sm px-2 py-[2px] rounded-lg"
              >
                Play
              </button>
            </div>
          </div>
          <div className="flex w-full border-t hover:bg-blue-50  ">
            <div className="w-[13%] border-r  sm:py-4 flex justify-center items-center">
              <p className="text-[#737475] text-sm">09009009009</p>
            </div>
            <div className=" border-r w-[13%] ">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[13%] border-r">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[10%] border-r">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                {/* Lorem ipsum */}
              </p>
            </div>
            <div className="w-[25%] border-r flex justify-center items-center">
            <p className="text-white bg-[#feda32] w-14 text-center rounded-full text-sm py-[2px] ">
                Unpaid
              </p>
            </div>
            <div className="border-r w-[11%] ">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                300
              </p>
            </div>
            <div className="w-[10%] flex justify-center items-center ">
              <button
                type="button"
                className="bg-[#6c63ff] text-white text-sm px-2 py-[2px] rounded-lg"
              >
                Play
              </button>
            </div>
          </div>
          <div className="flex w-full border-t hover:bg-blue-50  ">
            <div className="w-[13%] border-r  sm:py-4 flex justify-center items-center">
              <p className="text-[#737475] text-sm">09009009009</p>
            </div>
            <div className=" border-r w-[13%]">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[13%] border-r">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[10%] border-r flex items-center justify-center">
              {/* <p className="text-white bg-[#6c63ff] w-14 text-center rounded-full text-sm py-[2px] ">
                New
              </p> */}
            </div>
            <div className="w-[25%] border-r flex justify-center  items-center">
              <p className="text-white bg-[#feda32] w-14 text-center rounded-full text-sm py-[2px] ">
                Unpaid
              </p>
            </div>
            <div className="border-r w-[11%] ">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                300
              </p>
            </div>
            <div className="w-[10%] flex justify-center items-center ">
              <button
                type="button"
                className="bg-[#6c63ff] text-white text-sm px-2 py-[2px] rounded-lg"
              >
                Play
              </button>
            </div>
          </div>
          <div className="flex w-full border-t hover:bg-blue-50  ">
            <div className="w-[13%] border-r  sm:py-4 flex justify-center items-center">
              <p className="text-[#737475] text-sm">09009009009</p>
            </div>
            <div className=" border-r w-[13%]">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[13%] border-r">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[10%] border-r flex items-center justify-center">
              {/* <p className="text-white bg-[#6c63ff] w-14 text-center rounded-full text-sm py-[2px] ">
                New
              </p> */}
            </div>
            <div className="w-[25%] border-r flex justify-center  items-center">
              <p className="text-white bg-[#feda32] w-14 text-center rounded-full text-sm py-[2px] ">
                Unpaid
              </p>
            </div>
            <div className="border-r w-[11%] ">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                300
              </p>
            </div>
            <div className="w-[10%] flex justify-center items-center ">
              <button
                type="button"
                className="bg-[#6c63ff] text-white text-sm px-2 py-[2px] rounded-lg"
              >
                Play
              </button>
            </div>
          </div>
          <div className="flex w-full border-t hover:bg-blue-50  ">
            <div className="w-[13%] border-r  sm:py-4 flex justify-center items-center">
              <p className="text-[#737475] text-sm">09009009009</p>
            </div>
            <div className=" border-r w-[13%]">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[13%] border-r">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[10%] border-r flex items-center justify-center">
              {/* <p className="text-white bg-[#6c63ff] w-14 text-center rounded-full text-sm py-[2px] ">
                New
              </p> */}
            </div>
            <div className="w-[25%] border-r flex justify-center  items-center">
              <p className="text-white bg-[#feda32] w-14 text-center rounded-full text-sm py-[2px] ">
                Unpaid
              </p>
            </div>
            <div className="border-r w-[11%] ">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                300
              </p>
            </div>
            <div className="w-[10%] flex justify-center items-center ">
              <button
                type="button"
                className="bg-[#6c63ff] text-white text-sm px-2 py-[2px] rounded-lg"
              >
                Play
              </button>
            </div>
          </div>
          <div className="flex w-full border-t hover:bg-blue-50  ">
            <div className="w-[13%] border-r  sm:py-4 flex justify-center items-center">
              <p className="text-[#737475] text-sm">09009009009</p>
            </div>
            <div className=" border-r w-[13%]">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[13%] border-r">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[10%] border-r flex items-center justify-center">
              {/* <p className="text-white bg-[#6c63ff] w-14 text-center rounded-full text-sm py-[2px] ">
                New
              </p> */}
            </div>
            <div className="w-[25%] border-r flex justify-center  items-center">
              <p className="text-white bg-[#feda32] w-14 text-center rounded-full text-sm py-[2px] ">
                Unpaid
              </p>
            </div>
            <div className="border-r w-[11%] ">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                300
              </p>
            </div>
            <div className="w-[10%] flex justify-center items-center ">
              <button
                type="button"
                className="bg-[#6c63ff] text-white text-sm px-2 py-[2px] rounded-lg"
              >
                Play
              </button>
            </div>
          </div>
          <div className="flex w-full border-t hover:bg-blue-50  ">
            <div className="w-[13%] border-r  sm:py-4 flex justify-center items-center">
              <p className="text-[#737475] text-sm">09009009009</p>
            </div>
            <div className=" border-r w-[13%]">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[13%] border-r">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                Lorem ipsum
              </p>
            </div>
            <div className="w-[10%] border-r flex items-center justify-center">
              {/* <p className="text-white bg-[#6c63ff] w-14 text-center rounded-full text-sm py-[2px] ">
                New
              </p> */}
            </div>
            <div className="w-[25%] border-r flex justify-center  items-center">
              <p className="text-white bg-[#feda32] w-14 text-center rounded-full text-sm py-[2px] ">
                Unpaid
              </p>
            </div>
            <div className="border-r w-[11%] ">
              <p className="text-xs sm:text-sm sm:py-2 text-center text-[#737475]  flex items-center justify-center h-full">
                300
              </p>
            </div>
            <div className="w-[10%] flex justify-center items-center ">
              <button
                type="button"
                className="bg-[#6c63ff] text-white text-sm px-2 py-[2px] rounded-lg"
              >
                Play
              </button>
            </div>
          </div>
        </div>
        </div>

    </div>
    </div>
   
  )
}

export default ViewAll