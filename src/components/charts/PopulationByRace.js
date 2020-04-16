import React from 'react';
import { Chart } from 'react-google-charts';
import styles from './Charts.css';

const PopulationByRaceChart = () => {
  
  return (
    <div className={styles.chartContainer}>
      <Chart
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Race', 'Population'],
          ['Black', 56569],
          ['Hispanic', 88966],
          ['Pacific', 8515],
          ['Asian', 72700],
          ['White', 652045],
          ['Native American', 8515],
        ]}
        options={{
          title: '2017 Demographic Estimates',
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
            fill: '#9161A2',
            stroke: '#4322c0',
            strokeWidth: 3,
          },
          is3D: true,
          colors: ['#058F7A', '#9161A2', '#13646A', '#1F4763', '#A2506A', '#56809A']
        }} />
    </div>
  );
};

export default PopulationByRaceChart;

