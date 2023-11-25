import { Table } from "semantic-ui-react";
import { useGlobalContext } from "../context";
import { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'

const FilterByIscedLevels = () => {
  const { filteredProperties, filteredData, setFilteredData } = useGlobalContext();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Filter on Button Click
const handleCollegeLevelDisplay = (collegeLevel) => {
  if (collegeLevel === 'secondary') {
    const filterCollege = filteredData.features.find((feature) => feature.properties.amenity === 
    "College");

    if (filterCollege) {
      // Access properties of the filtered college
      console.log(filterCollege.properties);
    } else {
      console.log('College not found');
    }
  }
};





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
          <li><Button floated='left' size='tiny' onClick={() => handleCollegeLevelDisplay(collegeLevel)}>{collegeLevel}</Button></li>
        </ul>
      </Table.Cell>
      <Table.Cell style={{ width: '50%' }}>
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
