var ArtistMusicView = Backbone.View.extend({
  template: "ArtistMusicView",

  initialize: function () {
    this.render();
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

  render: function () {
    var rendered_html = render(this.template, {});
    //this.$el.append(rendered_html(_.extend(this.model.toJSON())));
    //this.renderAlbums();
    //return this.el;

    //this.$el.html(this.template(this.model.toJSON()));  
    // Render the albums for Artist
    //this.renderAlbums();
    //return this.el;     
  }

});