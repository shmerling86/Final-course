app.controller('guestList', function ($scope, productListSrv) {


    $scope.hoverIn = function () {
        this.hoverEdit = true;
    };
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };

    $scope.selectedGifts = productListSrv.checkedProducts;

    $scope.userId = productListSrv.userCodeId;

    
    // $scope.deleteTask = function () {
    //     $scope.selectedGifts.splice($index, 1);
    // }
    
    
    
    productListSrv.getUserProducts($scope.userId).then(function (selectedGifts) {
        // console.log(selectedGifts);
        $scope.selectedGifts = selectedGifts;
    }, function (err) {
        console.log(err);
    });



});