function initMap() {
	// add your code here
	L.mapquest.key = 'rBDGZobFqHV4EWixTH5QN4GKG8UpGOXf';

    var map = L.mapquest.map('map', {
        center: [32.87872751824317, -117.2358645447225],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12,
        zoomControl: false
    });

    L.marker([32.87872751824317, -117.2358645447225]).addTo(map);
}