import React from 'react';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetetionsByGender';
import styles from './ChartContainer.css';

const Charts = () => {

  return (
    <main className={styles.ChartContainer}>
      <DetentionsByRaceChart />
      <DetentionsByGenderChart />
    </main>
  );
};

export default Charts;
