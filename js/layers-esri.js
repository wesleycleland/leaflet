/**
 * Created by wtcleland on 7/13/17.
 */

// These are the layers portrayed on the map
buildings = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [0],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
buildings.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

archery = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [1],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
archery.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

facilities = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [2],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
facilities.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

fmp = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [3],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
fmp.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

ppf = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [4],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
ppf.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

publicaccess = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [5],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
publicaccess.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

plf = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [6],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
plf.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

wcf = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [7],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
wcf.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

onf = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [12],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
onf.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

wmas = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [8],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
wmas.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

usfs = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [9],
    useCors: false,
    opacity: .6,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
usfs.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["WMA"];
          }
});

fmf = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [10],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
fmf.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

wmamf = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [11],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
wmamf.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

inholdings = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [13],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
inholdings.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

bathymetry = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [14],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});

communityfishing = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [15],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
communityfishing.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

waterbodies = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [16],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
waterbodies.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

floodprone = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/',
    layers: [17],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
floodprone.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

nwr = L.esri.dynamicMapLayer({
    url: 'https://gis.fws.gov/arcgis/rest/services/FWS_Refuge_Boundaries/MapServer/',
    layers: [2],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
nwr.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["Name"];
          }
});

deer = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/Zones/MapServer/',
    layers: [1],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

elk = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/Zones/MapServer/',
    layers: [2],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

turkey = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/Zones/MapServer/',
    layers: [3],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

bear = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/Zones/MapServer/',
    layers: [4],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

alligator = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/Zones/MapServer/',
    layers: [5],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

crappie = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/Zones/MapServer/',
    layers: [6],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

turtle = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/Zones/MapServer/',
    layers: [7],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

bass = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/Zones/MapServer/',
    layers: [8],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

goose = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/Zones/MapServer/',
    layers: [9],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

cwd = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/GIS/Zones/MapServer/',
    layers: [10],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

deerkill = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/Telecheck/MapServer/',
    layers: [1],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

doekill = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/Telecheck/MapServer/',
    layers: [2],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

antleredkill = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/Telecheck/MapServer/',
    layers: [3],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

buttonkill = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/Telecheck/MapServer/',
    layers: [4],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

turkeykill = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/Telecheck/MapServer/',
    layers: [6],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

maleturkey = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/Telecheck/MapServer/',
    layers: [7],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

femaleturkey = L.esri.dynamicMapLayer({
    url: 'https://gis.agfc.com/arcgis/rest/services/Telecheck/MapServer/',
    layers: [8],
    useCors: false,
    opacity: .8,
    maxZoom: 18,
    minZoom: 7
});

parcels = L.esri.dynamicMapLayer({
    url: 'https://gis.arkansas.gov/arcgis/rest/services/FEATURESERVICES/Planning_Cadastre/MapServer/',
    layers: [0,6,10],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});
//Esri Identify Feature
parcels.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false;
            } else {
      return ' Name: ' + featureCollection.features[0].properties["parcel_id"];
          }
});

watermilemarker = L.esri.dynamicMapLayer({
    url: 'https://rsc-agisu.usace.army.mil/s1arcgis/rest/services/National_Admin/USACE_River_Mile_Markers/MapServer',
    layers:[0],
    useCors: false,
    maxZoom: 18,
    minZoom: 7
});

map.addLayer(buildings);
map.addLayer(archery);
map.addLayer(facilities);
map.addLayer(fmp);
map.addLayer(ppf);
map.addLayer(publicaccess);
map.addLayer(plf);
map.addLayer(wcf);
map.addLayer(inholdings);
map.addLayer(onf);
map.addLayer(wmas);
map.addLayer(usfs);
map.addLayer(fmf);
map.addLayer(wmamf);
map.addLayer(communityfishing);
map.addLayer(waterbodies);
// map.addLayer(nwr);

//Do not add layer with map.addLayer() to turn layer off by default

    //This allows the user to turn on and off layers
$( "input" ).click(function( event ) {
        var layerClicked = window[event.target.value];

            if (map.hasLayer(layerClicked)) {
map.removeLayer(layerClicked);
            }
            else{
map.addLayer(layerClicked);
            };
});
