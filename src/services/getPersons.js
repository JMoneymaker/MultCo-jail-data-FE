export const getPersons = (params) => {
  return fetch(`https://mult-co-jail-data.herokuapp.com/api/v1/persons?${params.toString()}`)
    .then(res => res.json());
};