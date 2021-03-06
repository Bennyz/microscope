Package.describe({
  name: 'bennyz:errors',
  version: '0.0.1',
  summary: 'Handle errors nicely',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('matb33:collection-hooks', ['client', 'server']);
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export) {
    api.export('Errors');
  }
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers'], 'client');
  api.use('bennyz:errors', 'client');
  api.use('matb33:collection-hooks', 'client');
  api.addFiles('errors-tests.js', 'client');
});
