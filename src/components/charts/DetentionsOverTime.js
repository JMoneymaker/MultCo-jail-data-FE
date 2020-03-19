import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';


const getDetentionsOverTime = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/persons/DetentionsOverTime')
    .then(res => res.json());
};

const DetentionsOverTimeChart = () => {
  let displayData = [];

  const dummyData = [
    { date: '2020-03-03T03:02:43Z', count: 1000 },
    { date: '2020-03-10T03:02:43Z', count: 900 },
    { date: '2020-03-16T03:02:43Z', count: 800 },
    { date: '2020-03-19T03:02:43Z', count: 500 }
  ];

  function dataMunger(rawData) { 
    rawData.map(item => {
      const container = [];
      container[0] = item.date.toDateString(),
      container[1] = item.count;
      return container;
    });
  }


  const [detentionCounts, setDetentionCounts] = useState([
    ['January 1', 1000],
    ['March 15', 950],
    ['March 20', 600],
    ['March 22', 500]
  ]);
  
  
  // useEffect(() => {
  //   getDetentionsOverTime()
  //     .then(res => {
  //       displayData = dataMunger(res);
  //       setDetentionCounts(displayData);
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
        data= {[['', ''], //optional labels for axes
          ...detentionCounts]}
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
