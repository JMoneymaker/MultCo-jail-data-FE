import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';


const getDetentionsOverTime = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/persons/DetentionsOverTime')
    .then(res => res.json());
};

const DetentionsOverTimeChart = () => {
  const [detentionCount, setDetentionCount] = useState([
    ['', ''], //optional labels for axes
    ['January 1', 1000],
    ['March 15', 950],
    ['March 20', 600],
    ['March 22', 500]
  ]);
  
  
  // useEffect(() => {
  //   getDetentionsOverTime()
  //     .then(res => {
        
  //     });
  // }, []);

  return (
    <>
      <h1>Detentions Over Time in Multnomah County</h1><br/>
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data={detentionCount}
        options={{
          colors: ['#058F7A', '#9161A2', '#13646A', '#1F4763', '#A2506A'],
          legend: { position: 'none' },
          curveType: 'function'
        }}
      />
    </>
  );
};

export default DetentionsOverTimeChart;
