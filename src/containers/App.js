import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/directors">Directors</Link>
        <Link to="/actors">Actors</Link>
      </NavBar>
    </Router>
  );
};

export default App
