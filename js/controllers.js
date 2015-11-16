
app.controller("tempCtrl", function($scope, $http) {
	$scope.fetch = function(typeid, data) {
		$http({
			method: "GET",
			url: "http://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes"+typeid,
			headers: {"Content-Type": "application/json",
			 'token': 'lZKvwmkJKfYKGxEbtjcOKTUAzQsXQQdp'}
		}).then(on_success, on_error);
	};

	$scope.fetch('/ACMH');

	function on_success(response) {
		console.log(response.data);
	}

	function on_error(response) {
		console.log(response);
	}
});
