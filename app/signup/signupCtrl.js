app.controller('signupCtrl', function ($scope, $location, $log, signupSrv) {

    if (!userSrv.isLoggedIn()) {
        $location.path('/');
        return
    }
    
    $scope.email = '';
    $scope.password = '';
    $scope.confirmPassword = '';
    $scope.phone = '';
    $scope.shippingAddress = '';
    $scope.productIds = [];

 

    $scope.newUser = function () {

    signupSrv.newUser($scope.email, $scope.password, $scope.confirmPassword, $scope.phone,
        $scope.shippingAddress, $scope.productIds).then(function (newUser) {


            $location.path('/signupApprovment');

        }, function (error) {
            $log.error(error)
        });


    }

});