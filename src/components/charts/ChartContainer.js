import React from 'react';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetetionsByGender';
import PopulationByRaceChart from './PopulationByRace';
import DetentionsByRacePreHundredThousandChart from './DetentionsByRacePerHundredThousand';
import DetentionsByAgencyChart from './DetentionsByAgency';
import styles from './ChartContainer.css';

const Charts = () => {

  return (
    <main className={styles.ChartContainer}>
      <PopulationByRaceChart /><br/>
      <DetentionsByRaceChart /><br/>
      <DetentionsByRacePreHundredThousandChart /><br/>
      <DetentionsByGenderChart /><br/>
      <DetentionsByAgencyChart /><br/>
    </main>
  );
};

export default Charts;
