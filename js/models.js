// Album Model
var Album = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    albumName: ""
  }
});

// Albums collection
var Albums = Backbone.Collection.extend({
  model: Album
});

// Artist Model
var Artist = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: "",
    fullName: "",
    vocalType: "unknown",
    love1: ""
  },
  parse: function (resp) {
    // Create a albums objecton model 
    // that will hold the albums collection
    this.albums = new Albums(resp.albums || null, {
        parse: true
    });
    // Delete from the response object as the data is
    // alredy available on the  model
    delete resp.albums;

    // return the response object 
    return resp;
  }
});

// Artists Collection 
var Artists = Backbone.Collection.extend({
  model: Artist
});

// Create a artists collection 
var artists = new Artists(artistsObject, {parse: true});

// Pass it to the ArtistsListView
var artistsListView = new ArtistsListView({
  collection: artists
});

// Render the view
artistsListView.render();