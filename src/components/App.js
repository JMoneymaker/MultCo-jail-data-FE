import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './HomePage';
import PersonsPage from './PersonsPage/PersonsPage';
import DetentionsPage from './DetentionsPage/DetentionsPage';
import DeveloperPage from './DeveloperPage';

export default function App() {
  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route path='/persons' component={PersonsPage} />
      <Route path='/detentions' component={DetentionsPage} />
      <Route path='/developers' component={DeveloperPage} />
    </Router>
  );
}
