import FilterByIscedLevels from "./FilterByIscedLevels";
import FilterByOperatorType from "./FilterByOperatorType";
const FilterSection = () => {
  // 

  return (
    <div className="filter-section">
      <h1 style={{marginLeft:"20px"}}>Insights</h1>
      <FilterByOperatorType/>
       {/* <FilterByIscedLevels/> */}
   
    </div>
  );
};

export default FilterSection;
