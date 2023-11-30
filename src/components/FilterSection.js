// import FilterByIscedLevels from "./FilterByIscedLevels";
import FilterByOperatorType from "./FilterByOperatorType";
import CountCharts from "./CountCharts";
import { Icon } from 'semantic-ui-react';
import { useGlobalContext } from "../context";
import CollegeSearch from "./CollegeSearch";

const FilterSection = () => {
const {originalData, setFilteredData} = useGlobalContext();

const handleRefresh = () => { 
setFilteredData(originalData);

}

  return (
    <div className="filter-section">
       <h3>Filters <span onClick={handleRefresh} style={{marginLeft: '5px', cursor: 'pointer'}}> 
          <Icon name='undo'/>
          </span>
          </h3> 
      <p>Search your desired college </p>
      <CollegeSearch/>
     <FilterByOperatorType/>
      {/* <FilterByIscedLevels/> */}

      <h2 >Insights</h2>
     <CountCharts/>
    
   
    </div>
  );
};

export default FilterSection;
