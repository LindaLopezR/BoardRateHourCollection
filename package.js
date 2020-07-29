Package.describe({
  name: 'igoandtrack:board-ratehour-collection',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.4');
  api.use('ecmascript');
  api.use('zimme:collection-timestampable@1.0.9');
  api.use('mongo@1.1.17');
  api.mainModule('board-ratehour-collection.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('board-ratehour-collection');
  api.mainModule('board-ratehour-collection-tests.js');
});
