app.controller('productCtrl', function ($scope, $log, productListSrv) {


    $scope.products = [];

    productListSrv.readFile().then(function (products) {
        $scope.products = products;
    }, function (error) {
        $log.error(error)
    });

   

});
