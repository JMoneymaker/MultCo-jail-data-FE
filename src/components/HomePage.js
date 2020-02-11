import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import DynamicDataDisplay from './DynamicDataDisplay';
import useAverageDetention from '../hooks/useAverageDetention';

const HomePage = () => {

  return (
    <>
      <Header />
      <SideBar />
      <DynamicDataDisplay hook={useAverageDetention}>Average Detention</DynamicDataDisplay>
      <h1>Hello, World!</h1>

    </>
  );

};

export default HomePage;




