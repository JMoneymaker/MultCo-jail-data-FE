export const getAvgDetention = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/detentions/avgDetentionDuration')
    .then(res => res.json())
    .then(res => {
      return res[0].avgDifference / 86400000; 
    });
};

export const getDetentionsYearToDate = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/detentions/countYTD')
    .then(res => res.json());
};

export const getTotalCurrentDetentions = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/detentions/countToday')
    .then(res => res.json());
};
