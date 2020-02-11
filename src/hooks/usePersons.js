import { useState, useEffect } from 'react';
import { getPersons } from '../services/getPersons';

const useAverageDetention = (searchParams) => {
  const [persons, setPersons] = useState([]);

  const fetchPersons = (params) => {
    getPersons(params)
      .then(setPersons);
  };
  useEffect(() => fetchPersons(searchParams), []);
  console.log(persons, 'PERSONS');
  return { persons };
};

export default useAverageDetention;
