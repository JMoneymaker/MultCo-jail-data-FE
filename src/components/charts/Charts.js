import React from 'react';
import DetentionsOverTimeChart from './DetentionsOverTime';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetetionsByGender';
import PopulationByRaceChart from './PopulationByRace';
import DetentionsByRacePreHundredThousandChart from './DetentionsByRacePerHundredThousand';
import DetentionsByAgencyChart from './DetentionsByAgency';
import styles from './Charts.css';
import '../../main.css';

const Charts = () => {

  return (
    <main className={styles.ChartWrapper}>
      <div className={styles.Daily}>
        <DetentionsOverTimeChart />
      </div>
      <div className={styles.Annual}>
        <PopulationByRaceChart />
        <DetentionsByRaceChart />
        <DetentionsByRacePreHundredThousandChart />
        <DetentionsByGenderChart />
        <DetentionsByAgencyChart />
      </div>
    </main>
  );
};

export default Charts;
