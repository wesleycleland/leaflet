/**
 * Created by wtcleland on 7/13/17.
 */



// var imagery = {
//   "Esri_WorldImagery": Esri_WorldImagery,
//   "Esri_Reference": Esri_Reference
// }

var imagerylabels = L.layerGroup([L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {}),
              L.tileLayer('http://server.arcgisonline.com/arcgis/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {minZoom:9}),
              L.tileLayer('http://server.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
              attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
})]);

var street = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

var delorme = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme',
	minZoom: 1,
	maxZoom: 11
});

var worldtopomap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var natgeoworldmap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
});

map.addLayer(street);

var basemap = {
  "Imagery": imagerylabels,
  "Streets": street,
  "Delorme": delorme,
  "World Topo Map": worldtopomap,
  "National Geographic Map": natgeoworldmap
}

//Basemap Control
// controlLayer = L.control.layers(basemap,null,{collapsed:false}).addTo(map);
// controlLayer._container.remove();
// document.getElementById('basemaps').appendChild(controlLayer.onAdd(map));


// Leaflet IconLayers Plugin
var iconLayersControl = new L.Control.IconLayers(
    [
        {
            title: 'Imagery', // use any string
            layer: imagerylabels, // any ILayer
            icon: 'css/images/basemap_imagery.jpg' // 80x80 icon
        },
        {
            title: 'Streets',
            layer: street,
            icon: 'css/images/basemap_streets.jpg'
        },
        {
            title: 'Delorme', // use any string
            layer: delorme, // any ILayer
            icon: 'css/images/basemap_delorme.jpg' // 80x80 icon
        },
        {
            title: 'World Topo Map',
            layer: worldtopomap,
            icon: 'css/images/basemap_topographic.jpg'
        },
        {
            title: 'National Geographic Map',
            layer: natgeoworldmap,
            icon: 'css/images/basemap_natgeo.jpg'
        }
      ],{
            position: 'bottomleft',
            maxLayersInRow: 3
        }
    );

iconLayersControl.addTo(map);

// we can modify layers list
iconLayersControl.setLayers(layers);

iconLayersControl.on('activelayerchange', function(e) {
    console.log('layer switched', e.layer);
});
