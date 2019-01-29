import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';

import { loadMap, loadPlaces } from './utils';

import FilterWindow from './components/FilterWindow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  componentDidMount() {
    //preps data even before map is displayed
    //will be easier to access / interact with data as properties
    let mapsPromise = loadMap();
    let placesPromise = loadPlaces();

    Promise.all([
      mapsPromise,
      placesPromise
    ]).then(values => {
      //console.log(values);
      let google = values[0];
      this.places = values[1].response.venues; //this allows data to be accessed as component property
     
      this.google = google; 
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 45.5122, lng: -122.6587 }
      });
     
     //Add marker on map for each place
      this.markers = [];
      this.places.forEach(venue => {
        let marker = new google.maps.Marker({
          position: { lat: venue.location.lat, lng: venue.location.lng },
          map: this.map,
          id: venue.id,
          name: venue.name,
          animation: google.maps.Animation.DROP

        });
        this.markers.push(marker);
        
        
        marker.addListener('click', () => {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
          setTimeout(() => {
            marker.setAnimation(null)
          }, 1000);
        }); 
      });
      this.setState({ placeList: this.places }); // List of places includes all, by default

      this.infowindow = new google.maps.InfoWindow(); 

    });
  }

  // FilterWindow component passes data (query) up to App, which
  // can then be used as filter criteria for both the map as well 
  // as the sidebar. This function shows/hides marker based on
  // whether the place name matches the search term
  filterPlaces(query) {
    let p = this.places.filter(place => place.name.toLowerCase().includes(
      query.toLowerCase()
    ));
    this.markers.forEach(marker => {
      if (marker.name.toLowerCase().includes(
        query.toLowerCase()
      )) {
        marker.setVisible(true);
      } else {
        marker.setVisible(false);
      }
    })

    this.setState({placeList: p }); // List of places filtered
  }


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Bars in Portland, OR</h1>
        </header>
        <div className="container">
          <FilterWindow 
            filterPlaces={this.filterPlaces}
            placeList={this.placeList}
          />
          <div id="map">
        </div>
      </div>
        
        
      </div>
    );
  }
}

export default App;
