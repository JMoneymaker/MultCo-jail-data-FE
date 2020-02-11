import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import DynamicDataDisplay from './DynamicDataDisplay';
import useAverageDetention from '../hooks/useAverageDetention';
import styles from './HomePage.css';
import stylesSidebar from './SideBar.css';
import './reset.css';
import useDetentionsYearToDate from '../hooks/useDetentionsYearToDate';
import useTotalCurrentDetentions from '../hooks/useTotalCurrentDetentions';
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
        <h1>Hello, World!</h1>
        <Charts />
      </section>

    </>
  );

};

export default HomePage;




