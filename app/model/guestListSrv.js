app.factory('guestListSrv', function($http, $q, userSrv){

    function Product(id, productName, description, price, zone, brand, image) {
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.zone = zone;
        this.brand = brand;
        this.image = image;
        this.id = id;
    }

    // function getUserGuestProductIds(userId) {

    //     var selectedProducts = [];
    //     var async = $q.defer();
    //     var id = userId || userSrv.getActiveUser().id;
    //     var productsIdsUrl = 'https://json-server-heroku-zmsmzandgg.now.sh/users/' + id;
    //     $http.get(productsIdsUrl).then(function (response) {

    //             async.resolve(response.data.guestProductIds);

    //     }, function (response) {
    //         console.error(response);
    //         async.reject([]);
    //     });

    //     return async.promise;
    // }

    function getUserGuestFullProducts(userId) {

        var selectedProducts = [];
        var async = $q.defer();
        var id = userId || userSrv.getActiveUser().id;
        var productsIdsUrl = 'https://json-server-heroku-zmsmzandgg.now.sh/users/' + id;
        $http.get(productsIdsUrl).then(function (response) {

            response.data.guestProductIds.forEach(function (selectedProductId) {

                var productIdsDataUrl = "https://json-server-heroku-zmsmzandgg.now.sh/products/" + selectedProductId;

                $http.get(productIdsDataUrl).then(function (responseInternal) {
                    responseInternal = responseInternal.data;
                    selectedProducts.push(new Product(responseInternal.id, responseInternal.productName, responseInternal.description,
                        responseInternal.price, responseInternal.zone, responseInternal.brand, responseInternal.image));

                    if(selectedProducts.length == response.data.guestProductIds.length) {
                        async.resolve(selectedProducts);
                    }
                })

                

            }, function (responseInternal) {
                console.error(responseInternal);
                async.reject([]);
            });

        }, function (response) {
            console.error(response);
            async.reject([]);
        });

        return async.promise;
    }


    function updateUserProducts(selectedProducts, userId) {

        var id = userId || userSrv.getActiveUser().id;
        var async = $q.defer();
        var productsIdsUrl = 'https://json-server-heroku-zmsmzandgg.now.sh/users/' + id;


        if (userSrv.getActiveUser()) {
            userSrv.getActiveUser().productIds = selectedProducts;
            var patch = { productIds: selectedProducts };
        } else {
            var patch = { guestProductIds: selectedProducts };
        }

        $http.patch(productsIdsUrl, patch).then(function (response) {

            async.resolve(response);

        }, function (responseInternal) {
            console.error(responseInternal);
            async.reject([]);
        });
        return async.promise;

    }

    return{
        getUserGuestFullProducts: getUserGuestFullProducts,
        updateUserProducts: updateUserProducts
    }


});