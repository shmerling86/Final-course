app.controller('navbarCtrl', function ($scope, userSrv, homeSrv, $location) {

    
    $scope.logout = function () {
        userSrv.logout();
        $location.path('/');
    }
    
    // $scope.code = '';
    
    // $scope.loginWithCode = function () {
    //     homeSrv.loginWithCode($scope.code).then(function (friendUser) {            
    //     })
    //     $location.path('/');
    // }
    
    $scope.isUserLoggedIn = function() {
        return userSrv.isLoggedIn();
    }
});