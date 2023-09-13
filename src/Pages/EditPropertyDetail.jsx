import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { BsChevronLeft } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const EditPropertyDetail = () => {
  const navigate = useNavigate();
  const handleuseNavigate=()=>{
    navigate('/property/property-detail')

  }
  return (

    <div className='w-full'>
        <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={handleuseNavigate}  className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Edit Property</h1>
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
        <div className='py-8'>
    <div className="flex flex-col shadow-md w-[37%] border m-auto  rounded-md gap-y-4 px-12 py-8">
          <h1 className=" text-xl font-bold text-[#737475]">
            Enter Property Details
          </h1>
          <input
            type="text"
            className=" outline-none border mt-4 rounded-md px-2 py-1"
            placeholder="Post code *"
          ></input>
          <span className='text-xs text-[#737475] -mt-3 font-semibold'>124 Broad Street, Swindon, SN1 2AB</span>
          <input
            type="text"
            className=" outline-none border rounded-md px-2 py-1"
            placeholder="Managed By *"
          ></input>
         
          <textarea
            id="notes"
            className="outline-none border rounded-md px-2 py-2"
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Notes*"
          ></textarea>
          <button type='button' className='bg-[#407c1e] mt-4 w-full text-white py-1 rounded-sm font-semibold'>Save</button>
          <button type='button' className='border-[2px] border-[#407c1e] w-full text-[#407c1e] py-1 rounded-sm font-semibold'>Cancel</button>

        </div>
    </div>
    </div>
    
  )
}

export default EditPropertyDetail;