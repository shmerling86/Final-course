app.controller('signupCtrl', function ($scope, $location, $log, signupSrv) {

    $scope.email = '';
    $scope.password = '';
    $scope.confirmPassword = '';
    $scope.phone = '';
    $scope.shippingAddress = '';
    $scope.productIds = [];

 

    $scope.newUser = function () {

    signupSrv.newUser($scope.email, $scope.password, $scope.confirmPassword, $scope.phone,
        $scope.shippingAddress, $scope.productIds).then(function (newUser) {

            
            $location.path('/');

        }, function (error) {
            $log.error(error)
        });


    }

});