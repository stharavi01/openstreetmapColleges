import ChartInsight from "./ChartInsight";
import FilterByIscedLevels from "./FilterByIscedLevels";
import FilterByOperatorType from "./FilterByOperatorType";

const FilterSection = () => {
  return (
    <div className="filter-section">
      <h2 >Insights</h2>
      <FilterByOperatorType/>
      <FilterByIscedLevels/>
      <h3>Filters</h3> 
   <ChartInsight/>
   
    </div>
  );
};

export default FilterSection;
