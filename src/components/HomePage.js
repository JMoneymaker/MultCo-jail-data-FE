import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import DynamicDataDisplay from './DynamicDataDisplay';
import useAverageDetention from '../hooks/useAverageDetention';
import styles from './HomePage.css';

const HomePage = () => {

  return (
    <container className={styles.pageContainer} >

      <div className={styles.Header}>
        <Header />
      </div>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <section className={styles.bodyContainer}>

        <div className={styles.dynamicDataDisplay}>
          <DynamicDataDisplay hook={useAverageDetention}>Average Detention</DynamicDataDisplay>
        </div>

        <h1>Hello, World!</h1>
      </section>
    </container>
  );

};

export default HomePage;




