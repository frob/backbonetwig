define([
  'underscore',
  'backbone',
  'js/models/user'
], function(_, Backbone, userModel) {
  var userView = Backbone.View.extend({
    tagName:"li",

    //template:_.template($('#tpl-wine-list-item').html()),

    render:function (eventName) {
      console.log(this.model.toJSON());
      //$(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return userView;

});
