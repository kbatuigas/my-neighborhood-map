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