Package.describe({
  summary: "A very basic chat package with minimum config necessary to get running",
  version: "0.1.3",
  git: "https://github.com/afruth/chapp"
});

Package.onUse(function(api) {
  api.use([
      'session',
      'templating',
      'ui',
      'mrt:moment@1.7.0'
  ])
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('./lib/client/chapp.html','client');
  api.addFiles('./lib/common/afruth:chapp-collections.js',['client','server']);
  api.addFiles('./lib/server/afruth:chapp-server.js','server');
  api.addFiles('./lib/client/afruth:chapp-client.js','client');
  api.addFiles('./lib/client/afruth:chapp.css','client');



});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('afruth:chapp');
  api.addFiles('afruth:chapp-tests.js');
});
