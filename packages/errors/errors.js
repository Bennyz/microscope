Errors = {
  collection: new Mongo.Collection(null),

  throw: function(errorMessage) {
    Errors.collection.insert({ message: errorMessage, seen: false});
  }
};

Errors.collection.after.insert(function(userId, error) {
  Meteor.setTimeout(function(){
    Errors.collection.remove(error._id);
  }, 3000);
});
