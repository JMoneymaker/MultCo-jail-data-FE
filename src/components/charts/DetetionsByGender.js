import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import styles from './Charts.css';

const getCountByGender = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/persons/countByGender')
    .then(res => res.json());
};

const DetentionsByGenderChart = () => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  
  useEffect(() => {
    getCountByGender()
      .then(res => {setFemaleCount(res[0].count, setMaleCount(res[1].count));});
  }, []);

  return (
    <div className={styles.chartContainer}>
      <Chart
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Race', 'Arrests'],
          ['Female', femaleCount],
          ['Male', maleCount],
        ]}
        options={{
          title: 'Detentions by Gender',
          titleTextStyle: { 
            color: 'black', 
            fontName: 'Roboto', 
            fontSize: '16' },
          width:'100%',
          height: 'auto',
          chartArea: {
            top:50
          },
          backgroundColor: {
            stroke: '#4322c0',
            strokeWidth: 3
          },
          is3D: true,
          colors: ['#058F7A', '#9161A2', '#13646A', '#1F4763', '#A2506A', '#56809A']
        }} />
    </div>
  );
};

export default DetentionsByGenderChart;
