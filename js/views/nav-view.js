var NavView = Backbone.View.extend({
  el: "#nav",
  className: "nav-container",
  template: _.template($("#nav-template").html()),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    //return this;
  }

  /*selectMenuItem: function (menuItem) {
    $('.nav li').removeClass('active');
    if (menuItem) {
      $('.' + menuItem).addClass('active');
    }
  }*/

});