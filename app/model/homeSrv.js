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

    function isLoggedIn() {
        return activeUser ? true : false
    }

    function loginWithCode(code) {
        var async = $q.defer();
        var loginURL = 'https://json-server-heroku-uvkhtymyfo.now.sh/users?code=' + code

        $http.get(loginURL).then(function (response) {
            
            if (response.data.length > 0) {
                activeUser = new User(response.data[0]);
                async.resolve(activeUser);
            } else {
                async.reject('invalid Code!');
            }
        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    };

    
    function getActiveUser() {
        return activeUser;
    }


    return {
        loginWithCode: loginWithCode,
        isLoggedIn: isLoggedIn,
        getActiveUser: getActiveUser
        }

});