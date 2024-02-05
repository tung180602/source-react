import React, { useState } from 'react';

const InformationDisplay = ({ information, onInformationChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    onInformationChange(inputValue);
  };

  return (
    <div className='flex flex-col gap-4'>
      <p>Current Information: <span className='text-xl font-[600]'>{information}</span></p>
      <input
      className='border p-2'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter new information"
      />
      <button className='border rounded border-2 p-2 w-[180px] bg-green-200' onClick={handleButtonClick}>Change Information</button>
    </div>
  );
};

export default InformationDisplay;