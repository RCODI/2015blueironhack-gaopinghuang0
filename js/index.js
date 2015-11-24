var Helper = window.Helper = window.Helper || {};

var url = "http://www.ncdc.noaa.gov/swdiws/csv/nx3hail:inv/20100101:20121231";

app.controller("tempCtrl", function($scope, $http) {
	$scope.fetch = function(typeid, data) {
		$http.get(url, {
			// params: {'radius': "15.0", 'center': "40.4,-86.9"},
			// headers: {"Content-Type": "application/json"}
		}).then(on_success, on_error);
	};

	$scope.fetch();

	function on_success(response) {
		Helper.print(response.data);
		$scope.tempResults = response.data.results;
	}

	function on_error(response) {
		console.log(response);
	}
});


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

