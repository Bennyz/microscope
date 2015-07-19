Template.meteorErrors.helpers({
  errors: function() {
    return Errors.collection.find();
  }
});
