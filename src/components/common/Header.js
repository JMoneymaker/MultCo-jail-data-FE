import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Header.css';
import DynamicDataDisplay from '../DynamicDataDisplay';
import useAverageDetention from '../../hooks/useAverageDetention';


const Header = () => {

  return (
    <section className={styles.Header}>
      <h1>MultCo Jail Data</h1>
      <div>
        <DynamicDataDisplay hook={useAverageDetention}>Average Length of Stay</DynamicDataDisplay>
      </div>
    </section>
  );

};

export default Header;
