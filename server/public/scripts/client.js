console.log('js sourced');


var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/messages', {
        templateUrl: '../templates/messages.html',
        controller: 'MessageController as mc'
    });
});