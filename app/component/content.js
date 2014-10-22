define(['mdown!content/default.md', 'jquery'], function (dynContent, $) {
  var deferred;

  var returnContent = function(id) {
    if (id === '') id = 'default';
    deferred = new $.Deferred();
    var reqContent = ['mdown!content/' + id.toLowerCase() + '.md'];

    require(reqContent, function () {
      deferred.resolve(arguments[0]);
    });

    return deferred.promise();
  };


  return {
    returnContent: returnContent
  }
});
