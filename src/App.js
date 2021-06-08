import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
import './App.css';
const App = () => {
  return (
    <div className="app-wrapper">
      <Router history={History}>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
