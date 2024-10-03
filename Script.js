function initMap() {
    // Initialize the map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.9058, lng: -2.0796 }, // Initial center (Francis Close Hall Campus)
        zoom: 17,  // Initial zoom level
        mapId: '9c30f2b062cb57db' // Your Map ID
    });

    // Define the custom house icon
    const houseIcon = {
        url: 'House Icon.png',
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 40)
    };

    // Define the custom university icon
    const universityIcon = {
        url: 'University Icon.png',
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 40)
    };

    // Create bounds
    const bounds = new google.maps.LatLngBounds();

    // Add markers for properties
    const locations = [
        { lat: 51.90589663784391, lng: -2.082536341284594, title: "24 Granville Street, Cheltenham" },
        { lat: 51.905102, lng: -2.079061, title: "5 St Pauls Lane, Cheltenham" },
        { lat: 51.905035468672125, lng: -2.0788358356629195, title: "5 St Pauls Street North, Cheltenham" }
    ];

    // Add markers with custom icons and extend bounds
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
            icon: houseIcon
        });
        bounds.extend(marker.position);
    });

    // Add a marker for the university and extend bounds
    const universityMarker = new google.maps.Marker({
        position: { lat: 51.90535186167893, lng: -2.0799602197702884 },
        map: map,
        title: "Francis Close Hall Campus",
        icon: universityIcon
    });
    bounds.extend(universityMarker.position);

    // Fit the map to the bounds
    map.fitBounds(bounds);
}
