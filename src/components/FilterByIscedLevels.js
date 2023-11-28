import { Table } from "semantic-ui-react";
import { useGlobalContext } from "../context";
import { useState } from "react";
import { Button } from 'semantic-ui-react';
import { countCollegeLevel } from "./Utility";

const FilterByIscedLevels = () => {
  const { filteredData, setFilteredData } = useGlobalContext();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCollegeDisplay = (collegeLevel) => {
    const updatedFeatures = filteredData.features.filter(
      feature => feature.properties['isced:level'] === collegeLevel
    );

    const updatedData = {
      ...filteredData,
      features: updatedFeatures
    };

    console.log(updatedData);
    setFilteredData(updatedData);
  };
 

  // Convert unique levels into table elements dynamically
const collegeLevelElements = Object.entries(countCollegeLevel(filteredData.features)).map(([collegeLevel, total]) => (
    <Table.Row key={collegeLevel}>
      <Table.Cell style={{ width: '50%' }}>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Button floated='left' size='tiny' onClick={() => handleCollegeDisplay(collegeLevel)}>
              {collegeLevel}
            </Button>
          </li>
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
      <Table celled compact style={{marginBottom: '80px'}}>
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
