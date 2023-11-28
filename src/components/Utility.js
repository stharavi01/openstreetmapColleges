// Utility function to count occurrences of college types
export const countCollegeTypes = (features) => {
  return features.reduce((total, feature) => {
    const operatorType = feature.properties['operator:type'];
    if (operatorType !== undefined ) {
      total[operatorType] = (total[operatorType] || 0) + 1;
    }
    return total;
  }, {});
};

// Utility function to count occurrences of college level
 export const countCollegeLevel = (features) => {
  return features.reduce((total, feature) => {
    const iscedLevel = feature.properties['isced:level'];
    if (typeof iscedLevel === 'string' && iscedLevel !== undefined) {
      total[iscedLevel] = (total[iscedLevel] || 0) + 1;
    }
    return total;
  }, {});
};

