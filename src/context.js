import React, { createContext, useContext, useState } from 'react';
import { data } from '../src/data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState(data);
  

  const filteredProperties = filteredData.features.map((collegeData) => {
    const { properties } = collegeData;
    const {
      name,
      'isced:level': iscedLevel,
      ' building_count': buildingCount,
      'operator:type': operatorType,
      'personnel:count': personnelCount,
      'student:count': studentCount,
    } = properties;
    return { name, iscedLevel, buildingCount, operatorType, personnelCount, studentCount };
  });

  const contextValue = {
    filteredProperties,
    // Add other values here if needed
  };

  
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export  {AppContext, AppProvider};