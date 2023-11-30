import React, { useState } from 'react';
import { useGlobalContext } from "../context";
import { Input, Form } from 'semantic-ui-react';

const CollegeSearch = () => {
  const { filteredData, setFilteredData, originalData } = useGlobalContext();
  const [searchCollege, setSearchCollege] = useState("");

  const handleInputChange = (e) => {
    setSearchCollege(e.target.value);
  };

  const checkSequentialMatch = (collegeName, userInput) => {
    if (!collegeName || !userInput) {
      return false;
    }

    const college = collegeName.toLowerCase();
    userInput = userInput.toLowerCase();

    let userInputIndex = 0;
    let lastMatchedIndex = -1;

    for (let i = 0; i < college.length; i++) {
      if (college[i] === userInput[userInputIndex]) {
        if (userInputIndex === 0) {
          lastMatchedIndex = i; // Update last matched index
        }
        userInputIndex++;
      }
    }

    return userInputIndex === userInput.length && lastMatchedIndex !== -1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchedColleges = filteredData.features.filter(college =>
      checkSequentialMatch(college.name, searchCollege)
    );

    if (matchedColleges.length > 0) {
      console.log('Search matches user input');
      const updatedColleges = {
        ...filteredData,
        features: matchedColleges,
      };
      setFilteredData(updatedColleges);
    } else {
      console.log('Search fails');
      // Reset to original data when search fails
      setFilteredData(originalData);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          icon='search'
          type="text"
          value={searchCollege}
          onChange={handleInputChange}
          placeholder='Search...'
        />
        <Form.Button content='Submit' style={{ marginTop: '15px', marginBottom: '15px' }} />
      </Form>
    </div>
  );
};

export default CollegeSearch;
