// import FilterByIscedLevels from "./FilterByIscedLevels";
import FilterByOperatorType from "./FilterByOperatorType";
import CountCharts from "./CountCharts";
import { Icon } from 'semantic-ui-react';
import { useGlobalContext } from "../context";

const FilterSection = () => {
const {originalData, filteredData, setOriginalData} = useGlobalContext();

const handleRefresh = () => {
  console.log(originalData);
  console.log(filteredData);
setOriginalData(originalData);
 console.log(originalData);
  console.log(filteredData);
}

  return (
    <div className="filter-section">
        <h3>Filters 
          <span onClick={handleRefresh} style={{marginLeft: '5px', cursor: 'pointer'}}> 
          <Icon name='undo'/>
          </span>
          </h3> 
    
     <FilterByOperatorType/>
      {/* <FilterByIscedLevels/> */}

      <h2 >Insights</h2>
     <CountCharts/>
     
   
    </div>
  );
};

export default FilterSection;
