import React from 'react';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetetionsByGender';
import PopulationByRaceChart from './PopulationByRace';
import DetentionsByRacePreHundredThousandChart from './DetentionsByRacePerHundredThousand';

const Charts = () => {

  return (
    <main>
      <PopulationByRaceChart />
      <DetentionsByRaceChart />
      <DetentionsByRacePreHundredThousandChart />
      <DetentionsByGenderChart />
    </main>
  );
};

export default Charts;
