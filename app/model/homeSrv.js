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



    function loginWithCode(enterCode) {
        var async = $q.defer();
        var loginURL = 'https://json-server-heroku-ehjizqltwi.now.sh/users?code=' + enterCode

        $http.get(loginURL).then(function (response) {

            for (keys in response.data[0]) {

                if (response.data[0]["code"] == enterCode) {
                    
                    async.resolve(response)
                } else {

                    async.reject(response)
                }
            }


        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    };


    return {
        loginWithCode: loginWithCode

    }

});