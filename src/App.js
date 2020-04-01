import React from 'react';
import './App.css';
import Nav from './components/NavBarComponent/NavBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GifComponent from './components/Gifs/GifComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={GifComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
