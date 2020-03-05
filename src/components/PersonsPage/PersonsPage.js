import React, { useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import { useHistory } from 'react-router-dom';
import usePersons from '../../hooks/usePersons';
import PersonRow from './PersonRow';
import styles from './PersonsPage.css';


const PersonsPage = () => {
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(Infinity);
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const history = useHistory();
  const { persons } = usePersons();
  const handleClick = () => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('minAge', minAge);
    newSearchParams.set('maxAge', maxAge);
    gender && newSearchParams.set('gender', gender);
    race && newSearchParams.set('race', race);
    history.push(`/persons?${newSearchParams}`);
  };

  return (
    <>
      <Header />
      <SideBar />
      <div className={styles.pageBody}>
        <h1 className={styles.h1}>Sort all Bookings By Age, Race, and Gender</h1>
        <div className={styles.QueryControls}>
        Minimum age: <input type="text" value={minAge} onChange={({ target }) => setMinAge(target.value)} />
        Maximum Age: <input type="text" value={maxAge} onChange={({ target }) => setMaxAge(target.value)} />
        Gender: <select onChange={({ target }) => setGender(target.value)}>
            <option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        Race: <select onChange={({ target }) => setRace(target.value)}>
            <option value="">Any</option>
            <option value="Black">Black</option>
            <option value="Hispanic">Hispanic</option>
            <option value="P">Pacific Islander</option>
            <option value="Asian">Asian</option>
            <option value="White">White</option>
            <option value="Native American or Alaskan">Native American or Alaskan</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <button onClick={handleClick}>Search</button>
      </div>
      <table className={styles.tbody}>
        <tbody  >
          {persons.map((person) => <PersonRow key={person._id} person={person}/>)}
        </tbody>
      </table>
    </>
  );

};

export default PersonsPage;
