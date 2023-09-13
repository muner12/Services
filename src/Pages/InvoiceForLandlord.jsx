import React from "react";
import { BsCurrencyPound, BsExclamationCircle } from "react-icons/bs";
import { GoChevronLeft } from "react-icons/go";
import logoInvoice from "../images/logoInvoice.png";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";

const InvoiceForLandlord = () => {
  return (
    <div>
      <div className="flex items-center w-full justify-between px-10 py-8 bg-green-100">
        <div className="flex items-center gap-x-4">
          <div>
            <div className="flex items-center gap-x-4">
              <div className="w-7 h-7  mt-1">
                <GoChevronLeft size={25} color="#333333" />
              </div>

              <h1 className="text-3xl font-bold">Invoice For Landlord</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-x-12">
          <div className="w-2 h-5">
            <BsExclamationCircle size={28} color="#737475" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 lg:flex-row justify-between gap-x-4 py-8 px-16">
        <div className="w-full lg:w-1/2 shadow-md border rounded-md p-3">
          <div className="flex justify-between items-center">
            <button
              type="button"
              className=" bg-red-500 text-white py-2 rounded-sm px-4 font-semibold"
            >
              print
            </button>
            <div className=" flex gap-x-2">
              <button
                type="button"
                className=" bg-green-500 text-white py-2 rounded-sm px-4 font-semibold"
              >
                Mark as paid
              </button>
              <button
                type="button"
                className=" bg-green-500 text-white py-1 rounded-sm w-12 flex items-center justify-center font-semibold"
              >
              <IoMdDownload className="text-2xl" />
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-[#b1b1b1] text-2xl font-semibold py-2">
              Invoice
            </h1>
          </div>
          <div className="flex gap-x-4">
            <div className="w-1/2 flex flex-col gap-y-2">
              <input
                type="text"
                placeholder="Invoice no - 2453"
                className="border w-full px-2 border-[#737475] !outline-none rounded-md"
              ></input>
              <input
                type="text"
                placeholder="Akbar Ali"
                className="border px-2 w-full border-[#737475] !outline-none rounded-md"
              ></input>
              <input
                type="text"
                placeholder="123 Housing Socity"
                className="border w-full px-2 border-[#737475] !outline-none rounded-md"
              ></input>
              <input
                type="text"
                placeholder="0476543232"
                className="border px-2 w-full border-[#737475] !outline-none rounded-md"
              ></input>
              <input
                type="text"
                placeholder="0311456789"
                className="border w-full px-2 border-[#737475] !outline-none rounded-md"
              ></input>
              <input
                type="text"
                placeholder="Job no - 24"
                className="border px-2 w-full border-[#737475] !outline-none rounded-md"
              ></input>
              <input
                type="text"
                placeholder="Invoice no - 2453"
                className="border px-2 w-full border-[#737475] !outline-none rounded-md"
              ></input>
              <h3 className="text-[#737475] font-bold py-2">Description</h3>
              <textarea
                className="border rounded-md w-full  "
                cols=""
                rows="5"
              ></textarea>
            </div>
            <div className="w-1/2 ">
              <div className="px-12">
                <div className="border w-44 h-16 flex items-center justify-center rounded-md">
                  <img src={logoInvoice} className="w-24 h-full" />
                </div>
                <div className="py-2">
                  <p className="font-semibold text-[#737475]">WPM Residence</p>
                  <p className="font-semibold text-[#737475]">London, UK</p>
                  <p className="font-semibold text-[#737475]">0712345566</p>

                  <p className="font-semibold text-[#737475]">0987654327</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <input
                  type="text"
                  placeholder="Invoice no - 2453"
                  className="border w-full px-2 border-[#737475] !outline-none rounded-md"
                ></input>
                <input
                  type="text"
                  placeholder="Akbar Ali"
                  className="border px-2 w-full border-[#737475] !outline-none rounded-md"
                ></input>
                <input
                  type="text"
                  placeholder="123 Housing Socity"
                  className="border w-full px-2 border-[#737475] !outline-none rounded-md"
                ></input>
              </div>
            </div>
          </div>
          <div className="">
            {/* <div className="flex justify- w-full py-1">
              <h2 className="font-semibold text-[#737475] text-start w-1/4 border">Services</h2>
              <h2 className="font-semibold text-[#737475] text-center w-1/4">Description</h2>
              <h2 className="font-semibold text-[#737475] text-center w-1/4">Rate</h2>
              <h2 className="font-semibold text-[#737475] text-end w-1/4">Amount</h2>
            </div>
            <hr className="bg-green-500 shadow-md "/>
            <div className="flex justify-between w-full py-2">
              <h2 className="- text-[#737475] w-1/4">Window Repair</h2>
              <h2 className="- text-[#737475] w-1/4 text-center">Lorem ipsum</h2>
              <h2 className="- text-[#737475] w-1/4 text-center"></h2>
              <h2 className=" text-[#737475] text-end w-1/4">128.00</h2>
            </div>
            <div className="flex justify-between w-full ">
              <h2 className="- text-[#737475] w-1/4">Window Repair</h2>
              <h2 className="- text-[#737475] w-1/4 text-center">Lorem ipsum</h2>
              <h2 className="- text-[#737475] w-1/4 text-end flex items-center"><BsCurrencyPound/> 128.00</h2>
              <h2 className=" text-[#737475] text-end w-1/4">128.00</h2>
            </div> */}
            <table className="w-full mt-3">
              <tr className="flex justify-stretch  text-[#737475] w-full">
                <th className="w-1/4">Services</th>
                <th className="w-1/4 text-center">Description</th>
                <th className="w-1/4 text-center">Rate</th>
                <th className="w-1/4 text-end">Amount</th>
              </tr>
              <hr className="text-[#38bf67] bg-[#38bf67]" />
              <tr className="flex justify-stretch  text-[#737475] w-full">
                <td className="w-1/4">Window Repair</td>
                <td className="w-1/4 text-center">Lorem ipsum</td>
                <td className="w-1/4 text-center  flex items-center justify-center">
                  <BsCurrencyPound />
                  128.00
                </td>
                <td className="w-1/4 text-end flex items-center justify-end">
                  <BsCurrencyPound />
                  128.00
                </td>
              </tr>
              <tr className="flex justify-stretch  text-[#737475] w-full">
                <td className="w-1/4">Door Repair</td>
                <td className="w-1/4 text-center">Lorem ipsum</td>
                <td className="w-1/4 text-center  flex items-center justify-center">
                  <BsCurrencyPound />
                  170.00
                </td>
                <td className="w-1/4 text-end flex items-center justify-end">
                  <BsCurrencyPound />
                  170.00
                </td>
              </tr>

              <div className="">
                <button
                  type="button"
                  className="mt-2 border-[1px] w-full py-1 border-[#38bf67] rounded-md flex items-center justify-center"
                >
                  <AiOutlinePlus className="text-[#38bf67]" />
                </button>
              </div>
              <div className="w-full h-[1px] mt-4 shadow-lg bg-[#b1b1b1]"></div>
              <div className="flex items-center justify-between mt-1">
                <h2 className="font-semibold text-[#737475]">Total:</h2>
                <p className="flex items-center text-[#737475]">
                  <BsCurrencyPound />
                  298.00
                </p>
              </div>
              <div className="w-full h-[1px] mt-1 shadow-lg bg-[#38bf67]"></div>
              <div className="flex items- py-3 justify-between">
                <div className="w-1/2">
                  <h2 className="text-[#737475] font-semibold">Note:</h2>
                  <p className="text-sm text-[#737475]">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </div>
                <div className="w-1/2 px-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[#737475] font-semibold">Sub Total:</h2>
                    <p className="flex items-center text-[#737475]">
                      <BsCurrencyPound />
                      298.00
                    </p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <h2 className="text-[#737475] font-semibold">Discount</h2>
                    <p className="flex items-center text-[#737475]">
                      <BsCurrencyPound />
                      298.00
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <h2 className="text-[#737475] font-semibold"> Total:</h2>
                    <p className="flex items-center text-[#737475]">
                      <BsCurrencyPound />
                      298.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-[#fe1b1b] w-24 text-white py-1 font-semibold rounded-sm" type="button">Cancel</button>
                <button className="bg-green-100 text-[#38bf67] w-24 font-semibold py-1 rounded-sm" type="button">Save</button>

                <button className="bg-[#38bf67] w-24 font-semibold text-white py-1 rounded-sm" type="button">Send</button>

              </div>
            </table>
          </div>
        </div>
        <div className="w-full lg:w-1/2 border flex flex-col gap-y-4 h-80 shadow-md  p-4 rounded-md">
            <div>
                <h2 className="text-[#737475] font-semibold">
                21/12/2022 
                </h2>
                <p className="text-[#737475]">Payment completed by <span className="text-[#b1b1b1]">S Hussain</span></p>
            </div>
            <div>
                <h2 className="text-[#737475] font-semibold">
                21/12/2022 
                </h2>
                <p className="text-[#737475]">Payment completed by <span className="text-[#b1b1b1]">S Hussain</span></p>
            </div>
            <div>
                <p className="text-[#38bf67] font-semibold flex gap-x-3">Note:<span className="text-[#b1b1b1]">Paid Cash</span></p>
            </div>
            <div>
                <h2 className="text-[#737475] font-semibold">
                21/12/2022 
                </h2>
                <p className="text-[#737475]">Payment completed by <span className="text-[#b1b1b1]">S Hussain</span></p>
            </div>
            <div>
                <p className="text-[#38bf67] font-semibold flex gap-x-3">Note:</p>
                <span className="text-[#b1b1b1]">Requested to send new one</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForLandlord;
