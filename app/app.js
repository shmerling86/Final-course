var app = angular.module('myApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "app/home/home.html",
            controller: "navbarCtrl"
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
            templateUrl: "app/login/login.html",
            controller: 'loginCtrl'

        })
        .when("/mylink", {
            templateUrl: "app/mylink/mylink.html",
            controller: 'randomUrlCtrl'
        })
        .when("/signup", {
            templateUrl: "app/signup/signup.html",
            controller: 'signupCtrl'
        })
        // .when("/users/:id", {

        // })
        .when("/signupApprovment", {
            templateUrl: "app/signup/signupApprovment.html",

        })
        .when("/codeApprove", {
            templateUrl: "app/myLink/codeApprove.html",

        })
        .when("/guestLogin", {
            templateUrl: "app/guestLogin/guestLogin.html",

        })
        .otherwise({
            redirectTo: '/'
        });

});