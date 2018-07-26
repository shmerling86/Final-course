var app = angular.module('myApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "app/home/home.html"
        })
        .when("/products", {
            templateUrl: "app/products/products.html",
            controller: 'productCtrl'
        })
        .when("/list", {
            templateUrl: "app/list/myList.html",
            controller: 'myListCtrl'
        })
        .when("/login", {
            templateUrl: "app/login/login.html"

        })
        .when("/mylink", {
            templateUrl: "app/mylink/mylink.html",
            controller: 'randomUrlCtrl'


        })
        .when("/signup", {
            templateUrl: "app/signup/signup.html"

        })
        .otherwise({
            redirectTo: '/'
        });

});