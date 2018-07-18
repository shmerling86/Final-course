// app.service('productListSrv', function ($http, $q) {


//     function Product(productName, description, price, zone, brand, image) {
//         this.productName = productName;
//         this.description = description;
//         this.price = price;
//         this.zone = zone;
//         this.brand = brand;
//         this.image = image;
//     }

//     var products = [];

//     function readFile() {
//         var async = $q.defer();

//         $http.get('products.json').then(function (response) {
//             response.data.forEach(function (plainObj) {
//                 var product = new Product(productName, description, price, zone, brand, image);
//                 products.push(product);
//             }, function (response) {
//                 console.error(response);
//                 async.reject([]);
//             });
//             async.resolve(actors);
//         });
//         return async.promise;
//     };

//     return {
//         readFile: readFile
//     }
// });