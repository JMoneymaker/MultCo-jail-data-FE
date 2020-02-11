import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const getCountByGender = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/persons/countByGender')
    .then(res => res.json());
};

const detentionsByGenderChart = () => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  
  useEffect(() => {
    getCountByGender()
      .then(res => {setFemaleCount(res[0].count, setMaleCount(res[1].count));});
  }, []);

  return (
    <>
      <h1>Detentions in Multnomah County by Gender</h1>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Race', 'Arrests'],
          ['Female', femaleCount],
          ['Male', maleCount],
        ]}
        options={{
          is3D: true,
          colors: ['#058F7A', '#9161A2', '#13646A', '#F7F8F8', '#1F4763', '#A2506A', '#56809A']
        }}
      />
    </>
  );
};

export default detentionsByGenderChart;
