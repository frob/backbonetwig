define([
  'jquery',
  'twig',
  'menu'
  ], function ($, Twig, Menu) {
    var content = '';
    var first_sidebar = '';
    var second_sidebar = '';
    var footer = '';


    var printPage = function(site_name, page_title, content, template, selector) {
      if (content === undefined || content === "") content = '';
      if (template === undefined || template === "") template = 'page';
      if (selector === undefined || selector === "") selector = 'body';

      var page = Twig.twig({
        href: 'templates/' + template + '.html.twig' + "?bust=" + (new Date()).getTime(),
        async: false
      });

      var html = page.render({
        site_name: site_name,
        title: page_title,
        content: content
      });

      if( selector != 'body') {
        var parsedHTML  = $.parseHTML(html);
        html = $(selector, html).html();
      }

      $(selector).html(html);

      Menu.render();
    };

    var printMessage = function(message, reset) {
      // Default to empty message
      if (message === undefined || message === "") message = '';
      if (reset === undefined || reset === "") reset = true;

      if(reset) {
        $(".messages").html(message);
      }
      else {
        $(".messages").append(message);
      }

    };
    return {
      printPage: printPage,
      printMessage: printMessage
    }
});
