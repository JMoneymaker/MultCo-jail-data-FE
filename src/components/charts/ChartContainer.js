import React from 'react';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetetionsByGender';
import PopulationByRaceChart from './PopulationByRace';
import DetentionsByRacePreHundredThousandChart from './DetentionsByRacePerHundredThousand';
import DetentionsByAgencyChart from './DetentionsByAgency';

const Charts = () => {

  return (
    <main>
      <PopulationByRaceChart />
      <DetentionsByRaceChart />
      <DetentionsByRacePreHundredThousandChart />
      <DetentionsByGenderChart />
      <DetentionsByAgencyChart />
    </main>
  );
};

export default Charts;
