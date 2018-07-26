app.controller('myListCtrl', function ($scope, productListSrv) {


    $scope.selectedProducts = productListSrv.addChecked()

    $scope.hoverIn = function () {        
        this.hoverEdit = true;
    };
    $scope.hoverOut = function () {   
        this.hoverEdit = false;
    };
    
    $scope.deleteTask = function($index) {
        $scope.selectedProducts.splice($index, 1);
    }
});