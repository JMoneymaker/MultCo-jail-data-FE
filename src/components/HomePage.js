import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import DynamicDataDisplay from './DynamicDataDisplay';
import useAverageDetention from '../hooks/useAverageDetention';
import useDetentionsYearToDate from '../hooks/useDetentionsYearToDate';
import useTotalCurrentDetentions from '../hooks/useTotalCurrentDetentions';

const HomePage = () => {

  return (
    <>
      <Header />
      <SideBar />
      <DynamicDataDisplay hook={useAverageDetention}>Average Length of Stay</DynamicDataDisplay>
      <DynamicDataDisplay hook={useDetentionsYearToDate}>Total 2020</DynamicDataDisplay>
      <DynamicDataDisplay hook={useTotalCurrentDetentions}>Current Stays</DynamicDataDisplay>


      <h1>Hello, World!</h1>

    </>
  );

};

export default HomePage;




