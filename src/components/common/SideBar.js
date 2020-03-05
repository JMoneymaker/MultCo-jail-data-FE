import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.css';


const SideBar = () => {

  return (
    <div className={styles.SideBar}>
      <section className={styles.navContainer} >
        <NavLink exact className={styles.home} activeClassName={styles.active} to='/'>Home</NavLink>
        <NavLink className={styles.detentions} activeClassName={styles.active} to='/detentions'>Detentions</NavLink>
        <NavLink className={styles.persons} activeClassName={styles.active} to='/persons'>Persons</NavLink>
        <NavLink className={styles.developers} activeClassName={styles.active} to='/developers'>Developers</NavLink>
      </section>
    </div>
  );

};

export default SideBar;
