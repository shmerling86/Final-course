app.controller('guestLogin', function ($scope, productListSrv) {

    $scope.userListItems = [];

    
    var userId = productListSrv.userCodeId;
    productListSrv.getUserProducts(userId).then(function (userListItems) {
        $scope.userListItems = userListItems;
    })


});