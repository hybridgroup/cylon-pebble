Cylon = require('cylon')

Cylon.api host: '0.0.0.0', port: '8080'

class PebbleRobot
  connection:
    name: 'pebble', adaptor: 'pebble'

  device:
    name: 'pebble', driver: 'pebble'

  work: (self) ->
    c = 100
    every 1.second(), ->
      c++
      str = "c: #{c}"
      self.pebble.message_queue().push(str)
      console.log(self.pebble.last_message())

bot = new PebbleRobot()
bot.name = 'pebble'
Cylon.robot bot

Cylon.start()
