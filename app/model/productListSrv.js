app.factory('productListSrv', function ($http, $q, userSrv) {

    var SERVER = 'https://json-server-heroku-zngxhoczyh.now.sh';

    function Product(id, productName, description, price, zone, brand, image) {
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.zone = zone;
        this.brand = brand;
        this.image = image;
        this.id = id;
    }



    function readFile() {
        var products = [];

        var async = $q.defer();
        $http.get('https://json-server-heroku-zngxhoczyh.now.sh' + '/products').then(function (response) {

            response.data.forEach(function (plainObj) {
                var product = new Product(plainObj.id, plainObj.productName, plainObj.description, plainObj.price, plainObj.zone, plainObj.brand, plainObj.image);
                products.push(product);

            }, function (response) {
                console.error(response);
                async.reject([]);
            });
            async.resolve(products);
        });
        return async.promise;
    };

    function getActiveUserProducts() {
        var selectedProducts = [];
        var async = $q.defer();

        var productsIdsUrl = 'https://json-server-heroku-zngxhoczyh.now.sh/users/' + userSrv.getActiveUser().id;
        $http.get(productsIdsUrl).then(function (response) {
            response.data.productIds.forEach(function (selectedProductId) {

                var productIdsDataUrl = "https://json-server-heroku-zngxhoczyh.now.sh/products/" + selectedProductId;
                $http.get(productIdsDataUrl).then(function (responseInternal) {
                    responseInternal = responseInternal.data;
                    selectedProducts.push(new Product(responseInternal.id, responseInternal.productName, responseInternal.description,
                        responseInternal.price, responseInternal.zone, responseInternal.brand, responseInternal.image))

                    console.log(selectedProducts);

                })

                async.resolve(selectedProducts);

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

    function updateUserProducts(selectedProducts) {
        var async = $q.defer();
        var productsIdsUrl = 'https://json-server-heroku-zngxhoczyh.now.sh/users/' + userSrv.getActiveUser().id;
        var patch = { productIds : selectedProducts };

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
        SERVER: SERVER,
        getActiveUserProducts: getActiveUserProducts,
        updateUserProducts: updateUserProducts
    }

});