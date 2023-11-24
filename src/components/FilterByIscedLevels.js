import { useGlobalContext } from "../context";

const FilterByIscedLevels = () => {
  const { filteredProperties } = useGlobalContext();

  const FilterTypeCount = filteredProperties.map((type)=>(
    console.log({FilterTypeCount});
  ))

  return (
    <div>
      <ul>hello</ul>
    </div>
  );
};

export default FilterByIscedLevels;
