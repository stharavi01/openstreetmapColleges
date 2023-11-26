import React, { createContext, useContext, useState } from 'react';
import { data } from '../src/data';

// const overpassUrl = "https://overpass-api.de/api/interpreter";
// const query = `
// [out:json];
// {{geocodeArea:Kathmandu}}->.searchArea;
// nwr["amenity"="college"](area.searchArea);
// out geom;
// `;
// fetch(overpassUrl, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: `data=${encodeURIComponent(query)}`,
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching data:', error));


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState(data);

  const filteredProperties = filteredData.features.map((collegeData) => {
    const { properties } = collegeData;
    const {
      name,
      'isced:level': iscedLevel,
      'building_count': buildingCount,
      'operator:type': operatorType,
      'personnel:count': personnelCount,
      'student:count': studentCount,
    } = properties;
    return { name, iscedLevel, buildingCount, operatorType, personnelCount, studentCount };
  });

  const contextValue = {
    filteredProperties,
    filteredData,
    setFilteredData,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
