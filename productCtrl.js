app.controller('productCtrl', function ($scope, $log, $routeParams, productListSrv) {

    $scope.products = [];

    productListSrv.readFile().then(function (products) {
    //regular route
        $scope.products = products;

    //dynamic route
        // $scope.products = products.filter(function (product) { if($routeParams.name == product.name) { return product } });

    }, function (error) {
        $log.error(error)
    });



});