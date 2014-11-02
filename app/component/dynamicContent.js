define(['mdown!content/default.md', 'jquery'], function (dynContent, $) {
  var deferred;

  var fetchContent = function(id) {
    if (id === undefined || id === '') id = 'default';
console.log(id);
    deferred = new $.Deferred();
    var reqContent = ['mdown!content/' + id.toLowerCase() + '.md'];

    require(reqContent, function () {
      console.log(arguments[0]);
      deferred.resolve(arguments[0]);
    });

    return deferred.promise();
  };

  return {
    fetchContent: fetchContent
  }
});
