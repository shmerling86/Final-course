app.controller('randomUrlCtrl', function ($scope, $location, $log, randomUrlSrv, userSrv) {

    if (!userSrv.isLoggedIn()) {
        $location.path('/');
        return
    }
    
    $scope.showUrl = randomUrlSrv.makeid();


    $scope.addCodeToUserObj = function () {

        randomUrlSrv.addCodeToUserObj($scope.showUrl).then(function (newCode) {
    
                $location.path('/codeApprove');
    
            }, function (error) {
                $log.error(error)
            });
    
    
        }
});
