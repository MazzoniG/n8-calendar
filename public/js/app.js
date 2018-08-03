angular.module('number8-calendar', ['ngRoute', 'appRoutes', 'ngMaterial', 'ui.bootstrap', 'ui.calendar', 'angularMoment', 'HomeCtrl'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
 });

