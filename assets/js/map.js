var lat = 0;
var lng = 0;
var map = L.map("map").setView([41.719562, 44.788718], 8);
L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

L.control.scale({
    metric: true,
    imperial: false,
    position: 'topright'
}).addTo(map);