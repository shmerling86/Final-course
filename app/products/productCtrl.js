app.controller('productCtrl', function ($scope, $log, productListSrv) {

    $scope.products = [];

    productListSrv.readFile().then(function (products) {
        $scope.products = products;
    }, function (error) {
        $log.error(error)
    });

    $scope.selected = [];

    $scope.addToCart = function () {

        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].isActive){
                console.log($scope.products[i].isActive);
                
                // $scope.selected.push($scope.products[i]) 
        }
    }
    };


});
