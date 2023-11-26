import { Table } from "semantic-ui-react";
import { useGlobalContext } from "../context";
import { useState } from "react";
import { Button } from 'semantic-ui-react'

const FilterByIscedLevels = () => {
  const { filteredProperties, filteredData, setFilteredData } = useGlobalContext();
  const [isExpanded, setIsExpanded] = useState(false);
  
 const handleCollegeDisplay = (collegeLevel) => {
  if (collegeLevel === 'secondary') {
    const updatedData = {
      ...filteredData,
      features: filteredData.features.filter(feature => feature.properties['isced:level'] === 'secondary')  
    };
    
    console.log(updatedData);
    setFilteredData(updatedData);
    
  } else if (collegeLevel === 'higher_secondary') {
    const updatedData = {
      ...filteredData,
      features: filteredData.features.filter(feature => feature.properties['isced:level'] === 'higher_secondary')  
    };
   
    console.log(updatedData);
    setFilteredData(updatedData);

  } else if (collegeLevel === 'college') {
    const updatedData = {
      ...filteredData,
      features: filteredData.features.filter(feature => feature.properties['isced:level'] === 'college')  
    };
     console.log(updatedData);
    setFilteredData(updatedData);
  }
}

  // Get unique colleges level
  const collegeLevelNumber = filteredProperties.reduce((total, collegeLevel) => {
    if (collegeLevel.iscedLevel !== '3' && typeof collegeLevel.iscedLevel === 'string') {
      total[collegeLevel.iscedLevel] = (total[collegeLevel.iscedLevel] || 0) + 1;
    }
    return total;
  }, {});

  // Convert those unique levels into key value pair and display in table dynamically
  const collegeLevelElements = Object.entries(collegeLevelNumber).map(([collegeLevel, total]) => (
    <Table.Row key={collegeLevel}>
      <Table.Cell style={{ width: '50%' }}>
        <ul style={{ listStyleType: 'none' }}>
          <li><Button floated='left' size='tiny' onClick={()=>{handleCollegeDisplay(collegeLevel)}}>{collegeLevel}</Button></li>
        </ul>
      </Table.Cell>
      <Table.Cell style={{ width: '5a0%' }}>
        <ul style={{ listStyleType: 'none' }}>
          <li>{total}</li>
        </ul>
      </Table.Cell>
    </Table.Row>
  ));

  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Table celled compact>
        <Table.Header onClick={handleHeaderClick}>
          <Table.Row style={{ cursor: 'pointer' }}>
            <Table.HeaderCell colSpan="2">College Levels:</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {isExpanded && (
          <Table.Body>
            {collegeLevelElements}
          </Table.Body>
        )}
      </Table>
    </>
  );
};

export default FilterByIscedLevels;
