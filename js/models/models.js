// Album Model
var Album = Backbone.Model.extend({
  idAttribute: 'id',
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
  idAttribute: 'path',
  defaults: {
    name: "",
    className: "",
    fullName: "",
    vocalType: "",
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

// Create an artists object 
var artists = new Artists(artistsObject, {parse: true});

// About Model
var About = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    title: "",
    path: "",
    copy: "",
    email: ""
  }
});

// Create an about object 
var about = new About(aboutObject, {parse: true});
