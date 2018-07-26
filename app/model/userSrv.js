app.factory('userSrv', function () {

    var SERVER = 'https://final-course-xqysoipzwa.now.sh';
    var activeUser = null;


    function User(email) {
        this.email = email;
    }

    function isLoggedIn() {        
        // return activeUser ? true : false
        return true;
    }

    function login(email, password) {
        var async = $q.defer();
        var loginURL = SERVER + '/users?email=' + email + "&password=" + password
        $http.get(loginURL).then(function (response) {
            if (response.data.length > 0) {

                activeUser = new User(response.data[0]);
                async.resolve(activeUser);
            } else {
                async.reject('invalid credentials');
            }
        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    };

    return {
        readFile: readFile,
        SERVER: SERVER,
        isLoggedIn: isLoggedIn,
        login: login
    }
});