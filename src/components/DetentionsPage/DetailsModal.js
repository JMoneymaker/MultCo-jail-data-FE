import React from 'react';
import styles from './DetailsModal.css';
import PropTypes from 'prop-types';

const DetailsModal = ({ detention, showDetailsModal, toggleDetailsModal }) => {
  if(detention) {
    return (
      <section>
        <div className={`${styles.DetailsModal} ${showDetailsModal ? styles.modalShow : styles.modalHide}`}>
          <div>
            <button className={styles.closeButton} type='button' onClick={toggleDetailsModal}>&times;</button>
            <ul>
              <li>Booking Number: {detention.bookingNumber}</li>
              <li>Booking Date: {detention.bookingDate}</li>
              <li>Arresting Agency: {detention.arrestingAgency}</li>
              <li>Gender: {detention.person.gender}</li>
              <li>Race: {detention.person.race}</li>
              <li>Age: {detention.person.age}</li>
              <li>Height: {detention.person.height}</li>
              <li>Weight: {detention.person.weight}</li>
              <li>Assigned Facility: {detention.currentBookingState.assignedFacility}</li>
              <li>Projected Release Date: {detention.currentBookingState.projectedReleaseDate}</li>
              <li>Release Date: {detention.releaseDate}</li>
              <li>Charges: {detention.currentCaseState && detention.currentCaseState.charges.map((charge) => {
                return (
                  <ul key={charge._id}>
                    <li>{charge.description}</li>
                    <li>Bail: ${charge.bail}</li>
                    <li>Status: {charge.status}</li>
                  </ul>);})
              }
              </li>
            </ul>
          </div>
        </div>
      </section>

    );
  }
  else return null;
};

DetailsModal.propTypes = {
  showDetailsModal: PropTypes.bool.isRequired,
  toggleDetailsModal: PropTypes.func.isRequired
};

export default DetailsModal;

// Add this code wherever you want the modal-opening button to live...
// import { useModal } from '../../hooks/useModal';
// const [show<MODAL_NAME>Modal, toggle[show<MODAL_NAME>Modal] = useModal();
// In the return...
{/* <Modal showModal={show<MODAL_NAME>Modal} toggleModal={toggle<MODAL_NAME>Modal} /> */}
// <button className={styles.modalButton} type='button' onClick={() => toggle<MODAL_NAME>Modal()}> ? </button>

