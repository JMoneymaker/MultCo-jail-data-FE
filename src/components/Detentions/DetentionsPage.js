import React, { useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import { useHistory, useLocation } from 'react-router-dom';
import useDetentions from '../../hooks/useDetentions';
import DetentionRow from './DetentionRow';


const DetentionsPage = () => {
  let searchParams = new URLSearchParams(useLocation().search);
  const [arrestingAgency, setArrestingAgency] = useState(0);
  const history = useHistory();
  const { detentions } = useDetentions(searchParams);
  const handleClick = () => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('arrestingAgency', arrestingAgency);
    history.push(`/detentions?${newSearchParams}`);
  };
  return (
    <>
      <Header />
      <SideBar />
      <h1>Detentions!</h1>
      <div className="queryControls">
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
      <table>
        <tbody>
          {detentions.map((detention) => <DetentionRow key={detention._id} detention={detention}/>)}
        </tbody>
      </table>
    </>
  );

};

export default DetentionsPage;




