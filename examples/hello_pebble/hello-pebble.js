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
    my.pebble.send_notification("Hello Pebble!");

    my.pebble.on('button', function(data) {
      console.log("Button pushed: " + data);
    });

    my.pebble.on('tap', function(data) {
      console.log("Tap event detected");
    });
  }
}).start();
