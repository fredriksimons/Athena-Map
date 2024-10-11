function initMap() {
    // Initialize the map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.9058, lng: -2.0796 }, // Coordinates for Francis Close Hall Campus, Cheltenham
        zoom: 17,  // Zoom level set to 17
        mapId: '9c30f2b062cb57db' // Your Map ID
    });

    // Define the custom house icon
    const houseIcon = {
        url: 'House Icon.png', // Path to your house icon image
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 40)
    };

    // Define the custom university icon
    const universityIcon = {
        url: 'University Icon.png', // Path to your university icon image
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 40)
    };

    const bounds = new google.maps.LatLngBounds();

    // Add markers with custom icons and drop animation
    const locations = [
        { lat: 51.90589663784391, lng: -2.082536341284594, title: "24 Granville Street, Cheltenham" },
        { lat: 51.905102, lng: -2.079061, title: "5 St Pauls Lane, Cheltenham" },
        { lat: 51.905035468672125, lng: -2.0788358356629195, title: "5 St Pauls Street North, Cheltenham" }
    ];

    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
            icon: houseIcon,
            animation: google.maps.Animation.DROP
        });
        bounds.extend(marker.getPosition());
    });

    const universityMarker = new google.maps.Marker({
        position: { lat: 51.90535186167893, lng: -2.0799602197702884 },
        map: map,
        title: "Francis Close Hall Campus",
        icon: universityIcon,
        animation: google.maps.Animation.DROP
    });
    bounds.extend(universityMarker.getPosition());

    google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
        const currentZoom = map.getZoom();
        map.fitBounds(bounds);
        if (map.getZoom() > currentZoom) {
            map.setZoom(currentZoom);
        }
    });

    google.maps.event.addListenerOnce(map, 'idle', function() {
        if (window.innerWidth > 768) {
            map.panBy(-100, 0);
        }
    });
}

// Attach the function to the window object to make it globally available
window.initMap = initMap;
