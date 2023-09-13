import React, { useState } from 'react'
import SelectCategorydata from '../Config/SelectCategoryData'
import SelectGroup from './SelectGroup'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const SelectCategory = () => {
    const [selectCategory,setselectCategory]=useState(true)
    const [selectGroup,setselectGroup]=useState(false)

    const navigate=useNavigate()


    const handleNext=()=>{
       navigate('/setting/select-group')
    }
    const toAssignment=()=>{
      navigate('/setting/job-assign')
   }
  return (
   <>

    <div className='w-full'>
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <BsChevronLeft onClick={toAssignment}  className="cursor-pointer text-xl" />
                <h1 className="text-3xl font-bold">Job Assignment</h1>
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
        <div>
            <h1 className='font-semibold text-xl px-3 py-4 text-[#727374]'>
            Select Category
            </h1>
        </div>
        <div className='grid grid-cols-8 gap-y-4 px-8   '>
            {
                SelectCategorydata.map((items)=>(
                    <div className='border w-28 h-28 rounded-md shadow-md  flex flex-col gap-y-3 items-center justify-center '>
                        <img src={items.img}/>
                        <p className='text-sm text-[#737475]'>{items.text}</p>
                    </div>
                ))
            }
            
        </div>
        <div className='flex justify-end px-1   items-center mt-4'>
        <button type='button' onClick={handleNext} className='rounded-sm bg-[#38bf67] py-1 px-24 mr-[4px] text-white'>Next</button>
            
        </div>
        
    </div>
   

   {
    selectGroup && <SelectGroup/>
   }
   </>
  )
}

export default SelectCategory