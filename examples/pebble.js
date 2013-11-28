Cylon = require('cylon');

Cylon.api({
  host: '0.0.0.0',
  port: '8080'
});

PebbleRobot = (function() {

  function PebbleRobot() {}

  PebbleRobot.prototype.connection = {
    name: 'pebble',
    adaptor: 'pebble'
  };

  PebbleRobot.prototype.device = {
    name: 'pebble',
    driver: 'pebble'
  };

  PebbleRobot.prototype.work = function(self) {
    var c;
    c = 100;
    return every(1..second(), function() {
      var str;
      c++;
      str = "c: " + c;
      self.pebble.message_queue().push(str);
      return console.log(self.pebble.last_message());
    });
  };

  return PebbleRobot;

})();

bot = new PebbleRobot();
bot.name = 'pebble';
Cylon.robot(bot);

Cylon.start();