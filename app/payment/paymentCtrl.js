app.controller('payment', function ($scope, productListSrv, $location, guestListSrv) {

    if (!productListSrv.userCodeId) {
        $location.path('/');
        return
    }

    $scope.userId = productListSrv.userCodeId;

    $scope.reduceGift = function () {
        guestListSrv.getUserGuestFullProducts($scope.userId).then(function (selectedGifts) {
            $scope.selectedGifts = selectedGifts
            for (var i = 0; i < $scope.selectedGifts.length; i++) {
                if (!$scope.selectedGifts[i]["isPaid"]) {
                    $scope.selectedGifts[i]["isPaid"] = true;
                }
            }

            guestListSrv.updateUserProducts($scope.selectedGifts, $scope.userId).then(function (user) {

    
            }, function (error) {
                $log.error(error)
            });

        }, function (err) {
            console.log(err);
        });

    }



});

