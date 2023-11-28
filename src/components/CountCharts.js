import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGlobalContext } from "../context";
import {countCollegeTypes, countCollegeLevel} from "./Utility";
import { useState, useEffect } from 'react';

const CountCharts = ({collegeType, total}) => {
  const { filteredData } = useGlobalContext();
   const [collegeTypeCount, setCollegeTypeCount] = useState({});
  const [collegeLevelCount, setCollegeLevelCount] = useState({});

  useEffect(() => {
   // Calculate college type counts when filteredData changes
    setCollegeTypeCount(countCollegeTypes(filteredData.features));

    // Calculate college level counts when filteredData changes
    setCollegeLevelCount(countCollegeLevel(filteredData.features));
  }, [filteredData]);

  const data = [
    {
      name: 'CollegeTypes',
      private: collegeTypeCount.private || 0,
      private_non_profit: collegeTypeCount.private_non_profit || 0,
      government: collegeTypeCount.government || 0,
      community: collegeTypeCount.community || 0,
    },
    {
    name: 'CollegeLevels',
      secondary: collegeLevelCount.secondary || 0,
      higher_secondary: collegeLevelCount.higher_secondary || 0,
      college: collegeLevelCount.college || 0,
    },
  ];

  return (
   
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 60,
            left: 0,
            bottom: 5,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="private" fill="#8884d8" />
          <Bar dataKey="private_non_profit" fill="#82ca9d" />
          <Bar dataKey="government" fill="#FF5733" />
          <Bar dataKey="community" fill="#FFC300" />
          
          <Bar dataKey="secondary" fill="#e41a1c" />
          <Bar dataKey="higher_secondary" fill="#377eb8" />
          <Bar dataKey="college" fill="#4daf4a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CountCharts;
