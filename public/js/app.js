angular.module('number8-calendar', ['ngRoute', 'appRoutes', 'ngMaterial', 'ui.bootstrap', 'ui.calendar', 'angularMoment', 'Services', 'HomeCtrl'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
 });

