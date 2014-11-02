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
      'portfolio/:title': 'portfolioItem',
      ':title': 'catchAll'
    }
  });

  var initialize = function(App, options){
    var router = new AppRouter(options);
    App.setSiteName("Frank Robert Anderson");

    App.initializePage({
      route: "",
      template: ""
    });

    router.on('route:defaultAction', function (actions) {
      App.printPageContent({
        route: "",
        template: "",
        selector: ".content-region"
      });

      App.printMessage({message:"this is the default"});

      console.log("default route");
    });

    router.on('route:resume', function (actions) {
      App.printPageContent({
        route: "resume",
        template: "page",
        selector: ".content-region"
      });

      App.printMessage({message:"this is the resume", reset:false});

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

    router.on('route:catchAll', function (path) {
      App.printPageContent(path, "This is a generic Page for " + path);
      console.log("generic route.");
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
