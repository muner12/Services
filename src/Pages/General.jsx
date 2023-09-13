import React from 'react'
import SelectCategorydata from '../Config/SelectCategoryData'
import img from '../images/emailone.png'

const General = () => {
  return (
    <div>
    <div>
        <h1 className='text-[#737475] font-bold py-3'>General</h1>
        <div className='flex gap-x-4 px-3 items-center'>
        <div>
            <div className='border flex flex-col items-center justify-center  w-32 h-32 rounded-md shadow-sm'>
            <div className='flex flex-col items-center justify-center'>
         <div className=''>
         <img src={img} className=' w-20 h-20 object-fill p-2'/>
         </div>
            <p className='text-xs text-[#737475] font-semibold'>Job Submission</p>

            </div>
            </div>
        </div>
        <div>
            <div className='border flex flex-col items-center justify-center  w-32 h-32 rounded-md shadow-sm'>
            <div className='flex flex-col items-center justify-center'>
         <div className=''>
         <img src={img} className=' w-20 h-20 object-fill p-2'/>
         </div>
            <p className='text-xs text-[#737475] font-semibold'>Job Closure</p>

            </div>
            </div>
        </div>
        </div>
    </div>

    <div>
        <h1 className='text-[#737475] font-bold py-3'>Select Category</h1>
    </div>
    {
        SelectCategorydata &&   <div>
        <div className='grid grid-cols-8 gap-y-4 px-3  '>
            {
                SelectCategorydata.map((items)=>(
                    <div className='border w-24 h-24 rounded-md shadow-sm  flex flex-col gap-y-3 items-center justify-center '>
                        <img src={items.img}/>
                        <p className='text-sm text-[#737475]'>{items.text}</p>
                    </div>
                ))
            }
            
        </div>
        <div className='flex justify-end px-11   items-center mt-4'>
        <button type='button'  className='rounded-sm bg-[#b1b1b1] py-1 px-24 mr-[4px] text-white'>Next</button>
            
        </div>
       
        
    </div>
   }
    </div>
  )
}

export default General