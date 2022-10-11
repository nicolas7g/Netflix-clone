import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav'

      //https://netflix-clone-41acc.web.app
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/> 
      <Row 
        title='NETFLIX ORIGINALS' 
        fetchUrl = {requests.fetchNetflixOriginals} 
        isLargeRow//por default es true
        />
      <Row title='Top Rated' fetchUrl = {requests.fetchTopRated} isLargeRow = {false}/>
      <Row title='Trending Now' fetchUrl = {requests.fetchTrending} isLargeRow = {false}/>
    </div>
  );
}

export default App;
