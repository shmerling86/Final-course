app.factory('randomUrlSrv', function () {

  var text = "";
  function makeid() {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  function addCodeToUserObj() {
    console.log(text);
    
  }

  return {
    makeid: makeid,
    addCodeToUserObj: addCodeToUserObj
  }

});

