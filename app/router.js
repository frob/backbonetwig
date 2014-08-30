// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'js/collections/users',
  'js/views/userView'
], function ($, _, Backbone, Users, UserView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default - catch all
      '': 'defaultAction',
      // user list
      'user': 'userList'
    }
  });

  var initialize = function(options){
    var router = new AppRouter(options);

    router.on('route:defaultAction', function (actions) {
      console.log("default route");
    });

    router.on('route:userList', function (actions) {
      console.log("userlist route.");
      users = new Users();
      userView = new UserView({model:users});
      users.fetch();
      $('#main-content').html(userView.render().el);
      console.log(userView.render())
    })

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
