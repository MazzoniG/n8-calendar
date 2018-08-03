angular.module('Services', []).factory('Services', function($http) {

	return {
		getHolidays: function(country) {
			var holidays;
			var request = {
				method: 'GET',
				url: "/holidays/" + country
			};
			return $http(request).then(function(data) {
				return data.data
			})
		}
	};
});