// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'twig'
], function ($, _, Backbone, Twig) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default - catch all
      '': 'defaultAction',
      'resume': 'resume',
      'contact': 'contact',
      'blog': 'blog',
      'portfolio': 'portfolioList',
      'portfolio/:title': 'portfolioItem'
    }
  });

  var initialize = function(options){
    var router = new AppRouter(options);

    router.on('route:defaultAction', function (actions) {
      console.log("default route");
    });

    router.on('route:resume', function (actions) {
      console.log("resume route.");
    });

    router.on('route:contact', function (actions) {
      console.log("contact route.");
    });

    router.on('route:blog', function (actions) {
      console.log("blog route.");
    });

    router.on('route:portfolioList', function (actions) {
      console.log("portfolioList route.");
    });

    router.on('route:portfolioItem', function (actions) {
      console.log("portfolioItem route.");
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
