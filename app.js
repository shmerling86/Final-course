var app = angular.module('myApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "home.html"
        })
        .when("/products", {
            templateUrl: "products.html",
            controller: 'productCtrl'
        })
        .when("/list", {

        })
        .when("/login", {
            templateUrl: "login.html"

        })
        .when("/signup", {

        })
        .otherwise({
            redirectTo: '/'
        });

});