// Creates a local collection, will not be visible to the server
Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({ message: message });
};
