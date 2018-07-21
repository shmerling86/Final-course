// var app = angular.module('myApp', []);


var app = angular.module('myApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html",
            controller: "productCtrl"
        })
        // .when("/product", {
        //     templateUrl: "products.html",
        //     controller: "productimCtrl"
        // })
        .otherwise({
            redirectTo: '/'
        });

});