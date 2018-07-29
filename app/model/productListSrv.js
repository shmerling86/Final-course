app.factory('productListSrv', function ($http, $q, userSrv) {

    var SERVER = 'https://json-server-heroku-ffwloyiqam.now.sh';

    function Product(productName, description, price, zone, brand, image, isAddToCart) {
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.zone = zone;
        this.brand = brand;
        this.image = image;
        this.isAddToCart = isAddToCart
    }

    var products = [];


    function readFile() {
        var async = $q.defer();
        $http.get(SERVER + '/products').then(function (response) {
            response.data.forEach(function (plainObj) {
                var product = new Product(plainObj.productName, plainObj.description, plainObj.price, plainObj.zone, plainObj.brand, plainObj.image, plainObj.isAddToCart);
                products.push(product);

            }, function (response) {
                console.error(response);
                async.reject([]);
            });
            async.resolve(products);
        });
        return async.promise;
    };

    var selectedProducts = [];

        function addChecked() {

           products.forEach(function (product) {
               if (product.isAddToCart == true) {
                   selectedProducts.push(product)
               };
           });
           getActiveUserProducts()
           return selectedProducts
       };

    function getActiveUserProducts() {
        var async = $q.defer();

        var productsUrl = "https://json-server-heroku-ffwloyiqam.now.sh/products?userId=" + userSrv.getActiveUser().id;
        $http.get(productsUrl).then(function (response) {
            response.data.forEach(function (selectedProduct) {
                console.log(userSrv.getActiveUser().id);

                selectedProducts.push(new Product(selectedProduct));
            })
            async.resolve(selectedProducts);
        }, function (err) {
            async.reject(err);
        });

        return async.promise;
    }


    return {
        readFile: readFile,
        addChecked: addChecked,
        SERVER: SERVER,
        getActiveUserProducts: getActiveUserProducts
    }
});