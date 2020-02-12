import React from 'react';

const DetentionRow = ({ detention }) => {
  return (
    <tr>
      <td>{detention.bookingNumber}</td>
      <td>{detention.bookingDate}</td>
      <td>{detention.arrestingAgency}</td>
      <td>details</td>
    </tr>
  );
};


export default DetentionRow;
