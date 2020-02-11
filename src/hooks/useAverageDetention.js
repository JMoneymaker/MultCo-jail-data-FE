import { useState, useEffect } from 'react';
import { getAvgDetention } from '../services/dataFetch';

const useAverageDetention = () => {
  const [data, setData] = useState(NaN);

  const fetchAverageDetention = () => {
    getAvgDetention()
      .then(setData);
  };
  useEffect(fetchAverageDetention, []);
  return { data };
};

export default useAverageDetention;
