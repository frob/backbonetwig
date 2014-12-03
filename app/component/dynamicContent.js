define(['mdown!content/default.md', 'jquery'], function (dynContent, $) {
  var deferred;

  var fetchContent = function(id) {
    if (id === undefined || id === '') id = 'default';

    deferred = new $.Deferred();
    var reqContent = ['mdown!content/' + id.toLowerCase() + '.md'];

    require(reqContent, function () {
      deferred.resolve(arguments[0]);
    });

    return deferred.promise();
  };

  var fetchJSON = function(id) {
    if (id === undefined || id === '') id = 'default';

    deferred = new $.Deferred();
    var reqContent = ['json!content/' + id.toLowerCase() + '.json'];

    require(reqContent, function () {
      deferred.resolve(arguments[0]);
    });

    return deferred.promise();
  };

  return {
    fetchJSON: fetchJSON,
    fetchContent: fetchContent
  }
});
