import React, { useState } from 'react';
//import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { FaCaretDown,FaCaretUp,FaCaretRight } from 'react-icons/fa';
const CollapsibleDropdown = ({ title, subcategories }) => {
    const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const openHandler=() => {
    setOpen(!open);
  }
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="mb-2  ">
        <button
          className="flex  ml-4  w-full px-4 py-2 text-sm font-medium text-gray-700   rounded-md focus:outline-none"
          onClick={toggleOpen}
        >
           {isOpen ? <FaCaretDown className="w-4 h-4 mr-2" /> : <FaCaretRight className="w-4 h-4 mr-2" />}
          {title+""}
         
        </button>
        {isOpen && (
          <ul className="mt-1 space-y-1">
            {subcategories.map(subcategory => (
              <li key={subcategory.id} className="pl-4 ml-5">
                <div className='flex gap-x-2 cursor-pointer' onClick={openHandler}>
                {open ? <FaCaretDown className="w-4 h-4 mr-2" /> : <FaCaretRight className="w-4 h-4 mr-2" />}
                <p className="text-sm font-medium text-gray-700">{subcategory.title}</p></div>
                
                <ul className="mt-1 space-y-1">
                  {open && subcategory.items.map(item => (
                    <li key={item} className="pl-5 text-sm ml-5 text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default CollapsibleDropdown; 