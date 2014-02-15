var ArtistDetailView = Backbone.View.extend({
  template: "ArtistDetailView",

  render: function (selector) {
    var that = this;
    that.el = $(selector);

    $el = this.el;

    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html,$el)
    });

  },

  renderView: function(html,$el){
    var view = this;
    $el.empty();
    $.when($el.append(html(_.extend(this.model.toJSON())))).then(function() {
      view.setElement($(".artist-details"));
    });
    this.setOverflow();
  },

  events: {
    "click .close-btn"   : "close"
  },

  close: function(){
    $('#artist-detail-container').height(0);
    if ( this.beforeClose ) {
      this.beforeClose();
    }
    this.remove();
    this.off();
  },

  setOverflow: function(){
    var h = $(window).height();
    $('#artist-detail-container').height(h);
  }

});
