import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { Table } from 'semantic-ui-react';

const FilterByOperatorType = () => {
  const { filteredProperties } = useGlobalContext();
  const [isExpanded, setIsExpanded] = useState(false);

  const collegeTypeCounts = filteredProperties.reduce((counts, type) => {
    if (type.operatorType !== undefined) {
      counts[type.operatorType] = (counts[type.operatorType] || 0) + 1;
    }
    return counts;
  }, {});

  const collegeTypeElements = Object.entries(collegeTypeCounts).map(([type, count], id) => (
    <Table.Row key={id}>
      <Table.Cell style={{width:'50%'}}>{type}</Table.Cell>
      <Table.Cell style={{width:'50%'}}>{count}</Table.Cell>
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
            <Table.HeaderCell colSpan="2">College Types</Table.HeaderCell>
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
