import React, { useState } from 'react';

const SelectOptions = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [subOptions, setSubOptions] = useState([]);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setSubOptions(getSubOtions(e.target.value));
    };
    const getSubOtions = (option) => {
        switch (option) {
            case 'option1':
                return ['UPL', 'GHT', 'HYT'];
             case 'option2':
                return ['ARM', 'LEG', 'EYE'];
            case 'option3':
                return ['WHO', 'HOW', 'WHY'];
            case 'option4':
                return ['KAK', 'KIK', 'KOK', 'KUK'];
            default:
                return[];
        }  
      };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange} name="" id="">
        <option value="">Select</option>
        <option value="option1">HYD</option>
        <option value="option2">MUM</option>
        <option value="option3">DEL</option>
        <option value="option4">MAN</option>
      </select>
      {subOptions.length > 0 && 
        <select>
            {subOptions.map((subOption) => (
                <option key={subOption} value={subOption}>{subOption}</option>
            ))}
        </select>
       }
    </div>
  );
};

export default SelectOptions;
