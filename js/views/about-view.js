var AboutView = Backbone.View.extend({
  template: "AboutView",
  el: "#about-container",

  initialize: function () {

  },

  render: function (selector) {
    var that = this;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html,selector);
    });

  },

  renderView: function(html,selector){
    $(selector).append(html(_.extend(this.model.toJSON())));
    this.$el.attr('class','closed');
  },

  events: {
    "click .about-title": "toggleTab"
  },


  toggleTab: function(e){
    var $about = this.$el.find('.about');
    if (this.$el.hasClass('closed')){
      $about.animate({
        height: "100%",
        }, 600, "swing", function() {
      });
      $('html, body').animate({
        scrollTop: $(document).height()
        }, 600);
        this.$el.removeClass('closed');
      } else {
        $about.animate({
          height: "0",
          }, 500, "swing", function() {
        });
        this.$el.addClass('closed');
      }
    }

});