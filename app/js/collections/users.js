define([
  'underscore',
  'backbone',
  'js/models/user'
], function(_, Backbone, userModel) {
  var userCollection = Backbone.Collection.extend({
    model:userModel,
    url:"/repos/drupal/entity/user"
  });
  return userCollection;

});
