import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";

function ViewAllFinance() {
  const [showAllFinance, setShowAllFinance] = useState(true);
  const [showAddEmail, setShowAddEmail] = useState(false);
  const data = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    // Add more data rows as needed
  ];

  const handleShowEmail = () => {
    setShowAllFinance(false);
    setShowAddEmail(true);
  };

  return (
    <div>
      {showAllFinance && (
        <div className="w-[95%] m-auto ">
          <h1 className="opacity-100 line-clamp-[2] h-[2.599rem] text-[#737475] w-[70%] text-[22px] font-bold">
            Finance
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
                onClick={() => handleShowEmail()}
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
      )}
      {showAddEmail && (
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
      )}
    </div>
  );
}

export default ViewAllFinance;
