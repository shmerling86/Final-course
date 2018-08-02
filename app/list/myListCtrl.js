app.controller('myListCtrl', function ($scope, $location, productListSrv, userSrv) {

    if (!userSrv.isLoggedIn()) {
        $location.path('/');
        return
    }

    $scope.selectedProducts = [];

    $scope.hoverIn = function () {        
        this.hoverEdit = true;
    };
    $scope.hoverOut = function () {   
        this.hoverEdit = false;
    };
    
    $scope.deleteTask = function($index) {
        $scope.selectedProducts.splice($index, 1);
    }

    

    productListSrv.getUserProducts().then(function(selectedProducts) {
        $scope.selectedProducts = selectedProducts;
    }, function(err) {
        console.log(err);
    });




});