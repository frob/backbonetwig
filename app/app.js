define([
  'jquery',
  'underscore',
  'backbone',
  'twig',
  'page',
  'dynamicContent',
  'less!styles/vendor/pure/pure',
  'less!styles/vendor/normalize.less/normalize',
  'less!styles/less/variables',
  'less!styles/less/generic'
], function ($, _, Backbone, Twig, Page, DynamicContent) {
  // @TODO make this a protected attribute
  var site_name;


  var initialize = function(s_site_name) {
    this.site_name = s_site_name;
  };

  var getSiteName = function() {
    return this.site_name;
  };

  var setSiteName = function(s_site_name) {
    this.site_name = s_site_name;
  }

  var initializePage = function(options) {
    Page.printPage(this.site_name, options.route, "");
  }

  var printPageContent = function(options) {
    defered = DynamicContent.fetchContent(options.route);
    var sn = this.site_name;

    defered.done( function (content) {
      Page.printPage(sn, options.route, content, options.template, options.selector);
    });
  }

  var printPageContentJSON = function (path) {
    defered = DynamicContent.fetchJSON(path);
    var sn = this.site_name;

    defered.done( function (content) {
      Page.printPageJSON(sn, path, content);
    });
  }

  var printMessage = function(options) {
    Page.printMessage(options.message, options.reset);
  }

  return {
    initialize: initialize,
    getSiteName: getSiteName,
    setSiteName: setSiteName,
    initializePage: initializePage,
    printPageContent: printPageContent,
    printPageContentJSON: printPageContentJSON,
    printMessage: printMessage
  };
});
