// Creating map object
var myMap = L.map("map", {
    center: [34.1413, -32.7308],
    zoom: 3
});
  
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    minZoom: 2,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

// Use this link to get the geojson data.
var link = "Project2/static/data/worldview.geojson";

function getColor(Density) {
    return Density > 5 ? 'darkblue' :
           Density > 4  ? 'mediumblue' :
           Density > 3  ? 'blue' :
           Density > 2  ? 'dodgerblue' :
           Density > 1  ? 'deepskyblue':
           Density > 0 ? 'skyblue':
                            '#ffffff'; 
}

d3.json(link).then(function(data) {
    L.geoJson(data, {
      style: function(feature) {
        return {
          color: "white",
          fillColor: getColor(feature.properties.Density),
          fillOpacity: 0.5,
          weight: 1
        };
      },
      onEachFeature: function(feature, layer) {
        layer.on({
          mouseover: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 0.9
            });
          },
          mouseout: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 0.5
            });
          },
          click: function(event) {
            myMap.fitBounds(event.target.getBounds());
          }
        });
        // Giving each feature a pop-up with information pertinent to it
        layer.bindPopup("<h1>" + feature.properties.ADMIN + "</h1> <hr> <h3> Number of Roller Coasters: " + feature.properties['Roller Coasters'] + "</h3><h3> Percent of World's Roller Coasters: " + feature.properties['%'] + "</h3><h3> Roller Coaster Density: " + feature.properties['Density'] + "</h3" );
  
      }
    }).addTo(myMap);
  });