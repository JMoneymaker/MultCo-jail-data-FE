import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sidebar.css';


const SideBar = () => {

  return (
    <section className={styles.navContainer} >
      <NavLink className={styles.home} to='/'>Home</NavLink>
      <NavLink className={styles.detentions} to='/detentions'>Detentions</NavLink>
      <NavLink className={styles.persons} to='/persons'>Persons</NavLink>
      <NavLink className={styles.developers} to='/developers'>Developers</NavLink>
    </section>
  );

};


export default SideBar;




