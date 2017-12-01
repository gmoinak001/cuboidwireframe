var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/profile.htm"
    })
    .when("/edit", {
        templateUrl : "template/edit.htm"
    });
});