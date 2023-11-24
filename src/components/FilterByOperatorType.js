import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { Table } from 'semantic-ui-react';

const FilterByOperatorType = () => {
  const { filteredProperties } = useGlobalContext();
  const [isExpanded, setIsExpanded] = useState(false);

 const collegeTypeNumber = filteredProperties.reduce((total, collegeType) => {
    if (collegeType.operatorType !== undefined) {
      total[collegeType.operatorType] = (total[collegeType.operatorType] || 0) + 1;
    }
    return total;
  }, {});


  const collegeTypeElements = Object.entries(collegeTypeNumber).map(([collegeType, total], id) => (
    <Table.Row key={id}>
      <Table.Cell style={{width:'50%'}}>{collegeType}</Table.Cell>
      <Table.Cell style={{width:'50%'}}>{total}</Table.Cell>
    </Table.Row>
  ));

  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <>
      <Table celled >
        <Table.Header onClick={handleHeaderClick} >
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