var NavView = Backbone.View.extend({
  el: "#nav",
  className: "nav-container",
  template: "NavView",

  initialize: function () {
    this.render();
  },

  render: function () {
    //var rendered_html = render(this.template, {});
    //this.$el.append(rendered_html(_.extend(this.model.toJSON())));
    //return this.el;
  }

  /*selectMenuItem: function (menuItem) {
    $('.nav li').removeClass('active');
    if (menuItem) {
      $('.' + menuItem).addClass('active');
    }
  }*/

});