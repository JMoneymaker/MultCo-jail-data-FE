import { useState, useEffect } from 'react';
import { getDetentions } from '../services/getDetentions';

const useDetentions = (searchParams) => {
  const [detentions, setDetentions] = useState([]);

  const fetchDetentions = (params) => {
    getDetentions(params)
      .then(detentions => {
        setDetentions(detentions);
      });
  };
  useEffect(() => fetchDetentions(searchParams), []);
  return { detentions };
};

export default useDetentions;
