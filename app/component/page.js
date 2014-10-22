define([
  'jquery',
  'twig',
  'menu'
  ], function ($, Twig, Menu) {
    var content = '';
    var first_sidebar = '';
    var second_sidebar = '';
    var footer = '';

    var printPage = function(site_name, page_title, message, content) {
      // Default to empty message
      if (message === undefined) message = '';
      if (content === undefined) content = '';

      var page = Twig.twig({
        href: 'templates/page.html.twig',
        async: false
      });

      $('body').html(page.render({
        site_name: site_name,
        messages: message,
        title: page_title,
        nav: Menu.render(),
        content: content
      }));
    };


    return {
      printPage: printPage
    }
});
