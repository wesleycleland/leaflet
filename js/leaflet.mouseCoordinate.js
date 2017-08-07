/* 
    Author     : Johannes Rudolph
*/
/* globals L: true */
L.Control.mouseCoordinate  = L.Control.extend({
    options: {
        gps: true,
        gpsLong: true,
        utm: false,
        utmref: false,
        position: 'bottomright',

        _sm_a: 6378137.0,
        _sm_b: 6356752.314,
        _sm_EccSquared: 6.69437999013e-03,
        _UTMScaleFactor: 0.9996

    },
    onAdd: function(map){
        this._map = map;

        if(L.Browser.touch || L.Browser.msTouch)
            return L.DomUtil.create('div');

        var className = 'leaflet-control-mouseCoordinate';
        var container = this._container = L.DomUtil.create('div',className);

        this._gpsPositionContainer = L.DomUtil.create("div","gpsPos",container);

        map.on("mousemove", this._update, this);

        return container;
    },
    _update: function(e){
        var lat = Math.round(e.latlng.lat * 100000) / 100000 ;
        var lng = Math.round(e.latlng.lng * 100000) / 100000 ;
        var gps = {lat: lat,lng: lng};
        var content = "<table>";
        if(this.options.gps){
            content += "<tr><td>GPS</td><td>" + lat + "</td><td> " + lng +"</td></tr>";
            if(this.options.gpsLong){
                var gpsMinuten = this._geo2geodeziminuten(gps);
                content += "<tr><td></td><td class='coords'>"+ gpsMinuten.NS + " " + gpsMinuten.latgrad + "&deg; "+ gpsMinuten.latminuten+"</td><td class='coords'> " + gpsMinuten.WE + " "+ gpsMinuten.lnggrad +"&deg; "+ gpsMinuten.latminuten +"</td></tr>";
                var gpsMinutenSekunden = this._geo2gradminutensekunden(gps);
                content += "<tr><td></td><td>"+ gpsMinutenSekunden.NS + " " + gpsMinutenSekunden.latgrad + "&deg; "+ gpsMinutenSekunden.latminuten + "&prime; "+ gpsMinutenSekunden.latsekunden+"&Prime;</td><td> " + gpsMinutenSekunden.WE + " "+ gpsMinutenSekunden.lnggrad +"&deg; "+ gpsMinutenSekunden.latminuten + "&prime; "+ gpsMinutenSekunden.lngsekunden+"&Prime;</td></tr>";
            }
        }
        if(this.options.utm){
            var utm = UTM.fromLatLng(gps);
            content += "<tr><td>UTM</td><td colspan='2'>"+utm.zone+"&nbsp;" +utm.x+"&nbsp;" +utm.y+"</td></tr>";
        }
        if(this.options.utmref){
            var utmref = UTMREF.fromUTM(UTM.fromLatLng(gps));
            content += "<tr><td>UTM REF</td><td colspan='2'>"+utmref.zone+"&nbsp;" +utmref.band+"&nbsp;" +utmref.x+"&nbsp;" +utmref.y+"</td></tr>";
        }
        if(this.options.qth){
            var qth = QTH.fromLatLng(gps);
            content += "<tr><td>QTH</td><td colspan='2'>"+qth+"</td></tr>";
        }
        if(this.options.nac){
            var nac = NAC.fromLatLng(gps);
            content += "<tr><td>NAC</td><td colspan='2'>"+nac.y+" "+ nac.x +"</td></tr>";
        }

        content += "</table>";
        this._gpsPositionContainer.innerHTML = content;
    },



    _geo2geodeziminuten: function (gps){
        var latgrad = parseInt(gps.lat,10);
        var latminuten = Math.round( ((gps.lat - latgrad) * 60) * 10000 ) / 10000;

        var lnggrad = parseInt(gps.lng,10);
        var lngminuten = Math.round( ((gps.lng - lnggrad) * 60) * 10000 ) / 10000;

        return this._AddNSEW({latgrad: latgrad, latminuten: latminuten, lnggrad: lnggrad, lngminuten: lngminuten});
    },
    _geo2gradminutensekunden: function (gps){
        var latgrad = parseInt(gps.lat,10);
        var latminuten = (gps.lat - latgrad) * 60;
        var latsekunden = Math.round(((latminuten - parseInt(latminuten,10)) * 60) * 100) / 100;
        latminuten = parseInt(latminuten,10);

        var lnggrad = parseInt(gps.lng);
        var lngminuten = (gps.lng - lnggrad) * 60;
        var lngsekunden = Math.round(((lngminuten - parseInt(lngminuten,10)) * 60) * 100) /100;
        lngminuten = parseInt(lngminuten,10);

        return this._AddNSEW({latgrad: latgrad, latminuten: latminuten,latsekunden: latsekunden, lnggrad: lnggrad, lngminuten: lngminuten, lngsekunden: lngsekunden});
    },
    _AddNSEW: function (coord){
        coord.NS = "N";
        coord.WE = "E";
        if(coord.latgrad < 0){
            coord.latgrad = coord.latgrad * (-1);
            coord.NS = "S";
        }
        if(coord.lnggrad < 0){
            coord.lnggrad = coord.lnggrad * (-1);
            coord.EW = "W";
        }
        return coord;
    },

});

L.control.mouseCoordinate = function (options) {
    return new L.Control.mouseCoordinate(options);
};