import { Table } from "semantic-ui-react";
import { useGlobalContext } from "../context";
import { useState } from "react";

const FilterByIscedLevels = () => {
  const { filteredProperties } = useGlobalContext();
    const [isExpanded, setIsExpanded] = useState(false);
    
const collegeLevelNumber = filteredProperties.reduce((total, collegeLevel) => {
  if (collegeLevel.iscedLevel !== '3' && typeof collegeLevel.iscedLevel === 'string') {
    total[collegeLevel.iscedLevel] = (total[collegeLevel.iscedLevel] || 0) + 1;
  }
  return total;
}, {});



const collegeLevelElements = Object.entries(collegeLevelNumber).map(([collegeLevel, total], id) => (
  <Table.Row key={id}>
    <Table.Cell style={{ width: '50%' }}>{collegeLevel}</Table.Cell>
    <Table.Cell style={{ width: '50%' }}>{total}</Table.Cell>
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
