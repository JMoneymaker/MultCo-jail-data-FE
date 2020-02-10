import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  // Switch
} from 'react-router-dom';
import HomePage from '../components/HomePage';
import PersonsPage from '../components/PersonsPage';
import DetentionsPage from '../components/DetentionsPage';
import DeveloperPage from '../components/DeveloperPage';

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
  



