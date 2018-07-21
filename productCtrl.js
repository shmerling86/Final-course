app.controller('productCtrl', function ($scope,$log, productListSrv) {

    $scope.test = "bla";
    
    $scope.products = [];
    
    
    
    
    productListSrv.readFile().then(function (products) {
        // //regular route
        $scope.products = products;
        console.log($scope.products[0].productName);
        
        // //dynamic route
        // $scope.products = products.filter(function (product) { if($routeParams.name == product.name) { return product } });
        
    }, function (error) {
        $log.error(error)
    });
    
    // $scope.filterOptions = 
    // [
        //     {presentation: "orderByZone", field: "zone"}
        // ];
        
    
});