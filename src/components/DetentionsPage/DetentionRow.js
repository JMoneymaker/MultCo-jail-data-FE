import React from 'react';
import PropTypes from 'prop-types';
import tableStyles from '../common/Tables.css';

const DetentionRow = ({ detention, fetchSelectedDetention, toggleDetailsModal }) => {
  const handleClick = (id) => {
    fetchSelectedDetention(id);
    toggleDetailsModal();
  };

  return (
    <tr className={tableStyles.Table}>
      <td>{detention.bookingDate.slice(0, 10)}</td>
      <td>{detention.arrestingAgency}</td>
      <td> <button onClick={() => {
        handleClick(detention._id);
      }}>Details</button></td>
    </tr>
  );
};

DetentionRow.propTypes = {
  detention: PropTypes.object.isRequired,
  fetchSelectedDetention: PropTypes.func.isRequired,
  toggleDetailsModal: PropTypes.func.isRequired
};

export default DetentionRow;
