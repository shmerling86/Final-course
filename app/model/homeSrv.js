app.factory('homeSrv', function ($http, $q) {

    function User(plainUser) {
        this.code = plainUser.code;
        this.id = plainUser.id;
        this.email = plainUser.email;
        this.phone = plainUser.phone;
        this.shippingAddress = plainUser.shippingAddress;
        this.password = plainUser.password;
        this.productIds = plainUser.productIds;
    }

    

    //     function loginWithCode(code) {
    //         var async = $q.defer();
    //         var loginURL = 'https://json-server-heroku-ehjizqltwi.now.sh/users?code=' + code

    //         $http.get(loginURL).then(function (response) {
    //             debugger
    //             console.log(response.data[0]);

    //         }, function (response) {
    //             console.error(response);
    //             async.reject([]);
    //         });
    //         async.resolve(response);
    //     };
    //     return async.promise;
    // });


    // if (response.data[code] == code) {
    //     activeUser = new User(response.data[0]);
    //     async.resolve(activeUser);
    // } else {
    //     async.reject('invalid Code!');
    // }




    return {
        // loginWithCode: loginWithCode
    
    }

});