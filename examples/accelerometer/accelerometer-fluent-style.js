var cylon = require('cylon');

cylon.config({
  api: {
    host: '0.0.0.0',
    port: '8080',
    ssl:  false
  }
});

cylon.api();

cylon.robot({
  name: 'pebble',
  connection: { name: 'pebble', adaptor: 'pebble' },
  device: { name: 'pebble', driver: 'pebble' }
})

.on('ready', function(my) {
    my.pebble.on('accel', function(data) {
      console.log(data);
    });
})

.start();
