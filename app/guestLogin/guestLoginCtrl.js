app.controller('guestLogin', function ($scope, $location, productListSrv) {


    if (!productListSrv.userCodeId) {
        $location.path('/');
        return
    }

    $scope.userId = productListSrv.userCodeId;

    $scope.userListItems = [];
    //מביא לאורח את המוצרים שהמשתמש סימן
    productListSrv.getUserProducts($scope.userId).then(function (userListItems) {
        $scope.userListItems = userListItems;
    })
    

    $scope.checkedProducts = [];
// בודק אם המתנה סומנה אז מצרף למערך אחרת מסיר 
    $scope.getUserProducts = function () {
        for (var i = 0; i < $scope.userListItems.length; i++) {
            // console.log($scope.userListItems[i].selected);
            if ($scope.userListItems[i].selected) {
                
                $scope.checkedProducts.push($scope.userListItems[i].id);
            } else if ($scope.userListItems[i].selected === false) {
                $scope.checkedProducts.splice(i);
            }
        }
        
        productListSrv.updateUserProducts($scope.checkedProducts, $scope.userId).then(function (user) {

            if (user.data.productIds[0] == $scope.checkedProducts[0]) {
                $location.path('/guestList')
            }

        }, function (error) {
            $log.error(error)
        });
    }

});