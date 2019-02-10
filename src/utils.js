/* Helper functions for app */

// This function helps load Google Maps more easily into components.
// The function returns a promise, and the Maps JavaScript API
// is loaded asynchronously. The promise is resolved when the Maps API finishes
// loading and the callback function is deleted since it is no longer needed.
// Credit: Ryan Waite, FEND Webinar
// https://github.com/ryanwaite28/script-store/blob/master/js/react_resolve_google_maps.js

export function loadMap() {
    return new Promise(function(resolve, reject) {
        // global (window) callback function which resolves promise when the google object loads
        window.resolveMapsPromise = function() {

            resolve(window.google);

            delete window.resolveMapsPromise;
        }

        const script = document.createElement('script');
        const API_KEY = 'AIzaSyC8vDwnM3yUOP2GRv4kwFQg6We60BRrDN0';
        
        //Load Maps API
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=resolveMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
    })
}

// This function gets places data using the Foursquare API
// https://developer.foursquare.com/docs

export function loadPlaces() {
    const CLIENT_ID = '0OM1NOQ1YQMD3HBYBJT3MPFOZSB0XJYAWR3QEVI4NZF4SZOJ',
          CLIENT_SECRET = '1Y0XUO1GBRCCAZMOKAWNDSSTWRDV0FDAWYMSH3MAD5FNNGLM';  
    let ll = '45.5122,-122.6587',
        query = 'bar';
    
    let fsAPI = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&limit=50&query=${query}&ll=${ll}&radius=50000&intent=browse&v=20190122`;

    return fetch(fsAPI).then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            return Promise.reject("Foursquare data unable to load");
        }
    }).catch(error => console.log("Error: ", error));
}