angular.module('number8-calendar', ['ngRoute', 'appRoutes', 'ngMaterial', 'HomeCtrl'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
 });

