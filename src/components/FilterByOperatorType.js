import React from 'react';
import { useGlobalContext } from '../context';
import { Button } from 'semantic-ui-react';
import { countCollegeTypes } from './Utility';

const FilterByOperatorType = () => {
  const { filteredData, setFilteredData } = useGlobalContext();

  const handleCollegeTypeDisplay = (collegeType) => {
    const updatedFeatures = filteredData.features.filter(
      (feature) => feature.properties['operator:type'] === collegeType
    );

    const updatedData = {
      ...filteredData,
      features: updatedFeatures,
    };

    setFilteredData(updatedData);
  };

  const collegeTypeButtons = Object.entries(countCollegeTypes(filteredData.features)).map(
    ([collegeType, total]) => (
      <Button
        key={collegeType}
        onClick={() => handleCollegeTypeDisplay(collegeType)}
        style={{ margin: '5px' }}
        size= 'tiny'
      >
        {collegeType} 
      </Button>
    )
  );

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <h4>College Types & Levels</h4>
        {collegeTypeButtons}
      </div>
    </>
  );
};

export default FilterByOperatorType;
