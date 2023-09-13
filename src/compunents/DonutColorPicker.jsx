import React, { useState } from 'react';
import '../Style/DonutColorPicker.css'; // We'll create this file in the next step

 const DonutColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(''); // Initial color

//   const handleColorChange = (event) => {
//     const color = event.target.value;
//     setSelectedColor(color);
//     if (onChange) {
//       onChange(color);
//     }
//   };

  return (
    <div className="">
      <input
        type="color"
        
     //   onChange={handleColorChange}
       
      />
      
    </div>
  );
};

export default DonutColorPicker;
