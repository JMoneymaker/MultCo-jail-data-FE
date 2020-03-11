import React, { useState } from 'react';
import Paging from '../common/Paging/Paging';
import ChargeItem from './ChargeItem';
import useCharges from '../../hooks/useCharges';
import { useHistory } from 'react-router-dom';


const ChargesPage = () => {
  const history = useHistory();
  const [chargeOption, setChartOption] = useState('Race');
  const charges = useCharges();
  console.log(charges);
  const handleOptionChange = ({ target }) => {
    setChartOption(target.value);
    const newSearchParams = new URLSearchParams();
    chargeOption && newSearchParams.set('option', chargeOption);
    history.push(`/charges?${newSearchParams}`);
  };

  return (
    <main>
      <h1>Charges by Race, Gender, and Arresting Agency</h1>
      <div>
        Most common charges by: <select onChange={handleOptionChange}>
          <option disabled value="Select">Select one:</option>
          <option value="Race">Race</option>
          <option value="Gender">Gender</option>
          <option value="Agency">Arresting Agency</option>
        </select>
      </div>
      <ul>
        {charges.map((charge) => <ChargeItem key={charge._id} charge={charge} />)}
      </ul>
      <Paging />
    </main>
  );
};

export default ChargesPage;
