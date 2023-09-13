import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const AddNewEmail = () => {
    const navigate=useNavigate();
    const toViewAll=()=>{
        navigate('/setting/view-all-jobs')
    }
  return (
    <div className='w-full'>
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <BsChevronLeft onClick={toViewAll}  className="cursor-pointer text-xl" />
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
         <div className="mt-7">
          <div className="max-w-md m-auto bg-white rounded-md shadow-xl border border-[#737475]">
            <div className="flex flex-col items-center justify-center gap-5 my-5">
              <div className="w-[70%] m-auto">
                <input
                  type="text"
                  className="py-2 px-4 w-full border border-[#707070] rounded-lg text-[#707070] bg-white"
                  placeholder="Name"
                />
              </div>
              <div className="w-[70%] m-auto">
                <input
                  type="email"
                  className="py-2 px-4 w-full border border-[#707070] rounded-lg text-[#707070] bg-white"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="w-[70%] m-auto">
                <button className="w-full py-2 bg-[#38BF67] rounded-md mt-2 mb-10 text-white outline-none border-none font-bold text-md">Save</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddNewEmail