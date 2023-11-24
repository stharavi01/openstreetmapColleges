import CollegeLevelButtons from "./CollegeLevelButtons";
import CollegeTypeButtons from "./CollegeTypeButtons";
import FilterByIscedLevels from "./FilterByIscedLevels";
import FilterByOperatorType from "./FilterByOperatorType";



const FilterSection = () => {
  // 

  return (
    <div className="filter-section">
      <h2 >Insights</h2>
      <FilterByOperatorType/>
      <FilterByIscedLevels/>
      <h3>Filters</h3> 
    <CollegeTypeButtons/>
    <CollegeLevelButtons/>
   
    </div>
  );
};

export default FilterSection;
