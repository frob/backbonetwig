define(['underscore', 'backbone'], function(_, Backbone) {
  var ProjectModel = Backbone.Model.extend({
    // Default attributes for the project.
    defaults: {
      // Ensure that each project created has `content`.
      content: 'empty project...',
      open: false
    },

    initialize: function() {
    },

    // Toggle Open State of this project
    toggleOpen: function() {
      this.save({open: !this.get('open')});
    },

    clear: function() {
      this.destroy();
      this.view.remove();
    }

  });
  return ProjectModel;
});
