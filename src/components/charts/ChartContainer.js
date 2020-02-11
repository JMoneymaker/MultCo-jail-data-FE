import React from 'react';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetetionsByGender';
import PopulationByRaceChart from './PopulationByRace';

const Charts = () => {

  return (
    <main>
      <PopulationByRaceChart />
      <DetentionsByRaceChart />
      <DetentionsByGenderChart />
    </main>
  );
};

export default Charts;
