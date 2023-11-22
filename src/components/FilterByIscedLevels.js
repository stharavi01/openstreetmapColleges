import React from 'react';
import { useGlobalContext } from '../context';
import { Dropdown } from 'semantic-ui-react';

const FilterByIscedLevels = () => {
  const { filteredProperties, FilteredData } = useGlobalContext();
  

  const handleSecondaryDisplay = () => {
    const filteredSecondary = filteredProperties.filter((level)=>level.iscedLevel === 'secondary');
    console.log(filteredSecondary);
  }

  // const iscedLevels = filteredProperties.map((property) => ({
  //   key: property.id,
  //   text: property.iscedLevel,
  //   value: property.iscedLevel
  // }));

  return (
    <div>
   <button onClick={handleSecondaryDisplay}>Secondary</button>
    </div>
  );
};

export default FilterByIscedLevels;