import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import styles from './HomePage.css';
import Charts from './charts/ChartContainer';

const HomePage = () => {

  return (
    <>
      <Header />
      <SideBar />
      <section className={styles.bodyContainer}>
        <Charts />
      </section>

    </>
  );

};

export default HomePage;




