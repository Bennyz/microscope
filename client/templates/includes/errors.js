Template.errors.helpers({
  errors: function() {
    return Errors.find();
  }
});

Template.errors.onRendered(function() {
  var error = this.data;
  console.log(error);
});
