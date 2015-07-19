Template.postEdit.onCreated(function() {
  Session.set('postEditErrors', {});
});

Template.postEdit.helpers({
  errorMessage: function(field) {
    return Session.get('postEditErrors')[field];
  },

  errorClass: function(field) {
    return !!Session.get('postEditErrors')[field] ? 'has-error' : '';
  }
});

Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      _id: currentPostId
    }

    var errors = validatePost(postProperties);
    if (errors.title || errors.url) {
      return Session.set('postEditErrors', errors);
    }

    Meteor.call('postUpdate', postProperties, function(err, result) {
      if (err) {
        return Errors.throw(err.reason);
      } else if (result.postExists) {
        return Errors.throw('URL already exists');
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
