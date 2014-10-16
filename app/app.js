define([
  'jquery',
  'underscore',
  'backbone',
  'twig',
  'less!styles/vendor/pure/base',
  'less!styles/vendor/normalize.less/normalize',
  'less!styles/less/variables',
  'less!styles/less/generic'
], function ($, _, Backbone, Twig) {
  var initialize = function() {
    //var pageTemplate = require(['templates/page.html.twig']);
    var page = Twig.twig({
      href: 'templates/page.html.twig',
      async: false
    });

    var menu = Twig.twig({
      href: 'templates/menu.html.twig',
      async: false
    })

    $('body').html(page.render({
      site_name: 'Frank Robet Anderson',
      messages: 'these messages are being output in a twig template',
      title: 'home',
      nav: menu.render({
        items: [
          {
            address: '#',
            text: 'home'
          },
          {
            address: '#resume',
            text: 'resume'
          },
          {
            address: '#contact',
            text: 'contact'
          },
          {
            address: '#blog',
            text: 'blog'
          },
          {
            address: '#portfolio',
            text: 'portfolio'
          }
        ]
      })
    }));
  };
  return {
    initialize: initialize
  };
});
