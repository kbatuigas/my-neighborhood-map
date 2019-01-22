import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { loadMap } from './utils';

class App extends Component {
 componentDidMount() {
   //will be easier to access / interact with data as properties
   let mapsPromise = loadMap();

   Promise.all([
     mapsPromise
   ]).then(values => {
     let google = values[0];
     
     this.google = google; 
     this.map = new google.maps.Map(document.getElementById('map'), {
       zoom: 13,
       center: { lat: 45.5122, lng: -122.6587 }
     });

   });
 }


  render() {
    return (
      <div id="map">
      </div>
    );
  }
}

export default App;
