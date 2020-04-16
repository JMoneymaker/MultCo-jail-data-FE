import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
// import PersonsPage from './PersonsPage/PersonsPage';
// import DetentionsPage from './DetentionsPage/DetentionsPage';
// import DeveloperPage from './DeveloperPage/DeveloperPage';
import Header from './common/Header';
// import SideBar from './common/SideBar';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/persons' component={PersonsPage} />
        <Route path='/detentions' component={DetentionsPage} />
        <Route path='/developers' component={DeveloperPage} /> */}
      </Router>
    </>
  );
}
