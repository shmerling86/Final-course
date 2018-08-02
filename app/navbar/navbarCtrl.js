app.controller('navbarCtrl', function ($scope, userSrv, homeSrv, $location) {

    
    $scope.logout = function () {
        userSrv.logout();
        $location.path('/');
    }
    
    $scope.code = '';
    
    $scope.loginWithCode = function () {
        homeSrv.loginWithCode($scope.code).then(function (guestUser) {            
        })
        $location.path('/guestLogin');
    }
    
    $scope.isUserLoggedIn = function() {
        return userSrv.isLoggedIn();
    }
});