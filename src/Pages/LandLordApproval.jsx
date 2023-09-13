import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const LandLordApproval = () => {
  const navigate=useNavigate();
  const toJobDetail=()=>{
    navigate('/job/job-detail')
  }
  return (
    <div className='w-full'>
      <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toJobDetail}  className="cursor-pointer text-xl"/>

                <h1 className="text-3xl font-bold">Landlord Approval</h1>
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
        <div className='py-6'>
          <di className=" flex flex-col gap-y-4 sm:w-[80%] lg:w-[37%] border shadow-md rounded-md m-auto   px-16 py-8">
            <input
              type="text"
              className=" outline-none border h-10 rounded-md px-2 py-[2px]"
              placeholder="Email"
            ></input>
            <input
              type="text"
              className=" outline-none border h-10 rounded-md px-2 py-[2px]"
              placeholder="Subject"
            ></input>
             <textarea
                className="border outline-none rounded-md px-2 py-1"
                rows="4"
                cols="60"
                placeholder="Description"
              ></textarea>
              <div>
                <h3 className='font-bold text-[#737475]'>Attachment:</h3>
                <div className='flex gap-x-4 mt-3'>
                    <div className='w-12 h-10 rounded-xl border'></div>
                    <div className='w-12 h-10 rounded-xl border'></div>
                    <div className='w-12 h-10 rounded-xl border'></div>
                    <div className='w-12 h-10 rounded-xl border'></div>



                </div>
              </div>
              <button className='w-full bg-[#407c1e] rounded-sm py-1 text-white font-semibold mt-5'>Save</button>
          </di>
    </div>
    </div>
    
  )
}

export default LandLordApproval