app.controller('guestLogin', function ($scope, $location, productListSrv) {

    $scope.userListItems = [];

    
    var userId = productListSrv.userCodeId;
    productListSrv.getUserProducts(userId).then(function (userListItems) {
        $scope.userListItems = userListItems;
    })


    $scope.checkedProducts = [];
    
    $scope.getUserProducts = function () {
        for (var i = 0; i < $scope.userListItems.length; i++) {
            if ($scope.userListItems[i].selected) {
                $scope.checkedProducts.push($scope.userListItems[i].id);
            } else if ($scope.userListItems[i].selected === false) {
                $scope.checkedProducts.splice(i);
            }
        }
        productListSrv.updateUserProducts($scope.checkedProducts, userId).then(function (user) {

            if (user.data.productIds[0] == $scope.checkedProducts[0]) {
                $location.path('/guestList')
            }

        }, function (error) {
            $log.error(error)
        });
    }

});