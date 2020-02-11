import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import DynamicDataDisplay from './DynamicDataDisplay';
import useAverageDetention from '../hooks/useAverageDetention';
import styles from './HomePage.css';
import './reset.css';
import useDetentionsYearToDate from '../hooks/useDetentionsYearToDate';
import useTotalCurrentDetentions from '../hooks/useTotalCurrentDetentions';
import Charts from './charts/ChartContainer';

const HomePage = () => {

  return (
    <>
      <container className={styles.pageContainer} >

        <div className={styles.Header}>
          <Header />
        </div>


        <div className={styles.sideBar}>
          <SideBar />
        </div>

        <section className={styles.bodyContainer}>
          <div className={styles.dynamicDataDisplay}>
            <DynamicDataDisplay hook={useAverageDetention}>Average Length of Stay</DynamicDataDisplay>
            {/* <DynamicDataDisplay hook={useDetentionsYearToDate}>Total 2020</DynamicDataDisplay>
            <DynamicDataDisplay hook={useTotalCurrentDetentions}>Current Stays</DynamicDataDisplay> */}
          </div>

          <Charts />
        </section>

      </container>;
    </>
  );

};

export default HomePage;




