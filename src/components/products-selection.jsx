import React, { useState } from 'react';

const ProductSelectOptions = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [subOptions, setSubOptions] = useState([]);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setSubOptions(getSubOtions(e.target.value));
    };
    const getSubOtions = (option) => {
        switch (option) {
            case 'option1':
                return ['VEGES', 'POTATOES', 'GHT', 'HYT'];
             case 'option2':
                return ['SPINACH', 'LEG', 'EYE'];
            case 'option3':
                return ['KIWI', 'HOW', 'WHY'];
            case 'option4':
                return ['KISMIS', 'KIK', 'KOK'];
            case 'option5':
                return ['PAPPU', 'DAL', 'ALMONDS']
            default:
                return[];
        }  
      };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange} name="" id="">
        <option value="">Select for products</option>
        <option value="option1">Vegetables</option>
        <option value="option2">Leafy Vegetables</option>
        <option value="option3">Fruits</option>
        <option value="option4">Dry Fruits</option>
        <option value="option5">Cereals</option>
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

export default ProductSelectOptions;
