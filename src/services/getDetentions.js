export const getDetentions = (params) => {
  return fetch(`https://mult-co-jail-data.herokuapp.com/api/v1/detentions?${params.toString()}`)
    .then(res => res.json());
};

export const getDetention = (id) => {
  return fetch(`https://mult-co-jail-data.herokuapp.com/api/v1/detentions/${id}`)
    .then(res => res.json());
}
;
