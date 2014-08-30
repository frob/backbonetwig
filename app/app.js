define([
  'jquery',
  'underscore',
  'backbone',
  'twig'
], function ($, _, Backbone, Twig) {
  var initialize = function() {
    //var pageTemplate = require(['templates/page.html.twig']);
    var page = Twig.twig({
      href: 'templates/page.html.twig',
      async: false
    });
    $('body').append(page.render({
      site_name: 'This is the Site Name, live demo please work',
      messages: 'these messages are being output in a twig template'
    }));
  };
  return {
    initialize: initialize
  };
});
