import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import styles from './PersonsPage.css';


const PersonsPage = () => {

  return (
    <>
      <Header />
      <SideBar />
      <div className={styles.pageBody} >
        <h1>Persons!</h1>
      </div>
    </>
  );

};

export default PersonsPage;




