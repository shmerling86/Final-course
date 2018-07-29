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


    // productListSrv.addChecked().then(function(selectedProducts) {
    //     $scope.selectedProducts = selectedProducts;
    // }, function(err) {
    //     console.log(err);
    // });

    // $scope.createRecipe = function() {
    //     recipes.createRecipe({name: $scope.name, description: $scope.description, duration: $scope.duration, 
    //         ingrediants: $scope.ingrediants, steps: $scope.steps, imageUrl: $scope.image, userId: user.getActiveUser().id} ).then(function() {
    //             $location.path("/recipes")
    //         }, function(err) {
    //             console.log(err);
    //         })
    // }

});