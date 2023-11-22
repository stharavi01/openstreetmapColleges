import { useState } from "react";
import { data } from "../data";

const FilterSection = () => {
  const [filteredData, setFilteredData] = useState(data);

  const renderData = filteredData.features.map((collegeData) => {
    const { properties, id } = collegeData;
    const {
      name,
      'isced:level': iscedLevel,
      building_count,
      'operator:type': operatorType,
      'personnel:count': personnelCount,
      'student:count': studentCount,
      
    } = properties;

    return (

   


      <div key={id}>
        <p>Building Count: {building_count}</p>
        <p>ISCED Level: {iscedLevel}</p>
        <p>Operator Type: {operatorType}</p>
      
      </div>
    );
  });

  return (
    <div className="filter-section">
      <h1>Filters</h1>
      {renderData}
    </div>
  );
};

export default FilterSection;
