import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Header from '../Header';
import SideBar from '../SideBar';
import { useHistory, useLocation } from 'react-router-dom';
import usePersons from '../../hooks/usePersons';
import PersonRow from './PersonRow';


const PersonsPage = () => {
  let searchParams = new URLSearchParams(useLocation().search);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(Infinity);
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const history = useHistory();
  const { persons } = usePersons(searchParams);
  console.log(persons);
  const handleClick = () => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('minAge', minAge);
    newSearchParams.set('maxAge', minAge);
    newSearchParams.set('gender', gender);
    history.push(`/persons?${newSearchParams}`);
  };

  return (
    <>
      <Header />
      <SideBar />
      <h1>Persons!</h1>
      <div className="QueryControls">
        Minimum age: <input type="text" value={minAge} onChange={({ target }) => setMinAge(target.value)} /> 
        Maximum Age: <input type="text" value={maxAge} onChange={({ target }) => setMaxAge(target.value)} />
        <select onChange={({ target }) => setGender(target.value)}>
          <option value="">Any</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button onClick={handleClick}>Submit query</button>
      </div>
      <table>
        <tbody>
          {persons.map((person) => <PersonRow key={person._id} person={person}/>)}
        </tbody>
      </table>
      <div></div>
    </>
  );

};

export default PersonsPage;




