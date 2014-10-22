// Require.js allows us to configure shortcut alias
require.config({
  basePath: 'js',
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    // Major libraries
    "jquery": "vendor/jquery-1.11.1",
    "underscore": "vendor/underscore",
    "backbone": "vendor/backbone/backbone",
    "twig": "vendor/twigjs/twig",
    "page": "component/page",
    "menu": "component/menu",
    "contentLoader": "component/content",
    "content": "content",


    // Require.js plugins
    "async":  'vendor/requirejs-plugins/src/async',
    "font":   'vendor/requirejs-plugins/src/font',
    "goog":   'vendor/requirejs-plugins/src/goog',
    "image":  'vendor/requirejs-plugins/src/image',
    "json":   'vendor/requirejs-plugins/src/json',
    "noext":  'vendor/requirejs-plugins/src/noext',
    "mdown":  'vendor/requirejs-plugins/src/mdown',
    "propertyParser" : 'vendor/requirejs-plugins/src/propertyParser',
    "markdownConverter" : 'vendor/requirejs-plugins/lib/Markdown.Converter',
    "text" : 'vendor/requirejs-plugins/lib/text'
//    "content": 'content'

    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    //templates: 'templates'
  },
  packages: [
    {
      name: 'less',
      location: 'vendor/require/plugins/require-less',
      main: 'less'
    }
  ],
  less: {
    relativeUrls: true
  }
  // map: {
  //   '*': {
  //     'less': 'require-less/less' // path to less
  //   }
  // }

});

// Let's kick off the application

require([
  'router',
  'app'
], function(Router, App){
  console.log(App);
  App.initialize("Frank Robert Anderson");
  console.log(App.getSiteName());
  Router.initialize(App, {});
});
