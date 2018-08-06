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
            
       
    }, function (error) {
        $log.error(error)
    });
    


    $scope.checkedProducts = [];
    // עובר על המערך של המשתמש אם המתנה סומנה אז מצרף למערך חדש אחרת מסיר 
    $scope.getUserProducts = function () {
        for (var i = 0; i < $scope.userListItems.length; i++) {

            if ($scope.userListItems[i].selected) {
                $scope.userListItems[i].selected = true
                $scope.checkedProducts.push($scope.userListItems[i].id);
            } else if ($scope.userListItems[i].selected === false) {
                $scope.checkedProducts.splice(i);
            }
        }



        productListSrv.updateUserProducts($scope.checkedProducts, $scope.userId).then(function (user) {
            if (user.data.guestProductIds[0] == $scope.checkedProducts[0]) {
                $location.path('/guestList')
            }

        }, function (error) {
            $log.error(error)
        });
    }

});