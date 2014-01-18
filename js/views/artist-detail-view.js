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
    $el.empty();
    $el.append(html(_.extend(this.model.toJSON())));

  },

  events: {
    "click .close-btn"   : "close"
  },

  close:function(){
    console.log('closing');
    if ( this.beforeClose ) {
      this.beforeClose();
    }

    this.remove(); 
    this.off();
  }

});
