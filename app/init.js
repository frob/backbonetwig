require.config({
  urlArgs: "bust=" + (new Date()).getTime(),  //Cache buster
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    "underscore": "vendor/underscore",
    "backbone": "vendor/backbone/backbone"
  }
});

require(["jquery", "underscore", "backbone"], function($, _, Backbone) {
  console.log("Test output");
  console.log("$: " + typeof $);
  console.log("_: " + typeof _);
  console.log("Backbone: " + typeof Backbone);
});

require(['jquery'], function($) {
  $('body').append("<h1>Hello World</h1>");
})

require(['app']);