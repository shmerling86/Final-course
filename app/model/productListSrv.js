app.factory('productListSrv', function ($http, $q, userSrv) {


    function Product(id, productName, description, price, zone, brand, image, isPaid) {
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.zone = zone;
        this.brand = brand;
        this.image = image;
        this.id = id;
        this.isPaid = false;
    }

    var userCodeId;


    function readFile() {
        var products = [];

        var async = $q.defer();
        $http.get('https://json-server-heroku-zmsmzandgg.now.sh' + '/products').then(function (response) {

            response.data.forEach(function (plainObj) {
                var product = new Product(plainObj.id, plainObj.productName, plainObj.description, plainObj.price,
                    plainObj.zone, plainObj.brand, plainObj.image, plainObj.isPaid);
                products.push(product);

            }, function (response) {
                console.error(response);
                async.reject([]);
            });
            async.resolve(products);
        });
        return async.promise;
    };


    function getUserProducts(userId) {

        var selectedProducts = [];
        var async = $q.defer();
        var id = userId || userSrv.getActiveUser().id;
        var productsIdsUrl = 'https://json-server-heroku-zmsmzandgg.now.sh/users/' + id;
        $http.get(productsIdsUrl).then(function (response) {
            response.data.productIds.forEach(function (selectedProduct) {

                // if (selectedProduct.isPaid) {

                //     console.log("you have paid gift");

                // } else {

                var productIdsDataUrl = "https://json-server-heroku-zmsmzandgg.now.sh/products/" + selectedProduct.id;
                $http.get(productIdsDataUrl).then(function (responseInternal) {

                    responseInternal = responseInternal.data;

                    selectedProducts.push(new Product(responseInternal.id, responseInternal.productName, responseInternal.description,
                        responseInternal.price, responseInternal.zone, responseInternal.brand,
                        responseInternal.image, responseInternal.isPaid));

                    // resolve only after going through all products
                    if (selectedProducts.length == response.data.productIds.length) {
                        async.resolve(selectedProducts);
                    }
                }, function (responseInternal) {
                    console.error(responseInternal);
                    async.reject([]);
                });
                // }


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

    return {
        readFile: readFile,
        getUserProducts: getUserProducts,
        updateUserProducts: updateUserProducts,
        Product: Product,
        userCodeId: userCodeId
    }

});