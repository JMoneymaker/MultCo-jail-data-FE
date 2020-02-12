import React from 'react';


const DetentionRow = ({ detention, fetchSelectedDetention }) => {
  const handleClick = (id) => {
    fetchSelectedDetention(id);

  };
  return (
    <tr>
      <td>{detention.bookingNumber}</td>
      <td>{detention.bookingDate}</td>
      <td>{detention.arrestingAgency}</td>
      <td onClick={() => {handleClick(detention._id); }}>details</td>
    </tr>
  );
};


export default DetentionRow;
