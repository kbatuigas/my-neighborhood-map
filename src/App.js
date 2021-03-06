import React, { Component } from 'react';
import './App.css';

import { loadMap, loadPlaces } from './utils';

import FilterWindow from './components/FilterWindow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    // Bind the function properly to give it the correct context!
    // Otherwise places remains undefined in the callback!
    this.filterPlaces = this.filterPlaces.bind(this);

    this.placeListClick = this.placeListClick.bind(this);
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
      let google = values[0];
      this.places = values[1].response.venues; //this allows data to be accessed as component property
     
      this.google = google; 
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 45.5122, lng: -122.6587 }
      });
     
      this.setState({ placeList: this.places }); // List of places includes all, by default

      //Add marker on map for each place
      this.markers = [];

      this.places.forEach(place => {
        let marker = new google.maps.Marker({
          position: { lat: place.location.lat, lng: place.location.lng },
          map: this.map,
          id: place.id,
          name: place.name,
          animation: google.maps.Animation.DROP

        });


        this.markers.push(marker);
        
        
        let placeInfo = 
          '<div class="infowindow-name">' + place.name + '</div>' + 
          '<div class="infowindow-address"><p>' + place.location.address +'<br />' +
            place.location.city + ', ' + place.location.state + ' ' + place.location.postalCode + '</div>';
        
        google.maps.event.addListener(marker, 'click', () => {
          this.infowindow.setContent(placeInfo);
          this.map.setCenter(marker.position);
          this.infowindow.open(this.map, marker);

        })

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

      this.infowindow = new google.maps.InfoWindow(); 

    })
    .catch(error => {
      console.log(error);
      alert('Error loading page. Pleae try again later.');
});


  }

  componentDidCatch(error, info) {
    console.log(error);
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

    this.setState({placeList: p, query }); // List of places filtered 
  }

  placeListClick(place) {
    let clickedPlace = this.markers.filter(m => m.id === place.id)[0];
    
    this.infowindow.setContent(
      '<div class="infowindow-name">' + place.name + '</div>' + 
          '<div class="infowindow-address"><p>' + place.location.address +'<br />' +
            place.location.city + ', ' + place.location.state + ' ' + place.location.postalCode + '</div>'
    );
    this.map.setCenter(clickedPlace.position);
    this.infowindow.open(this.map, clickedPlace);

    if (clickedPlace.getAnimation() !== null) {
      clickedPlace.setAnimation(null);
    } else {
      clickedPlace.setAnimation(this.google.maps.Animation.BOUNCE);
    }
    setTimeout(() => {
      clickedPlace.setAnimation(null)
    }, 1000);

  }


  render() {
    return (
        <div className="App" >
          <header className="App-header">
            <h1 className="App-title">Bars in Portland, OR</h1>
          </header>
          <div className="container" >
            <FilterWindow 
              filterplaces={this.filterPlaces}
              placelist={this.state.placeList}
              placelistclick={this.placeListClick}
            />
            <main id="map" role="application" />
          </div>
        </div>
    );
  }
}

export default App;
