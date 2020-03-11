export const getCharges = (option) => {
  return fetch(`https://mult-co-jail-data.herokuapp.com/api/v1/countChargesBy${option}`)
    .then(res => res.json());
};
