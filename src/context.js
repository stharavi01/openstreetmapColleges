import React, { createContext, useContext, useState } from 'react';
import { data } from '../src/data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [originalData, setOriginalData] = useState(data)
  const [filteredData, setFilteredData] = useState(originalData);
 
  const filteredProperties = filteredData.features.map((collegeData) => {
    const { properties } = collegeData;
    const {
      name,
      '@id': id,
      'isced:level': iscedLevel,
      'building_count': buildingCount,
      'operator:type': operatorType,
      'personnel:count': personnelCount,
      'student:count': studentCount,
    } = properties;
    return { name, iscedLevel, buildingCount, operatorType, personnelCount, studentCount, id};
  });

  const contextValue = {
    originalData,
    setOriginalData,
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
