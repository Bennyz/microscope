Errors = {
  collection: new Mongo.Collection(null),

  throw: function(message) {
    Errors.collection.insert({ message: message, seen: false});
  }
};

Errors.collection.after.insert(function(userId, error) {
  Meteor.setTimeout(function(){
    Errors.collection.remove(error._id);
  }, 3000);
});
