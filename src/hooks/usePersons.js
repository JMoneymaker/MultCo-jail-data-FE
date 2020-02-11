import { useState, useEffect } from 'react';
import { getPersons } from '../services/getPersons';

const usePersons = (searchParams) => {
  const [persons, setPersons] = useState([]);

  const fetchPersons = (params) => {
    getPersons(params)
      .then(persons => {
        setPersons(persons);
      });
  };
  useEffect(() => fetchPersons(searchParams), []);
  console.log(searchParams.toString(), 'PERSONS');
  return { persons };
};

export default usePersons;
