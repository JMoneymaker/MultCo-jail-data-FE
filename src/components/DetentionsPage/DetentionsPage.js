import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useDetentions from '../../hooks/useDetentions';
import useDetention from '../../hooks/useDetention';
import DetentionRow from './DetentionRow';
import Paging from '../common/Paging/Paging';
import DetailsModal from './DetailsModal';
import styles from './DetentionsPage.css';
import tableStyles from '../common/Tables.css';
import formStyles from '../common/Form.css';
import { useDetailsModal } from '../../hooks/useDetailsModal';

const DetentionsPage = () => {
  const { toggleDetailsModal, showDetailsModal } = useDetailsModal();
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
    <main className={styles.Detentions}>
      <div className={formStyles.FormWrapper}>
        <h3>Search by Arresting Agency:</h3>
        <div className={formStyles.QueryControls}>
          <select className={formStyles.dropdown} onChange={({ target }) => setArrestingAgency(target.value)}>
            {/* This should be dynamically generated if possible */}
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
            <option value="Gresham Police Department">Gresham Police Department</option>
          </select>
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <table className={tableStyles.Table}>
        <thead>
          <tr>
            <th><h3>Date</h3></th>
            <th><h3>Agency</h3></th>
            <th><h3>Details</h3></th>
          </tr>
        </thead>
        <tbody>
          {detentions.map((detention) => <DetentionRow key={detention._id} fetchSelectedDetention={fetchSelectedDetention} detention={detention} toggleDetailsModal={toggleDetailsModal}/>)}
        </tbody>
      </table>
      <Paging />
      <DetailsModal detention={selectedDetention} showDetailsModal={showDetailsModal} toggleDetailsModal={toggleDetailsModal} />
    </main>
  );
};

export default DetentionsPage;
