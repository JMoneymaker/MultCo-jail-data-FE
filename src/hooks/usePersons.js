import { useState, useEffect } from 'react';
import { getPersons } from '../services/getPersons';
import { useLocation } from 'react-router-dom';

const useAverageDetention = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const searchParamsString = searchParams.toString();
  const [persons, setPersons] = useState([]);

  const fetchPersons = (params) => {
    getPersons(params)
      .then(setPersons);
  };
  useEffect(() => {
    fetchPersons(searchParams);
  }, [searchParamsString]);
  // console.log(persons, 'PERSONS');
  return { persons };
};

export default useAverageDetention;
