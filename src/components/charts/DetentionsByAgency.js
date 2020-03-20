import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import styles from './Charts.css';

const getCountByAgency = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/detentions/countByAgency')
    .then(res => res.json());
};

const DetentionsByAgencyChart = () => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getCountByAgency()
      .then(res => {setData(res);});
  }, []);
  
  const titles = ['Agency', 'Arrests'];

  const dataPoints = data.map(item => {
    return [item._id, item.count];
  });
 
  return (

    <div className={styles.chartWrapper}>
      <h2>Detentions by Agency</h2>
      <Chart
        width={'100%'}
        height={'auto'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={ [titles, ...dataPoints] }
        options={{
          is3D: true,
          colors: ['#058F7A', '#9161A2', '#13646A', '#1F4763', '#A2506A', '#56809A']
        }} />
    </div>
    
  );
};

export default DetentionsByAgencyChart;
