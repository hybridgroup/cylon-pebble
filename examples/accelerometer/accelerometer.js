var Cylon = require('cylon');

Cylon.config({
  api: {
    host: '0.0.0.0',
    port: '8080',
    ssl:  false
  }
})

Cylon.api();

Cylon.robot({
  name: 'pebble',

  connection: { name: 'pebble', adaptor: 'pebble' },
  device: { name: 'pebble', driver: 'pebble' },

  work: function(my) {
    my.pebble.on('accel', function(data) {
      console.log(data);
    });
  }
}).start();
