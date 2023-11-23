import React from 'react';
import { useGlobalContext } from '../context';
import { data } from '../data';
import { Header, Table } from 'semantic-ui-react';

const FilterByOperatorType = () => {
  const { filteredProperties } = useGlobalContext();

  const totalColleges = data.features.length;

  const uniqueOperatorTypes = Array.from(
    new Set(filteredProperties
      .filter(type => type.operatorType !== undefined)
      .map(type => type.operatorType))
  );

  const operatorTypeElements = uniqueOperatorTypes.map((type, id) => (
    <li key={id}>{type}</li>
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
          <Table.Row>
            <Table.Cell>
              <Header as='h2' textAlign='center' >
                {operatorTypeElements}
              </Header>
            </Table.Cell>
            <Table.Cell singleLine>Power Output</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default FilterByOperatorType;
