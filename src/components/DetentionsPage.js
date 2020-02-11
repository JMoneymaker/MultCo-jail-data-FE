import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import styles from './SideBar.css';


const DetentionsPage = () => {

  return (
    <>
      <Header />
      
      <div className={styles.SideBar}>
        <SideBar />
      </div>
      <h1>Detentions!</h1>
    </>
  );

};

export default DetentionsPage;




