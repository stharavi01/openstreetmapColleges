import React from 'react';
import { useGlobalContext } from '../context';
import { data } from '../data';

const FilterByOperatorType = () => {
  const { filteredProperties } = useGlobalContext();

  const totalColleges = data.features.length;

  const uniqueOperatorTypes = [...new Set(filteredProperties.map(property => property.operatorType).filter(operatorType => operatorType !== undefined))];
  console.log({ uniqueOperatorTypes });

  return (
    <div>
      <h2>Total Number of Colleges: {totalColleges}</h2>
    </div>
  );
};

export default FilterByOperatorType;
