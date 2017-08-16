var wma = L.tileLayer.wms("https://gis.agfc.com/arcgis/services/GIS/AGFC/MapServer/WMSServer?", {
    layers: '9',
    format: 'image/png',
    transparent: true,
    attribution: ""
});
wma.addTo(map);

var usfs = L.tileLayer.wms("https://gis.agfc.com/arcgis/services/GIS/AGFC/MapServer/WMSServer?", {
    layers: '10',
    format: 'image/png',
    transparent: true,
    attribution: ""
});
usfs.addTo(map);

var wmamf = L.tileLayer.wms("https://gis.agfc.com/arcgis/services/GIS/AGFC/MapServer/WMSServer?", {
    layers: '12',
    format: 'image/png',
    transparent: true,
    attribution: ""
});
wmamf.addTo(map);

var onf = L.tileLayer.wms("https://gis.agfc.com/arcgis/services/GIS/AGFC/MapServer/WMSServer?", {
    layers: '13',
    format: 'image/png',
    transparent: true,
    attribution: ""
});
onf.addTo(map);

var inholdings = L.tileLayer.wms("https://gis.agfc.com/arcgis/services/GIS/AGFC/MapServer/WMSServer?", {
    layers: '14',
    format: 'image/png',
    transparent: true,
    attribution: ""
});
inholdings.addTo(map);
