app.factory('guestListSrv', function ($http, $q, userSrv) {

    function Product(id, productName, description, price, zone, brand, image, isPaid) {
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.zone = zone;
        this.brand = brand;
        this.image = image;
        this.id = id;
        this.isPaid = isPaid;
    }

    function getUserGuestFullProducts(userId) {

        var selectedProducts = [];
        var async = $q.defer();
        var id = userId || userSrv.getActiveUser().id;
        var productsIdsUrl = 'https://json-server-heroku-zmsmzandgg.now.sh/users/' + id;

        $http.get(productsIdsUrl).then(function (response) {
            console.log("RES DATA:")
            console.log(response.data)
            response.data.guestProductIds.forEach(function (guestProduct) {
                console.log(guestProduct)
                responseInternal = guestProduct;
                selectedProducts.push(new Product(responseInternal.id, responseInternal.productName, responseInternal.description,
                responseInternal.price, responseInternal.zone, responseInternal.brand, responseInternal.image, responseInternal.isPaid));
            });
            console.log(selectedProducts);
            async.resolve(selectedProducts);
        //     response.data.guestProductIds.forEach(function (selectedProductId) {

        //         var productIdsDataUrl = "https://json-server-heroku-zmsmzandgg.now.sh/products/" + selectedProductId.id;
        //         $http.get(productIdsDataUrl).then(function (responseInternal) {
        //             responseInternal = responseInternal.data;
        //             selectedProducts.push(new Product(responseInternal.id, responseInternal.productName, responseInternal.description,
        //                 responseInternal.price, responseInternal.zone, responseInternal.brand, responseInternal.image, responseInternal.isPaid));
        //             if (selectedProducts.length == response.data.guestProductIds.length) {
        //                 async.resolve(selectedProducts);
        //             }
        //         })
        //     }, function (responseInternal) {
        //         console.error(responseInternal);
        //         async.reject([]);
        //     });

        }, function (response) {
            console.error(response);
            async.reject([]);
        });

        return async.promise;
    }

    function updateUserProducts(selectedProducts, userId, userList) {

        // console.log(userList);
        // console.log(selectedProducts);
        // console.log(userId);
        
        
        
        var id = userId || userSrv.getActiveUser().id;
        var async = $q.defer();
        var productsIdsUrl = 'https://json-server-heroku-zmsmzandgg.now.sh/users/' + id;


        // if (userSrv.getActiveUser()) {
        //     userSrv.getActiveUser().productIds = selectedProducts;
        //     var patch = { productIds: selectedProducts };

        // } else {
            var patch = { guestProductIds: selectedProducts,
                          productIds: userList 
                        };
        // }

        $http.patch(productsIdsUrl, patch).then(function (response) {

            async.resolve(response);

        }, function (responseInternal) {
            console.error(responseInternal);
            async.reject([]);
        });
        return async.promise;
    }
   

    return {
    getUserGuestFullProducts: getUserGuestFullProducts,
    updateUserProducts: updateUserProducts
}

});