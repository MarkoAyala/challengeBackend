const server = require('./src/app.js');
// Syncing all the models at once.
server.set('port',3001)
  server.listen(server.get('port'), () => {
    console.log('encara messii en el 3001'); // eslint-disable-line no-console
  });
