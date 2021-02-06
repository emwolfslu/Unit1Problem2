var map = L.map('map').setView([37.7, -122.4], 10);
  // load a tile layer
L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

  // load GeoJSON from an external file
 $.getJSON("https://raw.githubusercontent.com/gbrunner/adv-python-for-gis-and-rs/master/Week%201/sf_crime.geojson",function(data){
    var ratIcon = L.icon({
      iconUrl: 'http://maptimeboston.github.io/leaflet-intro/rat.gif',
      iconSize: [50,40]
    });
    L.geoJson(data,{
      pointToLayer: function(feature,latlng){
	    return L.marker(latlng,{icon: ratIcon});
      }
    }).addTo(map);
  });
