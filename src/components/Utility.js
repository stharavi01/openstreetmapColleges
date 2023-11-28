// Utility function to count occurrences of college types
export const countCollegeTypes = (features) => {
  return features.reduce((total, feature) => {
    const operatorType = feature.properties['operator:type'];
    if (operatorType !== undefined) {
      total[operatorType] = (total[operatorType] || 0) + 1;
    }
    return total;
  }, {});
};

// Utility function to count occurrences of college types
 export const countCollegeLevel = (features) => {
  if (!features || !Array.isArray(features)) {
    return {}; // Return an empty object if features are not defined or not an array
  }

  return features.reduce((total, feature) => {
    const iscedLevel = feature.properties['isced:level'];
    if (iscedLevel !== '3' && typeof iscedLevel === 'string') {
      total[iscedLevel] = (total[iscedLevel] || 0) + 1;
    }
    return total;
  }, {});
};

