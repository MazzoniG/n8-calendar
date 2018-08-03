angular.module('HomeCtrl', []).controller('HomeController', function($scope, $rootScope, $location, $compile, uiCalendarConfig, moment, Services) {

	$rootScope.renderCalendar = false;

	$scope.eventSources = [];

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

		$scope.startDate = moment($scope.startDate);

		$scope.startDate = $scope.startDate.format('YYYY-MM-DD');
		$scope.endDate = moment($scope.startDate).add($scope.numberOfDays, 'days').format('YYYY-MM-DD');

		var dateRange = { start: $scope.startDate, end: $scope.endDate };

		console.log('___DateRange___\n', dateRange);

		$scope.uiConfig.calendar.validRange = dateRange;

		Services.getHolidays($scope.country).then(function(holidays) { 
			console.log('___Holidays___\n', holidays);
		});

	};
	
})