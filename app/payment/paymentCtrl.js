app.controller('payment', function ($scope, productListSrv, $location, guestListSrv) {

    if (!productListSrv.userCodeId) {
        $location.path('/');
        return
    }


    $scope.reduceGift = function () {
        // console.log('Now gifts mark as bought in the user list.');
        
        console.log('selected:'+ guestListSrv.userListItem);
    }



});

