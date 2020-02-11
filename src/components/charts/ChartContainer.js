import React from 'react';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetetionsByGender';

const Charts = () => {

  return (
    <main>
      <DetentionsByRaceChart />
      <DetentionsByGenderChart />
    </main>
  );
};

export default Charts;
