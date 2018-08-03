angular.module('HomeCtrl', []).controller('HomeController', function($scope, $rootScope, $location, $compile, uiCalendarConfig, Services) {

	$rootScope.renderCalendar = false;

	$scope.eventSources = [];

	//$scope.startDate = new Date();
	//$scope.country = "US";
	//$scope.numberOfDays = 0;

	$scope.uiConfig = {
		calendar: {
			defaultView: 'month',
			height: 400,
			header: {
				left: 'title',
				center: '',
				right: 'today prev,next'
			}
		}
	};

	$scope.render = function() {
		$rootScope.renderCalendar = true;

		Services.getHolidays($scope.country).then(function(holidays) { //Holidays Endpoint 
			console.log(holidays);
		});
	};

})