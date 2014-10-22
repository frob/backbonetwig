define([
  'jquery',
  'twig'
  ], function ($, Twig) {

  var printNavigation = function(active) {
    var menu = Twig.twig({
      href: 'templates/menu.html.twig',
      async: false
    });

    return menu.render({
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
    });
  }

    return {
      render: printNavigation
    }
});
