// ATTEMPT TWO - GITHUB DEPLOYMENT
// Creating map object
var myMap = L.map("map", {
    'center': [34.1413, -32.7308],
    'zoom': 3,
    'layers': [
        L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
        })]
});

//Control Layer
var controlLayers = L.control.layers().addTo(myMap)


//Drop Record Holders
var drops_url = "https://how-we-roll.herokuapp.com/api/records/drop_geo"

$.getJSON(drops_url, function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<h2>'+feature.properties['Roller Coaster']+'</h2><hr><h5>Location: '+feature.properties.City+', '+feature.properties.Country+'</h5><h5>Rank: '+feature.properties.Rank+'</h5><h5>Drop: '+feature.properties.Drop+'</h5>');
      },
      style: function (feature) {
      }
    }).addTo(myMap);
    controlLayers.addOverlay(geojsonLayer, "Drop Record Holders");
});


//Height Record Holders
var heights_url = "https://how-we-roll.herokuapp.com/api/records/height_geo"

$.getJSON(heights_url, function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup('<h2>'+feature.properties['Roller Coaster']+'</h2><hr><h5>Location: '+feature.properties.City+', '+feature.properties.Country+'</h5><h5>Rank: '+feature.properties.Rank+'</h5><h5>Height: '+feature.properties.Height+'</h5>');
          },
        style: function (feature) {
        }
    }).addTo(myMap);
    controlLayers.addOverlay(geojsonLayer, "Height Record Holders");
});


//Length Record Holders
var length_url = "https://how-we-roll.herokuapp.com/api/records/length_geo"

$.getJSON(length_url, function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup('<h2>'+feature.properties['Roller Coaster']+'</h2><hr><h5>Location: '+feature.properties.City+', '+feature.properties.Country+'</h5><h5>Rank: '+feature.properties.Rank+'</h5><h5>Length: '+feature.properties.Length+'</h5>');
          },
        style: function (feature) {
        }
    }).addTo(myMap);
    controlLayers.addOverlay(geojsonLayer, "Length Record Holders");
});


//Speed Record Holders
var speed_url = "https://how-we-roll.herokuapp.com/api/records/speed_geo"

$.getJSON(speed_url, function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup('<h2>'+feature.properties['Roller Coaster']+'</h2><hr><h5>Location: '+feature.properties.City+', '+feature.properties.Country+'</h5><h5>Rank: '+feature.properties.Rank+'</h5><h5>Speed: '+feature.properties.Speed+'</h5>');
          },
        style: function (feature) {
        }
    }).addTo(myMap);
    controlLayers.addOverlay(geojsonLayer, "Seped Record Holders");
});
