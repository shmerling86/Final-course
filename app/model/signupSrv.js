app.factory('signupSrv', function ($http, $q) {

    function newUser(email, password, confirmPassword, phone, shippingAddress, productIds) {
        var async = $q.defer();

        var signupURL = 'https://json-server-heroku-ehjizqltwi.now.sh/users';
        var patch = {
            email: email,
            phone: phone,
            shippingAddress: shippingAddress,
            password: password,
            confirmPassword: confirmPassword,
            productIds: productIds
        };
        
        $http.post(signupURL, patch).then(function (response) {            
            async.resolve(response);
        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    };


    return {
        newUser: newUser
    }
});
