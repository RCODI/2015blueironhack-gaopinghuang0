function initMap() {

	var latlng,
		map, 
		marker,
		infowindow;

	latlng = new google.maps.LatLng(40.4258333, -86.9080556);

	map = new google.maps.Map(document.getElementById('mapWrapper'), {
		center: latlng,
		zoom: 14
	});

	marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: "West Lafayette"
	});

	infowindow = new google.maps.InfoWindow({
		content: ""
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent("West Lafayette");
		infowindow.open(map, marker);
	});
}

