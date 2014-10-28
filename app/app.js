define([
  'jquery',
  'underscore',
  'backbone',
  'twig',
  'page',
  'contentLoader',
  'less!styles/vendor/pure/pure',
  'less!styles/vendor/normalize.less/normalize',
  'less!styles/less/variables',
  'less!styles/less/generic'
], function ($, _, Backbone, Twig, Page, Content) {
  // @TODO make this a protected attribute
  var site_name;

  var initialize = function(s_site_name) {
    this.site_name = s_site_name;
    //var pageTemplate = require(['templates/page.html.twig']);
  };

  var getSiteName = function() {
    return this.site_name;
  };

  var setSiteName = function(s_site_name) {
    this.site_name = s_site_name;
  }

  var initializePage = function(page_title, message) {
    var sn = this.site_name;
    defered = Content.returnContent(page_title);
    defered.done( function (content) {
      Page.printPage(sn, page_title, message, content);
    });
  }

  var printPageContent = function(page_title, message) {
    // @todo: distiguish this methode from initializePage by making it only
    // redraw/update content an not redraw the whole page.
    var sn = this.site_name;
    defered = Content.returnContent(page_title);
    defered.done( function (content) {
      Page.printPage(sn, page_title, message, content);
    });
  }

  return {
    initialize: initialize,
    getSiteName: getSiteName,
    setSiteName: setSiteName,
    initializePage: initializePage,
    printPageContent: printPageContent
  };
});
