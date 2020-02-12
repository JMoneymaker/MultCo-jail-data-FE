import { useState, useEffect } from 'react';
import { getDetention } from '../services/getDetentions';

const useDetention = (id) => {
  const [detention, setDetention] = useState();

  const fetchDetention = (id) => {
    console.log(id, 'id');
    getDetention(id)
      .then(detention => {
        setDetention(detention);
      });
  };
  useEffect((id) => fetchDetention(id), []);
  // console.log(detention, "Detention");
  return { detention, fetchDetention };
}
;

export default useDetention;
