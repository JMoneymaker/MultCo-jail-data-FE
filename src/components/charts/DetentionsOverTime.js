import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';


const getDetentionsOverTime = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/dailyCounts')
    .then(res => res.json());
};

const DetentionsOverTimeChart = () => {
  const [detentionCounts, setDetentionCounts] = useState('loading');
      
  useEffect(() => {
    getDetentionsOverTime()
      .then(res => {
        const displayData = res.counts.map(item => {
          let container = [];
          container.push(item['date'].toString().slice(0, -14));
          container.push(item.count);
          return container;
        });
        setDetentionCounts(displayData);
      });
  }, []);

  return (
    <>
      <h1>Detentions Over Time in Multnomah County</h1><br/>
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data= {[['', ''], //optional labels for axes
          ...detentionCounts]}
        options={{
          colors: ['#A2506A', '#1F4763', '#9161A2', '#13646A', '#058F7A'],
          legend: { position: 'none' },
          curveType: 'function'
        }}
      />
    </>
  );
};

export default DetentionsOverTimeChart;
