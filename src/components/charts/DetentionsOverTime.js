import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';


const getDetentionsOverTime = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/persons/DetentionsOverTime')
    .then(res => res.json());
};

const DetentionsOverTimeChart = () => {
  // const dummyData = [
  //   { date: '2020-03-03T03:02:43Z', count: 1000 },
  //   { date: '2020-03-10T03:02:43Z', count: 900 },
  //   { date: '2020-03-16T03:02:43Z', count: 800 },
  //   { date: '2020-03-19T03:02:43Z', count: 500 }
  // ];

  // const smartData = dummyData.map(item => {
  //   let container = [];
  //   container.push(item['date'].toString().slice(0, -10));
  //   container.push(item.count);
  //   return container;
  // });
 
  const [detentionCounts, setDetentionCounts] = useState();
  
  
  useEffect(() => {
    getDetentionsOverTime()
      .then(res => {
        const displayData = res.map(item => {
          let container = [];
          container.push(item['date'].toString().slice(0, -10));
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
