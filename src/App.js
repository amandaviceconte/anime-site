import React from 'react';
import './App.css';
import Anime from './Anime/Anime';
import animeJSON from './data/anime.json';
import { BrowseRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Anime anime={animeJSON.animes[0]}/>
    </div>
  );
}

export default App;
