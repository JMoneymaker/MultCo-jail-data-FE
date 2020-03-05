import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useDetentions from '../../hooks/useDetentions';
import useDetention from '../../hooks/useDetention';
import DetentionRow from './DetentionRow';
import Paging from '../common/Paging/Paging';

import DetentionDetails from './DetentionDetails';
import styles from './DetentionsPage.css';

const DetentionsPage = () => {
  const [arrestingAgency, setArrestingAgency] = useState(0);
  const history = useHistory();
  const { detentions } = useDetentions();
  const { detention: selectedDetention, fetchDetention: fetchSelectedDetention } = useDetention();

  const handleClick = () => {
    const newSearchParams = new URLSearchParams();
    arrestingAgency && newSearchParams.set('arrestingAgency', arrestingAgency);
    history.push(`/detentions?${newSearchParams}`);
  };
  return (
    <main className={styles.pageBody}>
      <h1 className={styles.h1}>Search all Detentions by Arresting Agency</h1>
      <div className={styles.QueryControls}>
        Arresting Agency:
        <select onChange={({ target }) => setArrestingAgency(target.value)}>
          <option value="">Any</option>
          <option value="Beaverton Police">Beaverton Police</option>
          <option value="Multnomah County Sheriff Booking">Multnomah County Sheriff Booking</option>
          <option value="Portland Police, Central Precinct">Portland Police, Central Precinct</option>
          <option value="Portland Police, East Precinct">Portland Police, East Precinct</option>
          <option value="Portland Police, North Precinct">Portland Police, North Precinct</option>
          <option value="Portland Police, Other">Portland Police, Other</option>
          <option value="Portland Sheriff">Portland Sheriff</option>
          <option value="Portland FBI">Portland FBI</option>
          <option value="Portland State Police">Portland State Police</option>
          <option value="Troutdale Police">Troutdale Police</option>
          <option value="PSU">PSU</option>
          <option value="OHSU University Police">OHSU University Police</option>
          <option value="Port of Portland">Port of Portland</option>
          <option value="Portland Criminal Court">Portland Criminal Court</option>
          <option value="MCSO Transports">MCSO Transports</option>
          <option value="US Marshall Service">US Marshall Service</option>
          <option value="   ">Unknown</option>
          <option value="Other Agency">Other Agency</option>
          <option value="Community Corrections">Community Corrections</option>
          <option value="Tri-Met Police">Tri-Met Police</option>
          <option value="Drug Enforcement Administration">Drug Enforcement Administration</option>
          <option value="Gresham Police Department">Gresham Police Departmen</option>
        </select>
        <button onClick={handleClick}>Submit query</button>
      </div>
      <table className={styles.tbody}>
        <tbody>
          {detentions.map((detention) => <DetentionRow key={detention._id} fetchSelectedDetention={fetchSelectedDetention} detention={detention}/>)}
        </tbody>
      </table>
      <Paging />
      <DetentionDetails detention={selectedDetention} />
    </main>
  );

};

export default DetentionsPage;




