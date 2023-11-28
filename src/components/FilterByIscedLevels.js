// import React from 'react';
// import { Button } from 'semantic-ui-react';
// import { useGlobalContext } from '../context';
// import { countCollegeLevel } from './Utility';

// const FilterByIscedLevels = () => {
//   const { originalData, setOriginalData } = useGlobalContext();

//   const handleCollegeDisplay = (collegeLevel) => {
//     const updatedFeatures = originalData.features.filter(
//       (feature) => feature.properties['isced:level'] === collegeLevel
//     );

//     const updatedData = {
//       ...originalData,
//       features: updatedFeatures
//     };

//     setOriginalData(updatedData);
//   };

//   const collegeLevelButtons = Object.entries(countCollegeLevel(originalData.features)).map(
//     ([collegeLevel, total]) => (
//       <Button
//         key={collegeLevel}
//         onClick={() => handleCollegeDisplay(collegeLevel)}
//         style={{ margin: '5px' }}
//       >
//         {collegeLevel} 
//       </Button>
//     )
//   );

//   return (
//     <div style={{ marginBottom: '10px' }}>
//       <h4>College Levels</h4>
//       {collegeLevelButtons}
//     </div>
//   );
// };

// export default FilterByIscedLevels;
