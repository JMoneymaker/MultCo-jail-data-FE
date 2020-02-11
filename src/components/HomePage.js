import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import DynamicDataDisplay from './DynamicDataDisplay';
import useAverageDetention from '../hooks/useAverageDetention';
import styles from './HomePage.css';
import Charts from './charts/ChartContainer';

const HomePage = () => {

  return (
    <>
      <Header />
      <SideBar />
      <section className={styles.bodyContainer}>
        <DynamicDataDisplay hook={useAverageDetention}>Average Length of Stay</DynamicDataDisplay>
        {/* <DynamicDataDisplay hook={useDetentionsYearToDate}>Total 2020</DynamicDataDisplay>
            <DynamicDataDisplay hook={useTotalCurrentDetentions}>Current Stays</DynamicDataDisplay> */}
        <h1>Hello, World! Greetings From the Home Page!</h1>
        <Charts />
      </section>

    </>
  );

};

export default HomePage;




