Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      _id: currentPostId
    }

    Meteor.call('postUpdate', postProperties, function(err, result) {
      if (err) {
        return throwError(err.reason);
      } else if (result.postExists) {
        return throwError('URL already exists');
      } else {
        Router.go('postPage', { _id: currentPostId });
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
})
