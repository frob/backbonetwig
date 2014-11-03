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

    var printMessage = function(text, reset) {
      // Default to empty message
      if (text === undefined || text === "") message = '';
      if (reset === undefined || reset === "") reset = true;

      var message  = Twig.twig({
        href: 'templates/message.html.twig' + "?bust=" + (new Date()).getTime(),
        async: false
      });

      var html = message.render({
        'text': text,
        'message_class': "message page-width"
      })

      if(reset) {
        $(".messages").html(html);
      }
      else {
        $(".messages").append(html);
      }

    };
    return {
      printPage: printPage,
      printMessage: printMessage
    }
});
