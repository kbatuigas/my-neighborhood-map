import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { loadMap, loadPlaces } from './utils';

class App extends Component {
 componentDidMount() {
   //preps data even before map is displayed
   //will be easier to access / interact with data as properties
   let mapsPromise = loadMap();
   let placesPromise = loadPlaces();

   Promise.all([
     mapsPromise,
     placesPromise
   ]).then(values => {
     console.log(values);
     let google = values[0];
     let places = values[1].response.venues;
     
     this.google = google; 
     this.map = new google.maps.Map(document.getElementById('map'), {
       zoom: 13,
       center: { lat: 45.5122, lng: -122.6587 }
     });
     
     this.markers = [];
     places.forEach(venue => {
       let marker = new google.maps.Marker({
         position: { lat: venue.location.lat, lng: venue.location.lng },
         map: this.map,
         id: venue.id,
         name: venue.name,
         animation: google.maps.Animation.DROP

       });
     })


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
