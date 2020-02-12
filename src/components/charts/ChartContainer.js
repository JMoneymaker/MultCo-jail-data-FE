import React from 'react';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetetionsByGender';
import PopulationByRaceChart from './PopulationByRace';
import DetentionsByRacePreHundredThousandChart from './DetentionsByRacePerHundredThousand';
import styles from './ChartContainer.css';

const Charts = () => {

  return (
    <main className={styles.ChartContainer}>
      <PopulationByRaceChart />
      <DetentionsByRaceChart />
      <DetentionsByRacePreHundredThousandChart />
      <DetentionsByGenderChart />
    </main>
  );
};

export default Charts;
