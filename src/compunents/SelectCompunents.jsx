import React from 'react';

const SelectMenu = ({ options }) => {
  return (
    <div className="absolute flex flex-col gap-y-1 w-44 px-4 right-0 bg-slate-50 rounded-xl py-2 border-2 border-[#737475] top-8">
      {options.map((option) => (
        <p
          key={option}
          className="text-sm text-[#737475] hover:bg-[#38bf67] px-2 cursor-pointer rounded-sm hover:text-white"
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default SelectMenu;
