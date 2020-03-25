import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBarComponent/NavBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

      </Router>
    </div>
  );
}

export default App;
