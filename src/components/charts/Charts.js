import React from 'react';
import DetentionsOverTimeChart from './DetentionsOverTime';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetetionsByGender';
import PopulationByRaceChart from './PopulationByRace';
import DetentionsByRacePreHundredThousandChart from './DetentionsByRacePerHundredThousand';
import DetentionsByAgencyChart from './DetentionsByAgency';
import styles from './Charts.css';

const Charts = () => {

  return (
    <main className={styles.ChartContainer}>
      <DetentionsOverTimeChart />
      <PopulationByRaceChart />
      <DetentionsByRaceChart />
      <DetentionsByRacePreHundredThousandChart />
      <DetentionsByGenderChart />
      <DetentionsByAgencyChart />
    </main>
  );
};

export default Charts;
