import React, { useState } from "react";
import { AiOutlineExclamationCircle, AiOutlineSearch } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ViewAllJobs() {
  const [showAllJobs, setShowAllJobs] = useState(true);
  const [showAddEmail, setShowAddEmail] = useState(false);
  const data = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    // Add more data rows as needed
  ];    

 

  const navigate=useNavigate()
  const toMonitoring=()=>{
    navigate('/setting/monitoring')
  }
  const handleShowEmail = () => {
    navigate('/setting/add-email')
   };

  return (
    <div className="w-full">
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <BsChevronLeft onClick={toMonitoring}   className="cursor-pointer text-xl" />
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
        <div className="w-full px-8 py-4 m-auto ">
          <h1 className="opacity-100 line-clamp-[2] h-[2.599rem] text-[#737475] w-[70%] text-[22px] font-bold">
            Jobs
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-3 ">
            <div className="flex flex-wrap items-start justify-start gap-3">
              <div className="flex items-center justify-center gap-3">
                <p className="text-sm font-semibold text-[#737475]">Show:</p>
                <select className="border-[1px] outline-none border-[#737475] p-1 rounded-md text-sm font-normal text-[#737475]">
                  {Array.from({ length: 100 }, (_, index) => (
                    <option value={index} key={index}>
                      {++index}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-center gap-3">
                <p className="text-sm font-semibold text-[#737475]">
                  Entries Search:
                </p>
                <div className="flex items-center px-2 py-1 border-[1px] border-[#737475] rounded-md">
                  <AiOutlineSearch className="text-[#737475]" />
                  <input
                    type="text"
                    className="ml-2 text-[#737475] bg-transparent outline-none"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleShowEmail}
                className="bg-[#38BF67] py-2 px-8 rounded-md text-md font-semibold text-white"
              >
                Add New Email
              </button>
            </div>
          </div>
          {/* table */}
          <div className="mx-auto ">
            <div className="mt-4 overflow-x-auto border border-gray-300 rounded-xl">
              <table className="min-w-full max-w-max shadow-md  bg-white rounded-xl text-[#737475]">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-center text-[#333333]">
                      Name
                    </th>
                    <th className="px-4 py-2 text-center text-[#333333]">
                      Email
                    </th>
                    <th className="px-4 py-2 text-center text-[#333333]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 text-center border-t border-gray-300">
                        {item.name}
                      </td>
                      <td className="px-4 py-2 text-center border-t border-gray-300">
                        {item.email}
                      </td>
                      <td className="px-4 py-2 text-center border-t">
                        <button className="p-2 mr-2 bg-[#38BF67] text-white rounded-md">
                          <FaEdit />
                        </button>
                        <button className="p-2 mr-2 bg-[#B1B1B1] text-white rounded-md">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
      
    </div>
  );
}

export default ViewAllJobs;
