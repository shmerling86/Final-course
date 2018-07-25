app.controller('productCtrl', function ($scope, $log, productListSrv) {


    $scope.products = [];

    productListSrv.readFile().then(function (products) {
        $scope.products = products;
    }, function (error) {
        $log.error(error)
    });

    $scope.selectedProducts = [];

    $scope.addChecked = function () {

        $scope.products.forEach(function (product) {
            if (product.isAddToCart == true) {
                $scope.selectedProducts.push(product)
            };
        });
        console.log($scope.selectedProducts);

    };

    $scope.hoverIn = function () {        
        this.hoverEdit = true;
    };
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };


    $scope.deleteTask = function ($index) {
        $scope.selectedProducts.splice($index, 1);
    }

});
