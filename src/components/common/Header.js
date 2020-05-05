import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Header.css';
import DynamicDataDisplay from '../HomePage/DynamicDataDisplay';
import useAverageDetention from '../../hooks/useAverageDetention';


const Header = () => {

  return (
    <section className={styles.Header}>
      <h2>Daily Portland Jail Data</h2>
      <div>
        <DynamicDataDisplay hook={useAverageDetention}>Average Length of Stay</DynamicDataDisplay>
      </div>
    </section>
  );

};

export default Header;
