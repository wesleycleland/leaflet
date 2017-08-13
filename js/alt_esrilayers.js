var wmas = L.tileLayer('https://gis.agfc.com/arcgis/rest/services/GIS/AGFC/MapServer/10/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

map.addLayer(wmas);
