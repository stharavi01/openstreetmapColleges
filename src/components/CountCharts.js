import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGlobalContext } from "../context";

const CountCharts = ({collegeType, total}) => {
  const { filteredProperties } = useGlobalContext();
  
  const data = [
    {
      name: 'CollegeTypes',
      private: 40,
      private_non_profit: 24,
      government: 24,
      community: 10,
    },
    {
      name: 'CollegeLevels',
      secondary: 30,
      higher_secondary: 13,
      college: 22,
    },
  ];

  return (
   
    <div style={{ width: '100%', height: '300px' }}>
       <div>
      <p>College Type: {collegeType}</p>
      <p>Total: {total}</p>
      {/* Other content using collegeType and total */}
    </div>
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
