import React from 'react';
import { useGlobalContext } from '../context';
import { data } from '../data';
import { Header, Table } from 'semantic-ui-react';

const FilterByOperatorType = () => {
  const { filteredProperties } = useGlobalContext();

  const totalColleges = data.features.length;

  const operatorTypeCounts = filteredProperties.reduce((counts, type) => {
    if (type.operatorType !== undefined) {
      counts[type.operatorType] = (counts[type.operatorType] || 0) + 1;
    }
    return counts;
  }, {});

  const operatorTypeElements = Object.entries(operatorTypeCounts).map(([type, count], id) => (
    <Table.Row key={id}>
      <Table.Cell>{type}</Table.Cell>
      <Table.Cell>{count}</Table.Cell>
    </Table.Row>
  ));

  return (
    <div>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>College Types</Table.HeaderCell>
            <Table.HeaderCell>Total Numbers ({totalColleges})</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {operatorTypeElements}
        </Table.Body>
      </Table>
    </div>
  );
};

export default FilterByOperatorType;
