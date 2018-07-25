app.factory('productListSrv', function ($http, $q) {

    // var SERVER = 'https://final-course-xqysoipzwa.now.sh';
    // var SERVER = 'https://json-server-heroku-xqysoipzwa.now.sh';
    // https://json-server-jwmubfgmxy.now.sh/#!/


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
        
        $http.get('app/products/products.json').then(function (response) {
            // console.log(response.data);
            // for(chunk in response.data){
            //     console.log(response.data[chunk]);
                
            // }
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

    
  
    
    return {
        readFile: readFile
        // addChecked: addChecked
        // SERVER: SERVER
    }
});