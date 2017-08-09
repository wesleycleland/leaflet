/**
 * Created by wtcleland on 7/13/17.
 */
//These are the leaflet tools

// Spinning Circle For Map Loading
map.spin(false);

//This is the GPS feature that has the blue dot that follows you
var newStyle = {
    color: '#5b97f9',
    fill: "#5b97f9",
    opacity:0.5};
// map.addControl( new L.Control.Gps({autoActive: false, style: newStyle}) );
var gpsControl = new L.Control.Gps({autoActive: false, style: newStyle}).addTo(map);
gpsControl._container.remove();
document.getElementById('gpsTool').appendChild(gpsControl.onAdd(map));

//Add Coordinates
L.control.mouseCoordinate({utm: true, gps: false, gpsLong: false, position: 'bottomleft'}).addTo(map);

//Add Scalebar
L.control.scale({position: 'bottomright'}).addTo(map);

//Add Home Button
var zoomHome = L.Control.zoomHome();
zoomHome.addTo(map);

//Right Click and Acquire Coordinates
map.on("contextmenu", function (event) {
    console.log("Coordinates: " + event.latlng.toString());
    (confirm("Latitude: " + event.latlng.lat.toString() + "   " + "Longitude: " + event.latlng.lng.toString()));
});

//Leaflet Geocoder
var searchAddress = new L.Control.geocoder({
    position: 'topleft',
    collapsed: true,
});
searchAddress.addTo(map);

// Add KML/GPX File To map
var L = window.L;
var style = {
    color: 'red',
    opacity: .75,
    fillOpacity: .5,
    weight: 1,
    clickable: false
};
L.Control.FileLayerLoad.LABEL = '<img height="18px" width="18px" class="icon" src="./css/images/folder.svg" alt="file icon"/>';
L.Control.fileLayerLoad({
    fitBounds: true,
    layerOptions: {
        style: style,
        pointToLayer: function (data, latlng) {
            return L.circleMarker(
            latlng,
            { style: style }
            );
        }
    }
}).addTo(map);


//This is the measurement feature
var measureControl = L.control.measure(
    {
        primaryLengthUnit: 'feet',
        secondaryLengthUnit: 'miles',
        primaryAreaUnit: 'acres',
        secondaryAreaUnit: 'sqmiles',
        activeColor: '#ABE67E',
        completedColor: '#C8F2BE'
    });
measureControl.addTo(map);

// Draw Widget
// FeatureGroup is to store editable layers
     var drawnItems = new L.FeatureGroup();
     map.addLayer(drawnItems);
     var drawControl = new L.Control.Draw({
         edit: {
             featureGroup: drawnItems
         }
     });
     map.addControl(drawControl);