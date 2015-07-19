// Creates a local collection, will not be visible to the server
Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({ message: message });
};

Errors.after.insert(function(userId, error) {
  console.log(error);
  Meteor.setTimeout(function() {
    Errors.remove(error._id);
  }, 3000);
})
