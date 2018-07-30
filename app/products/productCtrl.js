app.controller('productCtrl', function ($scope, $log, $location, productListSrv, userSrv) {

    $scope.checkedProducts = [];

    if (!userSrv.isLoggedIn()) {
        $location.path('/');
        return
    }

    $scope.products = [];

    productListSrv.readFile().then(function (products) {
        $scope.products = products;
    }, function (error) {
        $log.error(error)
    });


    $scope.getActiveUserProducts = function () {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].selected) {
                $scope.checkedProducts.push($scope.products[i].id);
            } else if ($scope.products[i].selected === false) {
                $scope.checkedProducts.splice(i);
            }
        }


        productListSrv.updateUserProducts($scope.checkedProducts).then(function (user) {
            if (user.data.productIds[0] == $scope.checkedProducts[0]) {
                $location.path('/list')
            }

        }, function (error) {
            $log.error(error)
        });
    }



});
