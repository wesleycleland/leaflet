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

        //Draw feature
        drawnItems = L.featureGroup().addTo(map);
        map.addLayer(drawnItems);

        var drawControl = new L.Control.Draw({
            edit: {
                    featureGroup: drawnItems,
        poly : {
            allowIntersection : false
                    }
                },
            draw: {
                    polygon: {
        allowIntersection: true,
        showArea: false,
        shapeOptions: {
            color: '#f357a1',
            weight: 7
        }
                    },
                    polyline: {
        allowIntersection: true,
        shapeOptions: {
            color: '#f357a1',
            weight: 7
        },
        metric: false
                    },
                    rectangle: {
        allowIntersection: true,
        showRadius: false,
        shapeOptions: {
            color: '#f357a1',
            weight: 7
        }
                    },
                    marker: {
        allowIntersection: true,
        shapeOptions: {
            color: '#f357a1',
            weight: 7
        }
                    },
		circlemarker: false
                }
        }).addTo(map);

        //Need to discuss whether we leave pop ups with measurements or not
        // Truncate value based on number of decimals
        var _round = function (num, len) {
            return Math.round(num * (Math.pow(10, len))) / (Math.pow(10, len));
        };
        // Helper method to format LatLng object (x.xxxxxx, y.yyyyyy)
        var strLatLng = function (latlng) {
            return "(" + _round(latlng.lat, 6) + ", " + _round(latlng.lng, 6) + ")";
        };
        // Generate popup content based on layer type
        // - Returns HTML string, or null if unknown object
        var getPopupContent = function (layer) {
            // Marker - add lat/long
            if (layer instanceof L.Marker) {
                return strLatLng(layer.getLatLng());
                // Circle - lat/long, radius
            } else if (layer instanceof L.Circle) {
                var center = layer.getLatLng(),
                    radius = layer.getRadius();
                return "Center: " + strLatLng(center) + "<br />"
                    + "Radius: " + _round(radius, 2) + " m";
                // Rectangle/Polygon - area
            } else if (layer instanceof L.Polygon) {
                var latlngs = layer._defaultShape ? layer._defaultShape() : layer.getLatLngs(),
                    area = L.GeometryUtil.geodesicArea(latlngs);
                return "Area: " + L.GeometryUtil.readableArea(area, true);
                // Polyline - distance
            } else if (layer instanceof L.Polyline) {
                var latlngs = layer._defaultShape ? layer._defaultShape() : layer.getLatLngs(),
                    distance = 0;
                if (latlngs.length < 2) {
                    return "Distance: N/A";
                } else {
                    for (var i = 0; i < latlngs.length - 1; i++) {
        distance += latlngs[i].distanceTo(latlngs[i + 1]);
                    }
                    return "Distance: " + _round(distance, 2) + " m";
                }
            }
            return null;
        };

         // Object created - bind popup to layer, add to feature group
        map.on(L.Draw.Event.CREATED, function (event) {
               var layer = event.layer;
               var content = getPopupContent(layer);
               if (content !== null) {
                   layer.bindPopup(content);
               }
               drawnItems.addLayer(layer);
           });

        // Object(s) edited - update popups
        map.on(L.Draw.Event.EDITED, function (event) {
               var layers = event.layers,
                   content = null;
               layers.eachLayer(function (layer) {
                   content = getPopupContent(layer);
                   if (content !== null) {
                       layer.setPopupContent(content);
                   }
               });
           });

        // on click, clear all layers
        document.getElementById('delete').onclick = function(e) {
            featureGroup.clearLayers();
        }

        document.getElementById('export').onclick = function(e) {
            // Extract GeoJson from featureGroup
            var data = featureGroup.toGeoJSON();

            // Stringify the GeoJson
            var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));

            // Create export
            document.getElementById('export').setAttribute('href', 'data:' + convertedData);
            document.getElementById('export').setAttribute('download','data.geojson');
        }
