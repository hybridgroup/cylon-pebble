var Cylon = require('cylon');

Cylon.api({
  host: '0.0.0.0',
  port: '8080',
  ssl:  false
});

pebbleRobot = {
  name: 'pebble',

  connection: {
    name: 'pebble',
    adaptor: 'pebble'
  },

  device: {
    name: 'pebble',
    driver: 'pebble'
  },

  work: function(my) {
    my.pebble.on('button', function(data) {
      console.log("Button pushed: " + data);
    });
  }

}

Cylon.robot(pebbleRobot);
Cylon.start();
