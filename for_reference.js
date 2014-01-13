var postsObject = [{
    "_id": "50f5f5d4014e045f000002",
    "author": {
        "name": "Chris Crawford",
        "photo": "http://example.com/photo.jpg"
    },
    "status": "This is a sample message.",
        "comments": [{
            "_id": "5160eacbe4b020ec56a46844",
            "text": "This is the content of the comment.",
            "author": "Bob Hope"
        }, {
            "_id": "5160eacbe4b020ec56a46845",
            "text": "This is the content of the comment.",
            "author": "Bob Hope"
        }]
}, {
    "_id": "50f5f5d4014e045f000003",
        "author": {
        "name": "Brown Robert",
            "photo": "http://example.com/photo.jpg"
    },
        "status": "This is another sample message.",
        "comments": [{
        "_id": "5160eacbe4b020ec56a46846",
            "text": "This is the content of the comment.",
            "author": "Bob Hope"
    }, {
        "_id": "5160eacbe4b020ec56a46847",
            "text": "This is the content of the comment.",
            "author": "Bob Hope"
    }]
}];

// Comment Model
var Comment = Backbone.Model.extend({
    idAttribute: '_id',
    defaults: {
        text: "",
        author: ""
    }
});

// Comments collection
var Comments = Backbone.Collection.extend({
    model: Comment
});

// Author Model
var Author = Backbone.Model.extend({
    defaults: {
        text: "",
        author: ""
    }
});

// Post Model
var Post = Backbone.Model.extend({
    idAttribute: '_id',
    defaults: {
        author: "",
        status: ""
    },
    parse: function (resp) {
        // Create a Author model on the Post Model
        this.author = new Author(resp.author || null, {
            parse: true
        });
        // Delete from the response object as the data is
        // alredy available on the  model
        delete resp.author;
        // Create a comments objecton model 
        // that will hold the comments collection
        this.comments = new Comments(resp.comments || null, {
            parse: true
        });
        // Delete from the response object as the data is
        // alredy available on the  model
        delete resp.comments;

        // return the response object 
        return resp;
    }
})
// Posts Collection 
var Posts = Backbone.Collection.extend({
    model: Post
});

var PostsListView = Backbone.View.extend({
    el: "#container",
    renderPostView: function(post) {
        // Create a new postView
        var postView = new PostView({
            model : post
        });
        // Append it to the container
        this.$el.append(postView.el);
        postView.render();
    },
    render: function () {
        var thisView = this;
        // Iterate over each post Model
        _.each(this.collection.models, function (post) {
            // Call the renderPostView method
            thisView.renderPostView(post);
        });
    }
});


var PostView = Backbone.View.extend({
    className: "post",
    template: _.template($("#post-template").html()),
    renderComments: function() {
        var commentsListView = new CommentsListView({
            // Comments collection on the Post Model
            collection : this.model.comments,
            // Pass the container to which it is to be appended
            el : $('.comments', this.$el)
        });
        commentsListView.render();        
    },
    render: function () {
        this.$el.empty();
        //  Extend the object toi contain both Post attributes
        // and also the author attributes
        this.$el.append(this.template(_.extend(this.model.toJSON(),
            this.model.author.toJSON()
       )));
       // Render the comments for each Post
       this.renderComments();
    }
});

var CommentsListView = Backbone.View.extend({
    renderCommentView: function(comment) {
        // Create a new CommentView
        var commentView = new CommentView({
            model : comment
        });
        // Append it to the comments ul that is part
        // of the view
        this.$el.append(commentView.el);
        commentView.render();
    },
    render: function () {
        var thisView = this;
        // Iterate over each Comment Model
        _.each(this.collection.models, function (comment) {
            // Call the renderCommentView method
            thisView.renderCommentView(comment);
        });
    }
});


var CommentView = Backbone.View.extend({
    tagName: "li",
    className: "comment",
    template: _.template($("#comment-template").html()),
    render: function () {
        this.$el.empty();
        this.$el.append(this.template(this.model.toJSON()));
    }
});

// Create a posts collection 
var posts = new Posts(postsObject, {parse: true});

// Pass it to the PostsListView
var postsListView = new PostsListView({
    collection: posts
});
// Render the view
postsListView.render();
