var ArtistDetailView = Backbone.View.extend({
  className: "artist-detail",
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
  },

  events: {
    "click .close-btn"   : "close"
  },

  close:function(){
    if ( this.beforeClose ) {
      this.beforeClose();
    }
    this.remove(); 
    this.off();
  }

});
