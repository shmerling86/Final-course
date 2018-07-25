app.controller('randomUrlCtrl', function ($scope, randomUrlSrv) {
    $scope.showUrl = randomUrlSrv.makeid();
});