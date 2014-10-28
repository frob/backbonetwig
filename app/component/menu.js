define([
  'jquery',
  'twig',
  'underscore',
  'backbone'
  ], function ($, Twig, _, Backbone) {

  var printNavigation = function(active) {
    var MenuItem = Backbone.Model.extend({
      initialize: function () {

      },
      defaults: {
        class: undefined,
        href: undefined,
        attributes: undefined
      }
    });

    menuItems = [
      new MenuItem({
        class: 'menu-item',
        href: '/#',
        attributes: undefined,
        text: 'Home'
      }),
      new MenuItem({
        class: 'menu-item',
        href: '/#resume',
        attributes: undefined,
        text: 'Resume'
      }),
      new MenuItem({
        class: 'menu-item',
        href: '/#contact',
        attributes: undefined,
        text: 'Contact'
      }),
      new MenuItem({
        class: 'menu-item',
        href: '/#blog',
        attributes: undefined,
        text: 'Blog'
      }),
      new MenuItem({
        class: 'menu-item',
        href: '/#portfolio',
        attributes: undefined,
        text: 'Portfolio'
      }),
    ];

    var MenuItemView = Backbone.View.extend({
      tagName: 'a',
      menuSelector: '.main-nav',
      render: function () {
        this.$el.text(this.attributes.text);
        $(this.menuSelector).append(this.el);
        return this;
      },
      events: {
        'click': function(event) {
          this.$el.addClass("active");
        }
      }
    });

    menuItemsView = [];

    for (var i = 0; i < menuItems.length; i++) {
      menuItemsView.push({ model: new MenuItemView(menuItems[i]) });
    }

    var Navigation = Backbone.Collection.extend({
      initialize: function () {

      },
      model: MenuItem
    });

    var nav = new Navigation();
    nav.add(menuItems);

    var menu = Twig.twig({
      href: 'templates/menu.html.twig' + "?bust=" + (new Date()).getTime(),
      async: false
    });

    $('.nav-wrapper').append(menu.render({ menuClass: 'main-nav menu' }));

    for (var i = 0; i < menuItemsView.length; i++) {
      menuItemsView[i].model.render();
    }
  }

  return {
    render: printNavigation
  }
});
