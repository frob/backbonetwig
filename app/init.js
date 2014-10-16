// Require.js allows us to configure shortcut alias
require.config({
  basePath: 'js',
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    // Major libraries
    "jquery": "vendor/jquery-1.11.1",
    "underscore": "vendor/underscore",
    "backbone": "vendor/backbone/backbone",
    "twig": "vendor/twigjs/twig"

    // Require.js plugins
    //text: 'libs/require/text',

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
  App.initialize();
  Router.initialize({});
});
