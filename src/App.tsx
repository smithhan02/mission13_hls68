import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Home';
import MovieList from './Movies';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <MovieList />
    </div>
  );
}

export default App;
