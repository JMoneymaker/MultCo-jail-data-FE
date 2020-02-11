import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const SideBar = () => {

  return (
    <section>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/detentions'>Detentions</NavLink>
      <NavLink to='/persons'>Persons</NavLink>
      <NavLink to='/developers'>Developers</NavLink>
    </section>
  );

};


export default SideBar;




