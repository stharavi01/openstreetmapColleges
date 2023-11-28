import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { Table } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import {countCollegeTypes} from "./Utility";

const FilterByOperatorType = () => {
  const { filteredData, setFilteredData } = useGlobalContext();
  const [isExpanded, setIsExpanded] = useState(false);

 
  const handleCollegeTypeDisplay = (collegeType) => {
    if (!filteredData) return;
    const updatedFeatures = filteredData.features.filter(
      feature => feature.properties['operator:type'] === collegeType
    );

    const updatedData = {
      ...filteredData,
      features: updatedFeatures
    };

    setFilteredData(updatedData);
  };

  const collegeTypeElements = Object.entries(countCollegeTypes(filteredData.features)).map(([collegeType, total]) => (

    <Table.Row key={collegeType}>
      <Table.Cell style={{ width: '50%' }}>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Button floated='left' size='tiny' onClick={() => handleCollegeTypeDisplay(collegeType)}>
              {collegeType}
            </Button>
          </li>
        </ul>
      </Table.Cell>
      <Table.Cell style={{ width: '50%' }}>{total}</Table.Cell>
    </Table.Row>
 
  ));

  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Table celled>
        <Table.Header onClick={handleHeaderClick}>
          <Table.Row style={{ cursor: 'pointer' }}>
            <Table.HeaderCell colSpan="2">College Types:</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {isExpanded && (
          <Table.Body>
            {collegeTypeElements}
          </Table.Body>
        )}
      </Table>
    </>
  );
};

export default FilterByOperatorType;
