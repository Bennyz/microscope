Tinytest.add('Errors - collection', function (test) {
  test.equal(Errors.collection.find({}).count(), 0);

  Errors.throw('New error');
  test.equal(Errors.collection.find({}).count(), 1);

  Errors.collection.remove({});
});

Tinytest.addAsync('Errors - template', function(test, done) {
  Errors.throw('New error');
  test.equal(Errors.collection.find({}).count(), 1);

  UI.insert(UI.render(Template.meteorErrors), document.body);

  Meteor.setTimeout(function() {
    test.equal(Errors.collection.find({}).count(), 0);
    done();
  }, 3500);
});
