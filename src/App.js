import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, MovieDetails, MovieList } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex flex-row">
        <MovieList />
        <MovieDetails />
      </div>


    </div>
  );
}

export default App;
