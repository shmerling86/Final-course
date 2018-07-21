app.controller('productCtrl', function ($scope, $log, productListSrv) {

    $scope.products = [];

    productListSrv.readFile().then(function (products) {
        // //regular route
        $scope.products = products;


        // //dynamic route
        // $scope.products = products.filter(function (product) { if($routeParams.name == product.name) { return product } });

    }, function (error) {
        $log.error(error)
    });

    $scope.selected = [];
    $scope.bool = false;

    $scope.addToCart = function($index) {
        console.log($index);

}
    // productListSrv.addToCart($index).then(function (product) {
    //     $scope.selected.push(product);

    //     $scope.searchText = '';
    //     $scope.movies = [];
    // });
    

    // $scope.filterOptions = 
    // [
    //     {presentation: "orderByZone", field: "zone"}
    // ];


});