import FilterByIscedLevels from "./FilterByIscedLevels";
import FilterByOperatorType from "./FilterByOperatorType";
import CountCharts from "./CountCharts";

const FilterSection = () => {
  return (
    <div className="filter-section">
      <h2 >Insights</h2>
     <CountCharts/>
      <h3>Filters</h3> 
     <FilterByOperatorType/>
      <FilterByIscedLevels/>
   
    </div>
  );
};

export default FilterSection;
