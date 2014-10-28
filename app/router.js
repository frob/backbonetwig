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
    App.initializePage("", "this is the home page");

    router.on('route:defaultAction', function (actions) {
      App.printPageContent("", "This is my Home page");
      console.log("default route");
    });

    router.on('route:resume', function (actions) {
      App.printPageContent("Resume", "This is my Resume");
      console.log("resume route.");
    });

    router.on('route:contact', function (actions) {
      App.printPageContent("Contact", "This is my Conact Page");
      console.log("contact route.");
    });

    router.on('route:blog', function (actions) {
      App.printPageContent("Blog", "This is my Blog");
      console.log("blog route.");
    });

    router.on('route:portfolioList', function (actions) {
      App.printPageContent("Portfolio", "This is my Portfolio");
      console.log("portfolioList route.");
    });

    router.on('route:portfolioItem', function (portfolioItem) {
      App.printPageContent(portfolioItem, "This is a Portfolio Item Page for " + portfolioItem);
      console.log("portfolioItem route.");
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
