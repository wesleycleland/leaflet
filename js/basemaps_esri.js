/**
 * Created by wtcleland on 7/13/17.
 */


var imagerylabels = L.layerGroup([L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {}),
              L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {minZoom:9}),
              L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
              attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
})]);

var street = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

var delorme = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme',
	minZoom: 1,
	maxZoom: 11
});

var worldtopomap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var natgeoworldmap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
});

var shadedrelief = L.layerGroup([L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {}),
    L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {minZoom:9}),
    L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
})]);

map.addLayer(street);


// Default Basemap Control
// controlLayer = L.control.layers(basemap,null,{collapsed:false}).addTo(map);
// controlLayer._container.remove();
// document.getElementById('basemaps').appendChild(controlLayer.onAdd(map));


var providers = {};

providers['Imagery'] = {
            title: 'Imagery', // use any string
            layer: imagerylabels, // any ILayer
            icon: 'css/images/basemap_imagery.jpg' // 80x80 icon
};

providers['Streets'] = {
            title: 'Streets',
            layer: street,
            icon: 'css/images/basemap_streets.jpg'
};

providers['Delorme'] = {
            title: 'Delorme', // use any string
            layer: delorme, // any ILayer
            icon: 'css/images/basemap_delorme.jpg' // 80x80 icon
};

providers['World Topo Map'] = {
            title: 'World Topo Map',
            layer: worldtopomap,
            icon: 'css/images/basemap_topographic.jpg'
};

providers['National Geographic Map'] = {
            title: 'National Geographic Map',
            layer: natgeoworldmap,
            icon: 'css/images/basemap_natgeo.jpg'
};

providers['Shaded Relief'] = {
            title: 'Shaded Relief',
            layer: shadedrelief,
            icon: 'css/images/basemap_shadedrelief.jpg'
};

var layers = [];
for (var providerId in providers) {
    layers.push(providers[providerId]);
}

var ctrl = L.control.iconLayers(layers,{
        position: 'topright',
        maxLayersInRow: 3
    }).addTo(map);
    ctrl._container.remove();
    document.getElementById('basemaps').appendChild(ctrl.onAdd(map));
