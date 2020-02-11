import React from 'react';

const PersonRow = ({ person }) => {
  return (
    <tr>
      <td>{person.gender}</td>
      <td>{person.race}</td>
      <td>{person.age}</td>
      <td>{person.height}</td>
      <td>{person.weight}</td>
      <td>Details</td>
    </tr>
  );
};

export default PersonRow;
