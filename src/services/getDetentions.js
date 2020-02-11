export const getDetentions = (params) => {
  return fetch(`https://mult-co-jail-data.herokuapp.com/api/v1/detentions?${params.toString()}`)
    .then(res => res.json());
};
