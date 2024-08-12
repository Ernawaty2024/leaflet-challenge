// Store our API endpoint as queryUrl
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL.
d3.json(queryUrl).then(function(data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
});

// Function to determine the color based on depth
function getColor(depth) {
    return depth > 90 ? 'LightCoral' :
           depth > 70 ? '#FFA07A' :
           depth > 50 ? '#DAA520' :
           depth > 30 ? '#F0E68C' :
           depth > 10 ? 'LawnGreen' :
           depth > -10 ? 'LimeGreen' :
                         '#6495ED';
}

// Initialize the map and set its view
let myMap = L.map("map", {
    center: [40.758701, -111.876183], // Centering the map on the USA
    zoom: 5
});

// Add a tile layer (basemap) to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

function createFeatures(earthquakeData) {
    // Arrays to hold the created earthquake markers
    let earthquakeMarkers = [];
    
    // Loop through the earthquakeData, and create the magnitude and depth markers.
    earthquakeData.forEach(function(feature) {
        let longitude = feature.geometry.coordinates[0];
        let latitude = feature.geometry.coordinates[1];
        let depth = feature.geometry.coordinates[2];
        let magnitude = feature.properties.mag;

        // Create a circle marker with color based on depth
        earthquakeMarkers.push(
            L.circle([latitude, longitude], {
                stroke : true,
                color: "black",
                weight: 4,
                fillOpacity: 0.5,
                fillColor: getColor(depth),
                radius: magnitude * 10000
            }).bindPopup(`<h3>Magnitude: ${magnitude}</h3><hr><p>Depth: ${depth} km</p>`)
        );
    });

    // Create a layer group for earthquake markers
    let earthquakeLayer = L.layerGroup(earthquakeMarkers);
    earthquakeLayer.addTo(myMap);
}



       
        


