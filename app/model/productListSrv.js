app.factory('productListSrv', function ($http, $q) {

    var SERVER = 'https://json-server-heroku-mxzyipueqm.now.sh';
  
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
       return selectedProducts
   };
  
    
    return {
        readFile: readFile,
        addChecked: addChecked,
        SERVER: SERVER
    }
});