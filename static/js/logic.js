// Store our API endpoint as queryUrl
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL.
d3.json(queryUrl).then(function(data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {

        // Define a function that we want to run once each feature in the feature array.
        // Give each feature a popup that describes the magnitude and depth of the earthquake.
        function onEachFeature(feature, layer) {
           let magnitude = feature.properties.mag;
           let depth = feature.geometry.coordinates[2];           
           layer.bindPopup(`<h3>Magnitude: ${magnitude}</h3><hr><p>Depth: ${depth} km</p>`);
        }
}