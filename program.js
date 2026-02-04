var map = L.map('map').setView([4.671525611974879, -74.11269786158644], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([4.671525611974879, -74.11269786158644]).addTo(map);