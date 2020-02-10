export const getAvgDetention = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/detentions/avgDetentionDuration')
    .then(res => res.json())
    .then(res => {
      return res[0].avgDifference / 86400000; 
    });

};
