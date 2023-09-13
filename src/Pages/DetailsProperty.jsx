import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DashBoardCardData from '../Config/DashBoardCardData'
import Sidebar from '../Sidebar'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'

const DetailsProperty = () => {
 const {id}=   useParams()  
const [state, setState] = useState()

const getData=async()=>{
const data=  axios.get("url/"+id)
setState(data)
}

const getSingleObject=()=>{
const data=DashBoardCardData.find(it=>it.id==id)
setState(data)
}
useEffect(()=>{
// getData()
getSingleObject()
},[])
console.log("state",state);
  return (
    <>
    <Sidebar/>
  <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <div className="w-6 h-6">
                  <img src={home} />
                </div>

                <h1 className="text-3xl font-bold">Properties</h1>
              </div>
              {/* <span className="text-center text-xl font-semibold ml-[20%] text-[#737475]  w-full">
                Over view
              </span> */}
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
              <button
                type="button"
                onClick={handleGlobal}
                className="bg-[#407c1e] text-white rounded-sm !outline-none text-sm font-semibold px-4 py-1 flex items-center gap-x-3"
              >
                Global <BsChevronDown className="text-md font-bold" />
              </button>
            </div>
            {showglobal && (
              <div
                ref={divglobal}
                className="absolute flex flex-col gap-y-1  left-5 right-20  rounded-xl px-4 py-2 border-2 border-[#737475] top-8"
              >
                <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                  Send Message
                </p>
                <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                  Retire
                </p>
                <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                  Delete
                </p>
              </div>
            )}
            <div className="w-6 h-6 relative ">
              <img
                onClick={handlenotification}
                src={notification}
                className="w-full h-full object-fill"
              />
              {showNotification && (
                <div
                  ref={divNotification}
                  className="absolute flex flex-col gap-y-1   rounded-xl px-3 w-44 right-0 -left-20   py-2 border-2 border-[#737475] top-8"
                >
                  <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                    Setting
                  </p>
                  <p className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white">
                    Logout
                  </p>
                </div>
              )}
            </div>
            <div className="w-2 h-5">
              <img src={threedot} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
  <p>test id : {id}</p>
  <p>{state?.open}</p>
  <p>{state?.time}</p>
  <p>{state?.icon}</p>
  {/* if(object )
  <p>{state.name}</p>
  else{
    map data
  } */}
    </>
  )
}

export default DetailsProperty