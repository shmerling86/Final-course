app.controller('productCtrl', function ($scope, $log, $location, productListSrv, userSrv) {



    if(!userSrv.isLoggedIn()){
        $location.path('/');
        return
    }

    $scope.products = [];

    productListSrv.readFile().then(function (products) {
        $scope.products = products;
    }, function (error) {
        $log.error(error)
    });

   

});
