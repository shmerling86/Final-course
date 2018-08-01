app.factory('randomUrlSrv', function ($http, $q, userSrv) {

  function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }


  function addCodeToUserObj(code) {
    var async = $q.defer();

    var URL = 'https://json-server-heroku-ehjizqltwi.now.sh/users/' + userSrv.getActiveUser().id

    var patch = {"code": code}


      $http.patch(URL, patch).then(function (response) {

        async.resolve(response);
      }, function (err) {
        async.reject(err);
      });
    return async.promise;
  };


  return {
    makeid: makeid,
    addCodeToUserObj: addCodeToUserObj
  }

});

