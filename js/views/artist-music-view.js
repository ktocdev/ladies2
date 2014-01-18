var ArtistMusicView = Backbone.View.extend({
  template: "ArtistMusicView",
  
  initialize: function () {

  },

  renderAlbums: function() {
    var albumsListView = new AlbumsListView({
      // Albums collection on the Artist Model
      collection : this.model.albums,
      // Pass the container to which it is to be appended
      el : $('.albums', this.$el)
    });
    albumsListView.render();   
    
  },

  render: function (selector) {    
    var that = this;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html,selector)
    });
  },

  renderView: function(html,selector){
    $(selector).append(html(_.extend(this.model.toJSON())));
    this.renderAlbums();
  }

});