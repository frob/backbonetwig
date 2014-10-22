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

  var initialize = function(App, options){
    var router = new AppRouter(options);
    App.setSiteName("Frank Robert Anderson");

    router.on('route:defaultAction', function (actions) {
      App.printPage("", "this is the home page");
      console.log("default route");
    });

    router.on('route:resume', function (actions) {
      App.printPage("Resume", "This is my Resume");
      console.log("resume route.");
    });

    router.on('route:contact', function (actions) {
      App.printPage("Contact", "This is my Conact Page");
      console.log("contact route.");
    });

    router.on('route:blog', function (actions) {
      App.printPage("Blog", "This is my Blog");
      console.log("blog route.");
    });

    router.on('route:portfolioList', function (actions) {
      App.printPage("Portfolio", "This is my Portfolio");
      console.log("portfolioList route.");
    });

    router.on('route:portfolioItem', function (portfolioItem) {
      App.printPage(portfolioItem, "This is a Portfolio Item Page for " + portfolioItem);
      console.log("portfolioItem route.");
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
