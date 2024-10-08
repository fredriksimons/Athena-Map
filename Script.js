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
        scaledSize: new google.maps.Size(40, 40), // Size of the icon
        origin: new google.maps.Point(0, 0), // Origin of the image
        anchor: new google.maps.Point(20, 40) // Anchor the icon at the bottom center
    };

    // Define the custom university icon
    const universityIcon = {
        url: 'University Icon.png', // Path to your university icon image
        scaledSize: new google.maps.Size(40, 40), // Size of the icon
        origin: new google.maps.Point(0, 0), // Origin of the image
        anchor: new google.maps.Point(20, 40) // Anchor the icon at the bottom center
    };

    // Define the bounds object
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
        bounds.extend(marker.getPosition()); // Extend bounds to include each marker
    });

    // Add a marker for the university
    const universityMarker = new google.maps.Marker({
        position: { lat: 51.90535186167893, lng: -2.0799602197702884 }, // Coordinates for Francis Close Hall Campus
        map: map,
        title: "Francis Close Hall Campus",
        icon: universityIcon,
        animation: google.maps.Animation.DROP
    });
    bounds.extend(universityMarker.getPosition()); // Extend bounds to include the university marker

    // Adjust the map's zoom and center only if necessary
    google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
        const currentZoom = map.getZoom();
        map.fitBounds(bounds);

        // Ensure zoom doesn't exceed the original set zoom level
        if (map.getZoom() > currentZoom) {
            map.setZoom(currentZoom);
        }
    });

    // Extra padding for desktop screens
    google.maps.event.addListenerOnce(map, 'idle', function() {
        if (window.innerWidth > 768) {  // Check if the screen width is greater than 768px
            map.panBy(-100, 0);  // Pan the map to the left to recenter university on desktop
        }
    });
}
