import { data } from "../data";

const FilterSection = () => {
  return (
    <div className="filter-section">
      <h1>Filters</h1>
      {data.features.map((collegeData) => {
        const { properties, geometry, id } = collegeData;
        const { building_count, 'isced:level': iscedLevel, 'operator:type' : operatorType, 'personnel:count': personnelCount, 'student:count': studentCount, name } = properties; 
        return null;
      })}
    </div>
  );
};

export default FilterSection;
