/**
 * Created by wtcleland on 7/13/17.
 */
//These are the leaflet tools
//This is the GPS feature that has the blue dot that follows you
var newStyle = {
    color: '#5b97f9',
    fill: "#5b97f9",
    opacity:0.5};
// map.addControl( new L.Control.Gps({autoActive: false, style: newStyle}) );
var gpsControl = new L.Control.Gps({autoActive: false, style: newStyle}).addTo(map);
gpsControl._container.remove();
document.getElementById('gpsTool').appendChild(gpsControl.onAdd(map));


//This is the Bookmark feature
var bookmarkControl = new L.Control.Bookmarks().addTo(map);
bookmarkControl._container.remove();
document.getElementById('bookmarkTool').appendChild(bookmarkControl.onAdd(map));


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
            circle: false
        }
}).addTo(map);
drawControl._container.remove();
document.getElementById('drawTools').appendChild(drawControl.onAdd(map));

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
measureControl._container.remove();
document.getElementById('measureTools').appendChild(measureControl.onAdd(map));


//Esri Search Feature
var agisoGeocoder = L.esri.Geocoding.geocodeServiceProvider({
    url: 'https://www.geostor.arkansas.gov/ArcGIS/rest/services/Locator/GEOSTOR_COMPOSITE/GeocodeServer',
    label: 'AGISO Geocoding Service'
 });

var agfcDataSearch = L.esri.Geocoding.mapServiceProvider({
     url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer',
     label: 'AGFC Data',
     layers: [8, 16],
     searchFields: ['Name', 'Associated WMA']
});

var census = L.esri.Geocoding.mapServiceProvider({
    url: 'https://gis.agfc.com/arcgis/rest/services/agfc/MapServer',
    label: 'States and Counties',
    layers: [10],
    searchFields: ['Name']
});

var searchControl = L.esri.Geocoding.geosearch({
    placeholder: 'Search The Data',
    zoomToResult: true,
    allowMultipleResults: true,
    providers: [
        agisoGeocoder,
        agfcDataSearch,
        census
    ]
});
searchControl.addTo(map);
// searchControl._container.remove();
// document.getElementById('agfcdata').appendChild(searchControl.onAdd(map));

var results = L.layerGroup().addTo(map);

searchControl.on('results', function(data){
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
    results.addLayer(L.marker(data.results[i].latlng));
    }
});

//Leaflet Geocoder
var searchAddress = new L.Control.geocoder({
    collapsed: false,
});
searchAddress.addTo(map);
searchAddress._container.remove();
document.getElementById('geocoder').appendChild(searchAddress.onAdd(map));


//NOAA Radar
var wmsUrl = "https://new.nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer"
var radarWMS = L.nonTiledLayer.wms(wmsUrl, {
    layers: '1',
    format: 'image/png',
    transparent: true,
    opacity: 0.8,
    attribution: 'nowCOAST'
});

var TimeLayer = L.timeDimension.layer.wms(radarWMS, {
    updateTimeDimension: true,

});

var weatherControl = new L.Control.TimeDimension({
    timeDimensionControlOptions:{
        autoPlay: false,
        currentTime: currentTime.getTime(),
        playerOptions: {
            buffer: 10,
            transitionTime: 250,
            loop: true,
    }
  }
});
weatherControl.addTo(map);
weatherControl._container.remove();
document.getElementById('weatherController').appendChild(weatherControl.onAdd(map));

var theLegend = L.control({
    position: 'topright'
});

theLegend.onAdd = function(map) {
    var src = "https://new.nowcoast.noaa.gov/images/legends/radar.png";
    var div = L.DomUtil.create('div', 'info legend');
    div.style.width = '270px';
    div.style.height = '50px';
    div.innerHTML += '<b>Legend</b><br><img src="' + src + '" alt="legend">';
    return div;
};
theLegend.addTo(map);

theLegend._container.remove();
document.getElementById('NOAA').appendChild(theLegend.onAdd(map));

//Esri Legend
wmas.legend(function(error, legend){
    if(!error) {
        var html = '';
        for(var i = 0, len = legend.layers.length; i < len; i++) {
            html += '<br /><strong>' + legend.layers[i].layerName + '</strong><br />';
            for(var j = 0, jj = legend.layers[i].legend.length; j < jj; j++){
html += L.Util.template('<img width="{width}" height="{height}" src="data:{contentType};base64,{imageData}"><span>{label}</span><br />', legend.layers[i].legend[j]);
            }
            html += '';
        }
        html+='';
        document.getElementById('legend').innerHTML = html;
    }
});
