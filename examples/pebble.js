var Cylon = require('cylon');

Cylon.api({
  host: '0.0.0.0',
  port: '8080'
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
    //var c;
    //c = 100;
    //return every(1..second(), function() {
      //var str;
      //c++;
      //str = "c: " + c;
      //my.pebble.message_queue().push(str);
      //return console.log(my.pebble.last_message());
    //});
  }

}

Cylon.robot(pebbleRobot);
Cylon.start();
